
export interface Flower {
  name: string;
  rate: number;
}

export interface BachGroupData {
  flowers: Flower[];
  beliefs: string[];
}

export interface BachData {
  [groupName: string]: BachGroupData;
}

export interface AdditionalBeliefs {
  [category: string]: string[];
}

export interface NoeticFormulaData {
  flower?: Flower; // Made optional
  neutralize: string;
  activate: string;
  affirmation?: string;
}

export interface SimpleRateData {
  name: string;
  rate: number;
}

export interface EmissionPanelItemBase {
  id: number;
}

export interface EmissionPanelNoeticFormula extends EmissionPanelItemBase {
  type: 'noetic_formula';
  data: NoeticFormulaData; // Will use the updated NoeticFormulaData
}

export interface EmissionPanelSimpleRate extends EmissionPanelItemBase {
  type: 'simple_rate';
  data: SimpleRateData;
}

export type EmissionPanelItem = EmissionPanelNoeticFormula | EmissionPanelSimpleRate;

export interface AppConfig {
  mainTitle: string;
  subtitle: string;
  author: string;
  logoUrl: string;
  colors: {
    bgColorStart: string; 
    bgColorEnd: string; 
    accent: string; 
    secondaryAccent: string; 
    text: string; 
    textSecondary: string; 
    
    accentGradientFrom: string; 
    accentGradientTo: string; 
    
    wizardSelectedBgGradientFrom: string; 
    wizardSelectedBgGradientTo: string; 
    wizardSelectedBorder: string; 
    wizardHoverBg: string; 

    emitterRing1: string; 
    emitterRing2: string; 
    emitterRing3: string; 

    broadcastButtonBgFrom: string; 
    broadcastButtonBgTo: string; 
    stopButtonBgFrom: string; 
    stopButtonBgTo: string; 
    clearButtonBgFrom: string; 
    clearButtonBgTo: string; 
  };
}