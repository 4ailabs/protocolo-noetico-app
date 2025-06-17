import React from 'react';
import { EmissionPanelItem, EmissionPanelNoeticFormula, EmissionPanelSimpleRate, NoeticFormulaData } from '../types';
import { AppIcons } from './icons';
import { appConfig } from '../constants';

interface EmissionItemProps {
    item: EmissionPanelItem;
    onRemove: (id: number) => void;
    onGenerateAffirmation?: (id: number) => void; 
    isGeneratingAffirmation?: boolean; // True if suggestions are being fetched for *this* item
    suggestedAffirmations?: string[]; // Suggestions for *this* item
    onSelectSuggestedAffirmation?: (affirmation: string) => void; // For *this* item
    generatingAffirmationItemId?: number | null; // ID of item currently processing affirmations
}

const EmissionItem: React.FC<EmissionItemProps> = ({ 
    item, 
    onRemove, 
    onGenerateAffirmation, 
    isGeneratingAffirmation,
    suggestedAffirmations,
    onSelectSuggestedAffirmation,
    generatingAffirmationItemId
}) => {
    const C = appConfig.colors;
    const showSuggestions = generatingAffirmationItemId === item.id && suggestedAffirmations && suggestedAffirmations.length > 0;

    if (item.type === 'noetic_formula') {
        const formulaItem = item as EmissionPanelNoeticFormula;
        const formulaData = formulaItem.data as NoeticFormulaData; 
        return (
            <div className={`bg-gray-800/70 p-4 rounded-lg border border-${C.accent}/80 shadow-md`}>
                <div className="flex justify-between items-start mb-2.5">
                    {formulaData.flower ? (
                        <p className={`font-semibold text-base text-${C.accent} flex items-center`}>
                            <AppIcons.Flower2Icon className={`w-5 h-5 mr-2 text-${C.accent}`} /> 
                            {formulaData.flower.name}
                            <span className={`font-mono text-sm ml-2.5 bg-gray-700 px-2.5 py-1 rounded-full text-${C.textSecondary}`}>{formulaData.flower.rate}</span>
                        </p>
                    ) : (
                        <p className={`font-semibold text-base text-${C.accent} flex items-center`}>
                            <AppIcons.Wand2Icon className={`w-5 h-5 mr-2 text-${C.accent}`} />
                            Reprogramación de Creencia (Otros)
                        </p>
                    )}
                    <button 
                        className={`text-gray-500 hover:text-red-400 transition-colors p-1 -mr-1 -mt-1`} 
                        onClick={() => onRemove(item.id)}
                        aria-label="Eliminar fórmula"
                    >
                        <AppIcons.XCircleIcon className="w-5 h-5" />
                    </button>
                </div>
                <div className="pl-7 space-y-1.5">
                    <p className="text-sm text-red-400">
                        <strong>Neutralizar:</strong> "{formulaData.neutralize}"
                    </p>
                    <p className="text-sm text-green-400">
                        <strong>Activar:</strong> "{formulaData.activate}"
                    </p>
                    
                    {formulaData.affirmation && (
                         <p className={`text-sm text-${C.secondaryAccent} italic mt-2`}>
                            <strong>Afirmación:</strong> "{formulaData.affirmation}"
                        </p>
                    )}

                    {!formulaData.affirmation && !showSuggestions && onGenerateAffirmation && (
                        <button
                            onClick={() => onGenerateAffirmation(item.id)}
                            disabled={isGeneratingAffirmation}
                            className={`mt-2 text-sm flex items-center gap-1.5 py-1.5 px-2.5 rounded bg-${C.secondaryAccent}/20 text-${C.secondaryAccent} hover:bg-${C.secondaryAccent}/30 transition-colors disabled:opacity-50`}
                        >
                            <AppIcons.ChatIcon className="w-4 h-4" />
                            {isGeneratingAffirmation ? "Generando..." : "Sugerir Afirmaciones IA"}
                        </button>
                    )}

                    {showSuggestions && onSelectSuggestedAffirmation && (
                        <div className="mt-2.5 space-y-1.5">
                            <p className={`text-sm ${C.textSecondary}`}>Selecciona una afirmación:</p>
                            {suggestedAffirmations?.map((sugg, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => onSelectSuggestedAffirmation(sugg)}
                                    className={`w-full text-left p-2 text-sm rounded bg-gray-700 hover:bg-${C.accent}/30 ${C.text} transition-colors border border-gray-600 hover:border-${C.accent}/50`}
                                >
                                    {sugg}
                                </button>
                            ))}
                             <button
                                onClick={() => onSelectSuggestedAffirmation("")} // Allows cancelling/clearing suggestions
                                className={`w-full text-center mt-1.5 p-1.5 text-sm rounded bg-red-700/50 hover:bg-red-600/50 ${C.text} transition-colors`}
                            >
                                Cancelar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    const simpleRateItem = item as EmissionPanelSimpleRate;
    return (
        <div className={`bg-gray-800/70 p-4 rounded-lg border border-${C.secondaryAccent}/80 shadow-md flex justify-between items-center`}>
            <p className={`font-medium text-base flex items-center text-gray-200`}>
                <AppIcons.ZapIcon className={`w-4 h-4 mr-2.5 text-${C.secondaryAccent}`} /> 
                {simpleRateItem.data.name}
                <span className={`font-mono text-sm ml-2.5 bg-gray-700 px-2.5 py-1 rounded-full text-${C.textSecondary}`}>{simpleRateItem.data.rate}</span>
            </p>
            <button 
                className={`text-gray-500 hover:text-red-400 transition-colors p-1 -mr-1`} 
                onClick={() => onRemove(item.id)}
                aria-label="Eliminar tasa"
            >
                <AppIcons.XCircleIcon className="w-5 h-5" />
            </button>
        </div>
    );
};

export default EmissionItem;