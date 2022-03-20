export interface IParticiple {
  present: string;
  past: string;
}

export interface IConjugation {
  present: string[];
  imperfect: string[];
  future: string[];
  conditional: string[];
  subjunctive: string[];
  imperfectSubjunctive: string[];
  passeSimple: string[];

  // Past Participle
  passeCompose?: string[];
  pastPerfect?: string[];
  futurePerfect?: string[];
  pastConditional?: string[];
  pastSubjunctive?: string[];
  pluperfectSubjunctive?: string[];
  pastAnterior?: string[];

  // Imperatives
  imperative: string[];
  pastImperative?: string[];

  // Other
  participles: IParticiple;
  definition: string;
  examples: string;
  comment?: string;
  regular?: string;
}

export interface IVerbs {
  [key: string]: IConjugation;
}
