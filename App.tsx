import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bachData, additionalBeliefs, appConfig } from "./constants";
import { Flower, EmissionPanelItem, EmissionPanelNoeticFormula, EmissionPanelSimpleRate, NoeticFormulaData } from "./types";
import ListItem from "./components/ListItem";
import EmissionItem from "./components/EmissionItem";
import { AppIcons } from "./components/icons";
import { suggestAntidotes, generateAffirmation } from "./geminiService";
import { playStartSound, playEndSound, initializeAudioContext, isAudioAvailable } from "./audioUtils";

export const App: React.FC = () => {
    const C = appConfig.colors;

    const [activeTab, setActiveTab] = useState<"beliefs" | "flowers">("beliefs");
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0); // 0: Closed/Start, 1: Group, 2: Flower, 3: Belief, 4: Antidote
    const [subjectName, setSubjectName] = useState("");
    const [subjectDOB, setSubjectDOB] = useState(""); 
    const [subjectCRI, setSubjectCRI] = useState("");
    const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
    const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
    const [selectedBelief, setSelectedBelief] = useState<string | null>(null);
    const [isCustomBeliefVisible, setIsCustomBeliefVisible] = useState(false);
    const [customBeliefInput, setCustomBeliefInput] = useState("");
    const [antidoteInput, setAntidoteInput] = useState("");
    const [emissionPanelItems, setEmissionPanelItems] = useState<EmissionPanelItem[]>([]);
    const [isBroadcasting, setIsBroadcasting] = useState(false);
    const [timerInput, setTimerInput] = useState("30"); 
    const [timerDisplay, setTimerDisplay] = useState("00:00:00");
    const [sessionLog, setSessionLog] = useState("");
    
    const [suggestedAntidotes, setSuggestedAntidotes] = useState<string[]>([]);
    const [isSuggestingAntidotes, setIsSuggestingAntidotes] = useState(false);
    
    // State for AI Affirmation Suggestions
    const [generatingAffirmationId, setGeneratingAffirmationId] = useState<number | null>(null); // ID of item for which suggestions are loading or shown
    const [suggestedAffirmations, setSuggestedAffirmations] = useState<string[]>([]);


    const timerIntervalRef = useRef<number | null>(null);
    const elapsedSecondsRef = useRef(0);
    const totalDurationSecondsRef = useRef<number | null>(null);
    const textareaLogRef = useRef<HTMLTextAreaElement>(null);

    const conflictGroupOptions = [...Object.keys(bachData), "Otros"];


    const logEvent = useCallback((message: string) => {
        const timestamp = new Date().toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setSessionLog((prevLog) => {
            const newLog = `${prevLog}[${timestamp}] ${message}\n`;
            if (textareaLogRef.current) {
                setTimeout(() => {
                    textareaLogRef.current!.scrollTop = textareaLogRef.current!.scrollHeight;
                }, 0);
            }
            return newLog;
        });
    }, []);

    useEffect(() => {
        logEvent("Herramienta Nivel 2 iniciada. Lista para la sesión.");
        return () => {
            if (timerIntervalRef.current) {
                clearInterval(timerIntervalRef.current);
            }
        };
    }, [logEvent]);
    
    const handleToggleWizard = () => {
        const newWizardState = !isWizardOpen;
        setIsWizardOpen(newWizardState);
        if (newWizardState && currentStep === 0) {
            goToStep(1); 
        }
        logEvent(`Asistente de protocolo ${newWizardState ? 'abierto' : 'cerrado'}.`);
    };

    const goToStep = (stepNumber: number) => {
        setCurrentStep(stepNumber);
        logEvent(`Navegando al Paso ${stepNumber} del asistente.`);
    };

    const handleSelectConflictGroup = (groupName: string) => {
        setSelectedGroup(groupName);
        setSelectedFlower(null); 
        setSelectedBelief(null);
        setSuggestedAntidotes([]);
        setAntidoteInput("");
        logEvent(`Grupo seleccionado: ${groupName}`);
        if (groupName === "Otros") {
            goToStep(3); // Skip flower selection
        } else {
            goToStep(2); // Proceed to flower selection
        }
    };

    const handleSelectBachFlower = (flower: Flower) => {
        setSelectedFlower(flower);
        logEvent(`Flor de Bach seleccionada: ${flower.name} (Tasa: ${flower.rate})`);
        goToStep(3); 
    };

    const handleSelectBelief = (belief: string) => {
        setSelectedBelief(belief);
        setSuggestedAntidotes([]);
        setAntidoteInput("");
        logEvent(`Creencia seleccionada: "${belief}"`);
        goToStep(4); 
    };
    
    const handleConfirmCustomBelief = () => {
        if (customBeliefInput.trim()) {
            handleSelectBelief(customBeliefInput.trim());
            setIsCustomBeliefVisible(false);
            // setCustomBeliefInput(""); // Keep input if user wants to refine
        }
    };
    
    const handleSuggestAntidotesAI = async () => {
        if (!selectedBelief) {
            alert("Por favor, seleccione una creencia primero.");
            return;
        }
        setIsSuggestingAntidotes(true);
        setSuggestedAntidotes([]);
        logEvent("Solicitando sugerencias de antídotos a la IA...");
        try {
            const antidotes = await suggestAntidotes(selectedBelief);
            setSuggestedAntidotes(antidotes);
            logEvent(`Antídotos sugeridos por IA recibidos: ${antidotes.join('; ')}`);
        } catch (error) {
            console.error("Error suggesting antidotes:", error);
            logEvent(`Error al sugerir antídotos: ${error instanceof Error ? error.message : String(error)}`);
            alert(`Error al sugerir antídotos: ${error instanceof Error ? error.message : String(error)}`);
        } finally {
            setIsSuggestingAntidotes(false);
        }
    };

    const handleGenerateAffirmationAI = async (itemId: number) => {
        const itemIndex = emissionPanelItems.findIndex(item => item.id === itemId);
        if (itemIndex === -1) return;

        const currentItem = emissionPanelItems[itemIndex];
        if (currentItem.type !== 'noetic_formula' || !currentItem.data) return;

        setGeneratingAffirmationId(itemId);
        setSuggestedAffirmations([]); // Clear previous suggestions
        logEvent(`Generando sugerencias de afirmación con IA para: ${currentItem.data.flower?.name || 'Creencia'} - ${currentItem.data.neutralize}`);
        try {
            const affirmationSuggestions = await generateAffirmation(currentItem.data as NoeticFormulaData);
            setSuggestedAffirmations(affirmationSuggestions);
            logEvent(`Sugerencias de afirmación recibidas: ${affirmationSuggestions.join('; ')}`);
            // generatingAffirmationId remains itemId to show suggestions in EmissionItem
        } catch (error) {
            console.error("Error generating affirmation suggestions:", error);
            logEvent(`Error al generar sugerencias de afirmación: ${error instanceof Error ? error.message : String(error)}`);
            alert(`Error al generar sugerencias de afirmación: ${error instanceof Error ? error.message : String(error)}`);
            setGeneratingAffirmationId(null); // Clear on error so UI doesn't get stuck
        }
    };

    const handleSelectSuggestedAffirmation = (itemId: number, selectedAffirmation: string) => {
        setEmissionPanelItems(prevItems =>
            prevItems.map(prevItem => {
                if (prevItem.id === itemId && prevItem.type === 'noetic_formula') {
                    return {
                        ...prevItem,
                        data: {
                            ...prevItem.data,
                            affirmation: selectedAffirmation,
                        },
                    };
                }
                return prevItem;
            })
        );
        if (selectedAffirmation) {
            logEvent(`Afirmación seleccionada: "${selectedAffirmation}" para item ID ${itemId}`);
        } else {
            logEvent(`Selección de afirmación cancelada para item ID ${itemId}`);
        }
        setSuggestedAffirmations([]);
        setGeneratingAffirmationId(null); // Clear to hide suggestion UI
    };


    const handleGenerateFormula = () => {
        const isOtrosGroup = selectedGroup === "Otros";
        if ((!isOtrosGroup && !selectedFlower) || !selectedBelief || !antidoteInput.trim()) {
            alert(`Por favor, complete ${isOtrosGroup ? '' : 'Flor, '}Creencia y Antídoto para generar la fórmula.`);
            return;
        }

        const newFormulaData: NoeticFormulaData = {
            neutralize: selectedBelief,
            activate: antidoteInput.trim(),
        };
        if (!isOtrosGroup && selectedFlower) {
            newFormulaData.flower = selectedFlower;
        }

        const newFormula: EmissionPanelNoeticFormula = {
            id: Date.now(),
            type: 'noetic_formula',
            data: newFormulaData
        };
        setEmissionPanelItems(prev => [...prev, newFormula]);
        
        let logMessage = "Fórmula generada: ";
        if (newFormulaData.flower) {
            logMessage += `${newFormulaData.flower.name} (Tasa: ${newFormulaData.flower.rate})`;
        } else {
            logMessage += 'Sin flor (Otros)';
        }
        logMessage += ` -> Neutralizar "${selectedBelief}" -> Activar "${antidoteInput.trim()}"`;
        logEvent(logMessage);
        
        // Reset specific fields for next formula in the same group
        setSelectedBelief(null);
        setAntidoteInput("");
        setSuggestedAntidotes([]);
        setIsCustomBeliefVisible(false);
        setCustomBeliefInput("");

        if (isOtrosGroup) {
             goToStep(3); // Back to belief selection for "Otros"
        } else if (selectedGroup) { // Bach Group
            setSelectedFlower(null); // Clear flower to allow new selection in same group
            goToStep(2); // Back to flower selection for the current Bach group
        } else { // Should not happen if selectedGroup is always set
             goToStep(1);
        }
    };

    const handleAddItemToPanel = (itemData: Flower) => {
        const newItem: EmissionPanelSimpleRate = {
            id: Date.now(),
            type: 'simple_rate',
            data: itemData
        };
        setEmissionPanelItems(prev => [...prev, newItem]);
        logEvent(`Tasa simple añadida: ${itemData.name} (${itemData.rate})`);
    };

    const handleRemoveItemFromPanel = (id: number) => {
        const itemToRemove = emissionPanelItems.find(item => item.id === id);
        setEmissionPanelItems(prev => prev.filter(item => item.id !== id));
        if (itemToRemove) {
            const itemName = itemToRemove.type === 'noetic_formula' 
                ? (itemToRemove.data.flower ? `${itemToRemove.data.flower.name} (Tasa: ${itemToRemove.data.flower.rate})` : "Reprogramación de Creencia") 
                : `${itemToRemove.data.name} (${itemToRemove.data.rate})`;
            logEvent(`Item "${itemName}" (ID ${id}) eliminado del panel.`);
        }
    };

    const resetWizard = (closeWizard = true) => {
        setSelectedGroup(null);
        setSelectedFlower(null);
        setSelectedBelief(null);
        setAntidoteInput("");
        setCustomBeliefInput("");
        setIsCustomBeliefVisible(false);
        setSuggestedAntidotes([]);
        setCurrentStep(isWizardOpen && !closeWizard ? 1 : 0); 
        if (closeWizard && isWizardOpen) {
            setIsWizardOpen(false);
        }
        logEvent("Asistente de protocolo reiniciado.");
    };

    const updateTimerDisplay = useCallback(() => {
        const elapsed = elapsedSecondsRef.current;
        const totalTarget = totalDurationSecondsRef.current;
        let timeString = '';
        
        if (totalTarget !== null) { 
            const remaining = Math.max(0, totalTarget - elapsed);
            const rem_hours = Math.floor(remaining / 3600);
            const rem_minutes = Math.floor((remaining % 3600) / 60);
            const rem_seconds = remaining % 60;
            timeString = `-${String(rem_hours).padStart(2, '0')}:${String(rem_minutes).padStart(2, '0')}:${String(rem_seconds).padStart(2, '0')}`;
            if (remaining === 0 && timerIntervalRef.current) {
                 clearInterval(timerIntervalRef.current);
                 timerIntervalRef.current = null;
                 setIsBroadcasting(false);
                 
                 // Reproducir sonido de finalización automática
                 playEndSound().then(success => {
                     if (success) {
                         logEvent("Temporizador finalizado. Transmisión detenida automáticamente. Sonido de finalización reproducido.");
                     } else {
                         logEvent("Temporizador finalizado. Transmisión detenida automáticamente. Error al reproducir sonido de finalización.");
                     }
                 });
            }
        } else { 
            const hours = Math.floor(elapsed / 3600);
            const minutes = Math.floor((elapsed % 3600) / 60);
            const seconds = elapsed % 60;
            timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        setTimerDisplay(timeString);
    }, [logEvent]);

    const handleStartBroadcast = async () => {
        if (isBroadcasting) return;
        if (emissionPanelItems.length === 0) {
            alert("Añada al menos un ítem al panel de emisión antes de transmitir.");
            return;
        }

        // Inicializar contexto de audio y reproducir sonido de inicio
        const audioInitialized = await initializeAudioContext();
        if (audioInitialized) {
            const startSoundSuccess = await playStartSound();
            if (startSoundSuccess) {
                logEvent("Sonido de inicio reproducido exitosamente.");
            } else {
                logEvent("Error al reproducir sonido de inicio.");
            }
        } else {
            logEvent("No se pudo inicializar el contexto de audio. Continuando sin sonido.");
        }

        setIsBroadcasting(true);
        elapsedSecondsRef.current = 0;
        const durationMinutes = parseInt(timerInput, 10);
        totalDurationSecondsRef.current = isNaN(durationMinutes) || durationMinutes <= 0 ? null : durationMinutes * 60;

        logEvent(`Transmisión iniciada. Sujeto: ${subjectName || 'No especificado'}. F.Nac: ${subjectDOB || 'No especificada'}. CRI: ${subjectCRI || 'No especificado'}. Duración: ${totalDurationSecondsRef.current ? `${durationMinutes} min` : 'Indefinida'}.`);
        emissionPanelItems.forEach(item => {
            if (item.type === 'noetic_formula') {
                const flowerInfo = item.data.flower ? `${item.data.flower.name} (Tasa: ${item.data.flower.rate})` : 'Sin flor (Otros)';
                logEvent(`Emitiendo Fórmula: ${flowerInfo} - N: "${item.data.neutralize}" - A: "${item.data.activate}"`);
            } else {
                logEvent(`Emitiendo Tasa Simple: ${item.data.name} (${item.data.rate})`);
            }
        });

        updateTimerDisplay(); 
        timerIntervalRef.current = window.setInterval(() => {
            elapsedSecondsRef.current += 1;
            updateTimerDisplay();
        }, 1000);
    };
    
    const handleStopBroadcast = () => {
        if (!isBroadcasting) return;
        setIsBroadcasting(false);
        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
        }
        
        // Reproducir sonido de finalización
        playEndSound().then(success => {
            if (success) {
                logEvent("Transmisión detenida manualmente. Sonido de finalización reproducido.");
            } else {
                logEvent("Transmisión detenida manualmente. Error al reproducir sonido de finalización.");
            }
        });
    };

    const handleClearSessionLog = () => {
        setSessionLog("");
    };

    const wizardSteps = [
        {
            title: "Paso 1: Seleccionar Grupo",
            condition: () => currentStep === 1,
            content: () => (
                <div className="space-y-2">
                    {conflictGroupOptions.map(groupName => (
                        <ListItem
                            key={groupName}
                            text={groupName}
                            badge={groupName !== "Otros" ? bachData[groupName]?.flowers.length : undefined}
                            isSelected={selectedGroup === groupName}
                            onClick={() => handleSelectConflictGroup(groupName)}
                        />
                    ))}
                </div>
            )
        },
        {
            title: "Paso 2: Seleccionar Flor de Bach",
            condition: () => currentStep === 2 && selectedGroup !== null && selectedGroup !== "Otros",
            content: () => (
                <div className="space-y-2">
                    {bachData[selectedGroup!]?.flowers.map(flower => (
                        <ListItem
                            key={flower.name}
                            text={flower.name}
                            badge={flower.rate}
                            isSelected={selectedFlower?.name === flower.name}
                            onClick={() => handleSelectBachFlower(flower)}
                        />
                    ))}
                </div>
            )
        },
        {
            title: "Paso 3: Seleccionar Creencia a Neutralizar",
            condition: () => currentStep === 3 && selectedGroup !== null && (selectedGroup === "Otros" || (selectedGroup !== "Otros" && selectedFlower !== null)),
            content: () => (
                <div className="space-y-2">
                    {selectedGroup === "Otros" ? (
                        Object.entries(additionalBeliefs).map(([category, beliefs]) => (
                            <div key={category} className="mb-3">
                                <h4 className={`text-base font-semibold ${C.textSecondary} mb-1`}>{category}</h4>
                                {beliefs.map(belief => (
                                    <ListItem
                                        key={belief}
                                        text={belief}
                                        isSelected={selectedBelief === belief}
                                        onClick={() => handleSelectBelief(belief)}
                                    />
                                ))}
                            </div>
                        ))
                    ) : (
                        selectedGroup && bachData[selectedGroup] && (
                            <>
                                <h4 className={`text-base font-semibold ${C.textSecondary} mb-1`}>Creencias del Grupo ({selectedGroup}):</h4>
                                {bachData[selectedGroup].beliefs.map(belief => (
                                    <ListItem
                                        key={belief}
                                        text={belief}
                                        isSelected={selectedBelief === belief}
                                        onClick={() => handleSelectBelief(belief)}
                                    />
                                ))}
                            </>
                        )
                    )}
                    <button 
                        onClick={() => { setIsCustomBeliefVisible(true); setSelectedBelief(null); }}
                        className={`w-full mt-2 py-2 px-3 text-base rounded-md bg-${C.accent}/20 text-${C.accent} hover:bg-${C.accent}/30 transition-colors`}
                    >
                        + Usar Creencia Personalizada
                    </button>
                    {isCustomBeliefVisible && (
                        <div className="mt-2 space-y-2">
                            <textarea
                                value={customBeliefInput}
                                onChange={(e) => setCustomBeliefInput(e.target.value)}
                                placeholder="Escriba la creencia personalizada..."
                                className={`w-full p-2 rounded bg-gray-700 border border-gray-600 ${C.text} focus:ring-1 focus:ring-${C.accent} focus:border-${C.accent} text-base`}
                                rows={3}
                            />
                            <button
                                onClick={handleConfirmCustomBelief}
                                className={`w-full py-2 px-3 text-base rounded-md bg-${C.accent} text-white hover:bg-opacity-80 transition-colors`}
                            >
                                Confirmar Creencia Personalizada
                            </button>
                        </div>
                    )}
                </div>
            )
        },
        {
            title: "Paso 4: Ingresar Antídoto (Percepción Activadora)",
            condition: () => currentStep === 4 && selectedBelief !== null && (selectedGroup === "Otros" || selectedFlower !== null),
            content: () => (
                <div className="space-y-3">
                    {selectedFlower && selectedGroup !== "Otros" && <p className={`${C.textSecondary} text-base`}><strong>Flor:</strong> {selectedFlower?.name} (Tasa: {selectedFlower?.rate})</p>}
                    {selectedGroup === "Otros" && <p className={`${C.textSecondary} text-base`}><strong>Grupo:</strong> Otros (Sin flor asociada)</p>}
                    <p className={`${C.textSecondary} text-base`}><strong>Neutralizar:</strong> "{selectedBelief}"</p>
                    <textarea
                        value={antidoteInput}
                        onChange={(e) => setAntidoteInput(e.target.value)}
                        placeholder="Escriba el antídoto o percepción activadora..."
                        className={`w-full p-2 rounded bg-gray-700 border border-gray-600 ${C.text} focus:ring-1 focus:ring-${C.accent} focus:border-${C.accent} text-base`}
                        rows={3}
                    />
                    <button
                        onClick={handleSuggestAntidotesAI}
                        disabled={isSuggestingAntidotes}
                        className={`w-full flex items-center justify-center gap-2 py-2 px-3 text-base rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-colors disabled:opacity-50`}
                    >
                        <AppIcons.Wand2Icon className="w-4 h-4" />
                        {isSuggestingAntidotes ? "Sugiriendo..." : "Sugerir Antídotos con IA"}
                    </button>
                    {suggestedAntidotes.length > 0 && (
                        <div className="space-y-1 pt-2">
                            <p className={`text-sm ${C.textSecondary}`}>Sugerencias de IA:</p>
                            {suggestedAntidotes.map((sugg, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => { setAntidoteInput(sugg); logEvent(`Antídoto sugerido seleccionado: "${sugg}"`);}}
                                    className={`w-full text-left p-2 text-sm rounded bg-gray-600/50 hover:bg-${C.accent}/30 ${C.text} transition-colors`}
                                >
                                    {sugg}
                                </button>
                            ))}
                        </div>
                    )}
                    <button
                        onClick={handleGenerateFormula}
                        disabled={!antidoteInput.trim() || !selectedBelief}
                        className={`w-full py-2 px-3 text-base rounded-md bg-gradient-to-r ${C.accentGradientFrom} ${C.accentGradientTo} text-white hover:opacity-90 transition-opacity disabled:opacity-50`}
                    >
                        <AppIcons.ZapIcon className="w-4 h-4 inline mr-1" /> Generar {selectedGroup === "Otros" ? "Item de Reprogramación" : "Fórmula Noética"}
                    </button>
                </div>
            )
        }
    ];
    
    const currentWizardStep = wizardSteps.find(step => step.condition());
    const getPreviousStep = () => {
        if (selectedGroup === "Otros" && currentStep === 3) return 1; // From Beliefs (Otros) to Group selection
        return currentStep - 1;
    }

    return (
        <div className={`min-h-screen bg-gradient-to-br ${C.bgColorStart} ${C.bgColorEnd} ${C.text} flex flex-col items-center p-4 selection:bg-${C.accent}/30`}>
            {/* Header */}
            <header className="w-full max-w-6xl mb-8 text-center">
                {appConfig.logoUrl && <img src={appConfig.logoUrl} alt="Logo" className="w-36 h-auto mx-auto mb-3" />}
                <h1 className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${C.accentGradientFrom} ${C.accentGradientTo}`}>{appConfig.mainTitle}</h1>
                <p className={`${C.textSecondary} text-base mt-1`}>{appConfig.subtitle}</p>
                <p className={`${C.textSecondary} text-sm mt-2`}>Por: {appConfig.author}</p>
            </header>

            {/* Subject Info */}
            <section className={`w-full max-w-6xl bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end border border-${C.accent}/30`}>
                <div>
                    <label htmlFor="subjectName" className={`block text-sm font-medium ${C.textSecondary} mb-1`}>Nombre del Sujeto</label>
                    <input type="text" id="subjectName" value={subjectName} onChange={e => setSubjectName(e.target.value)} className={`w-full p-2.5 rounded bg-gray-700 border border-gray-600 focus:ring-1 focus:ring-${C.accent} focus:border-${C.accent} text-base`} />
                </div>
                <div>
                    <label htmlFor="subjectDOB" className={`block text-sm font-medium ${C.textSecondary} mb-1`}>Fecha de Nacimiento</label>
                    <input type="date" id="subjectDOB" value={subjectDOB} onChange={e => setSubjectDOB(e.target.value)} className={`w-full p-2.5 rounded bg-gray-700 border border-gray-600 focus:ring-1 focus:ring-${C.accent} focus:border-${C.accent} text-base ${C.textSecondary}`} />
                </div>
                <div>
                    <label htmlFor="subjectCRI" className={`block text-sm font-medium ${C.textSecondary} mb-1`}>C.R.I.</label>
                    <input type="text" id="subjectCRI" value={subjectCRI} onChange={e => setSubjectCRI(e.target.value)} className={`w-full p-2.5 rounded bg-gray-700 border border-gray-600 focus:ring-1 focus:ring-${C.accent} focus:border-${C.accent} text-base`} />
                </div>
            </section>

            {/* Main Content Area */}
            <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Panel: Wizard / Quick Add */}
                <section className="lg:col-span-1 space-y-6">
                     <div className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-${C.accent}/20`}>
                        <div className="flex border-b border-gray-700 mb-4">
                            <button 
                                onClick={() => { setActiveTab("beliefs"); if(isWizardOpen && currentStep === 0) goToStep(1);}}
                                className={`py-2.5 px-4 text-base flex items-center gap-2 ${activeTab === "beliefs" ? `border-b-2 border-${C.accent} text-${C.accent}` : `${C.textSecondary} hover:text-gray-100`}`}
                            >
                                <AppIcons.BeakerIcon className="w-4 h-4" />
                                Protocolo Noético
                            </button>
                            <button 
                                onClick={() => setActiveTab("flowers")}
                                className={`py-2.5 px-4 text-base flex items-center gap-2 ${activeTab === "flowers" ? `border-b-2 border-${C.accent} text-${C.accent}` : `${C.textSecondary} hover:text-gray-100`}`}
                            >
                                <AppIcons.Flower2Icon className="w-4 h-4" />
                                Añadir Flores/Tasas
                            </button>
                        </div>
                        
                        {activeTab === "beliefs" && (
                            <div>
                                <button
                                    onClick={handleToggleWizard}
                                    className={`w-full mb-4 py-2.5 px-4 rounded-md text-white bg-gradient-to-r ${C.accentGradientFrom} ${C.accentGradientTo} hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-base`}
                                >
                                    <AppIcons.ConsciousnessIcon className="w-5 h-5" />
                                    {isWizardOpen ? "Cerrar Asistente de Protocolo" : "Iniciar Asistente de Protocolo"}
                                </button>
                                <AnimatePresence>
                                {isWizardOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`bg-gray-700/30 p-4 rounded-md space-y-4 overflow-hidden border border-${C.accent}/30`}
                                    >
                                        {currentWizardStep && (
                                            <div>
                                                <div className="flex justify-between items-center mb-3">
                                                    <h3 className={`font-semibold text-lg text-${C.accent}`}>{currentWizardStep.title}</h3>
                                                    {currentStep > 0 && <button onClick={() => resetWizard(false)} className={`text-sm ${C.textSecondary} hover:text-${C.accent}`}><AppIcons.RefreshCwIcon className="w-4 h-4 inline mr-1" />Reiniciar</button>}
                                                </div>
                                                {currentWizardStep.content()}
                                                <div className="mt-4 flex justify-between">
                                                    {(currentStep > 1 && !(selectedGroup === "Otros" && currentStep === 3)) && ( // Don't show "Anterior" for step 3 if "Otros" because it skips step 2
                                                         <button 
                                                            onClick={() => goToStep(getPreviousStep())}
                                                            className={`py-1.5 px-3.5 text-sm rounded-md bg-gray-600 hover:bg-gray-500 text-white transition-colors`}
                                                          >Anterior</button>
                                                    )}
                                                     {currentStep === 3 && selectedGroup === "Otros" && ( // Special "Anterior" for "Otros" group on belief step
                                                        <button 
                                                            onClick={() => goToStep(1)} // Go back to group selection
                                                            className={`py-1.5 px-3.5 text-sm rounded-md bg-gray-600 hover:bg-gray-500 text-white transition-colors`}
                                                          >Anterior (Grupo)</button>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        {currentStep === 0 && isWizardOpen && 
                                            <button onClick={() => goToStep(1)} className={`w-full py-2 px-3 text-base rounded-md bg-${C.accent} text-white hover:bg-opacity-80 transition-colors`}>
                                                Comenzar Protocolo
                                            </button>
                                        }
                                    </motion.div>
                                )}
                                </AnimatePresence>
                            </div>
                        )}

                        {activeTab === "flowers" && (
                            <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                                <h3 className={`text-xl font-semibold mb-2 text-${C.accent}`}>Añadir Tasa Simple</h3>
                                {Object.entries(bachData).map(([groupName, data]) => (
                                    <div key={groupName} className="mb-2">
                                        <p className={`text-base font-medium ${C.textSecondary} mb-1`}>{groupName}</p>
                                        {data.flowers.map(flower => (
                                            <ListItem
                                                key={flower.name}
                                                text={flower.name}
                                                badge={flower.rate}
                                                isSelected={false} 
                                                onClick={() => handleAddItemToPanel(flower)}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Center Panel: Emission Panel & Controls */}
                <section className="lg:col-span-1 space-y-6">
                    <div className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-${C.accent}/20`}>
                        <h2 className={`text-2xl font-semibold mb-4 text-${C.accent} flex items-center gap-2`}>
                            <AppIcons.VibrationalIcon className="w-6 h-6" />
                            Panel de Emisión
                        </h2>
                        {emissionPanelItems.length === 0 ? (
                            <p className={`${C.textSecondary} text-base text-center py-4`}>El panel está vacío. Añada fórmulas o tasas.</p>
                        ) : (
                            <div className="space-y-4 max-h-[calc(100vh-450px)] md:max-h-[calc(100vh-420px)] overflow-y-auto pr-1 mb-4">
                                {emissionPanelItems.map(item => (
                                    <EmissionItem 
                                        key={item.id} 
                                        item={item} 
                                        onRemove={handleRemoveItemFromPanel}
                                        onGenerateAffirmation={item.type === 'noetic_formula' ? () => handleGenerateAffirmationAI(item.id) : undefined}
                                        isGeneratingAffirmation={generatingAffirmationId === item.id && suggestedAffirmations.length === 0}
                                        suggestedAffirmations={generatingAffirmationId === item.id ? suggestedAffirmations : []}
                                        onSelectSuggestedAffirmation={item.type === 'noetic_formula' ? (affirmation) => handleSelectSuggestedAffirmation(item.id, affirmation) : undefined}
                                        generatingAffirmationItemId={generatingAffirmationId}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                     {/* Emission Controls Section */}
                    <div className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-${C.accent}/20 flex flex-col items-center gap-5`}>
                        <div className="relative w-28 h-28 mx-auto"> 
                            <AnimatePresence>
                                {isBroadcasting && (
                                <>
                                    <motion.div 
                                        className={`absolute inset-0 rounded-full border-2 ${C.emitterRing1}`} 
                                        animate={{ scale: [1, 2.5], opacity: [0, 0.8, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", times: [0, 0.4, 1], delay: 0 }} 
                                    />
                                    <motion.div 
                                        className={`absolute inset-0 rounded-full border-2 ${C.emitterRing2}`} 
                                        animate={{ scale: [1, 2.5], opacity: [0, 0.7, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", times: [0, 0.4, 1], delay: 0.5 }} 
                                    />
                                    <motion.div 
                                        className={`absolute inset-0 rounded-full border-2 ${C.emitterRing3}`} 
                                        animate={{ scale: [1, 2.5], opacity: [0, 0.6, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", times: [0, 0.4, 1], delay: 1.0 }} 
                                    />
                                </>
                                )}
                            </AnimatePresence>
                            <AppIcons.TransmissionIcon className={`w-12 h-12 text-${isBroadcasting ? C.accent : C.textSecondary} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300`} />
                        </div>

                        <div className="w-full max-w-xs flex flex-col items-center">
                            <label htmlFor="timerInput" className={`block text-sm font-medium ${C.textSecondary} mb-1`}>Duración (minutos)</label>
                            <input 
                                type="number" 
                                id="timerInput" 
                                value={timerInput} 
                                onChange={e => setTimerInput(e.target.value)} 
                                placeholder="Ej: 30" 
                                className={`w-full p-2.5 rounded bg-gray-700 border border-gray-600 focus:ring-1 focus:ring-${C.accent} focus:border-${C.accent} text-base mb-1 text-center`}
                                disabled={isBroadcasting}
                            />
                            <p className={`text-3xl font-mono text-${C.accent}`}>{timerDisplay}</p>
                        </div>
                        
                        <div className="w-full max-w-xs">
                            {!isBroadcasting ? (
                                <button onClick={handleStartBroadcast} className={`w-full py-3 px-4 text-base font-medium rounded-md bg-gradient-to-r ${C.broadcastButtonBgFrom} ${C.broadcastButtonBgTo} text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}>
                                    <AppIcons.PlayIcon className="w-5 h-5" /> Iniciar Transmisión
                                </button>
                            ) : (
                                <button onClick={handleStopBroadcast} className={`w-full py-3 px-4 text-base font-medium rounded-md bg-gradient-to-r ${C.stopButtonBgFrom} ${C.stopButtonBgTo} text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}>
                                    <AppIcons.StopCircleIcon className="w-5 h-5" /> Detener Transmisión
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Right Panel: Session Log */}
                <section className={`lg:col-span-1 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-${C.accent}/20`}>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className={`text-2xl font-semibold text-${C.accent} flex items-center gap-2`}>
                            <AppIcons.DocumentIcon className="w-6 h-6" />
                            Registro de Sesión
                        </h2>
                        <button
                            onClick={handleClearSessionLog}
                            className={`text-sm ${C.textSecondary} hover:text-red-400 transition-colors p-1`}
                            title="Limpiar registro"
                        >
                            <AppIcons.XCircleIcon className="w-4 h-4" />
                        </button>
                    </div>
                    <textarea
                        ref={textareaLogRef}
                        value={sessionLog}
                        readOnly
                        className={`w-full h-96 bg-gray-900/70 p-3 rounded border border-gray-700 text-sm font-mono ${C.textSecondary} focus:outline-none resize-none`}
                        placeholder="Los eventos de la sesión aparecerán aquí..."
                    />
                </section>
            </main>
            
            <footer className="w-full max-w-6xl mt-10 text-center">
                <p className={`text-sm ${C.textSecondary}`}>&copy; {new Date().getFullYear()} {appConfig.author}. Herramienta de Protocolo Noético Nivel 2.</p>
            </footer>
        </div>
    );
};
