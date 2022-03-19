export interface IKeyLabel {
  label: string;
  key: string;
}

export const LEFT_MOST_VERB_COLUMN = { label: '', key: 'pronoun' };

export const VERB_COLUMNS = [
  { label: 'Present', key: 'present' },
  { label: 'Imperfect', key: 'imperfect' },
  { label: 'Future', key: 'future' },
  { label: 'Conditional', key: 'conditional' },
  { label: 'Subjunctive', key: 'subjunctive' },
  { label: 'Imperfect Subj.', key: 'imperfectSubjunctive' },
  { label: 'Passé Compose', key: 'passeCompose' },
  { label: 'Past Perfect', key: 'pastPerfect' },
  { label: 'Future Perfect', key: 'futurePerfect' },
  { label: 'Past Conditional', key: 'pastConditional' },
  { label: 'Past Subj.', key: 'pastSubjunctive' },
  { label: 'Pluperfect Subj.', key: 'pluperfectSubjunctive' },
  { label: 'Passé Simple', key: 'passeSimple' },
  { label: 'Past Anterior', key: 'pastAnterior' },
  { label: 'Imperative', key: 'imperative' },
  { label: 'Past Imperative', key: 'pastImperative' },
  { label: 'Participles', key: 'participles' },
];

export const VERB_PRONOUNS = [
  'Je',
  'Tu',
  'Il/Elle',
  'Nous',
  'Vous',
  'Ils/Elles',
];

export const COMPOSITE_VERBS = [
  'passeCompose',
  'pastPerfect',
  'futurePerfect',
  'pastConditional',
  'pastSubjunctive',
  'pluperfectSubjunctive',
];

export interface IParticiple {
  present: string;
  past: string;
  perfect: string;
}

export interface IConjugation {
  present: string[];
  imperfect: string[];
  future: string[];
  conditional: string[];
  subjunctive: string[];
  imperfectSubjunctive: string[];
  passeCompose: string[];
  pastPerfect: string[];
  futurePerfect: string[];
  pastConditional: string[];
  pastSubjunctive: string[];
  pluperfectSubjunctive: string[];
  passeSimple: string[];
  pastAnterior: string[];
  imperative: string[];
  pastImperative: string[];
  participles: IParticiple;
}

export const VERBS: {
  [key: string]: IConjugation;
} = {
  être: {
    present: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
    imperfect: ['êtais', 'êtais', 'êtait', 'êtions', 'êtiez', 'êtaient'],
    future: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'],
    conditional: ['fusse', 'fusses', 'fût', 'fussions', 'fussiez', 'fussent'],
    subjunctive: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'],
    imperfectSubjunctive: [
      'fusse',
      'fusses',
      'fût',
      'fussions',
      'fussiez',
      'fussent',
    ],
    // Use Past Participle
    passeCompose: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
    pastPerfect: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
    futurePerfect: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
    pastConditional: [
      'aurais',
      'aurais',
      'aurait',
      'aurions',
      'auriez',
      'auraient',
    ],
    pastSubjunctive: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'],
    pluperfectSubjunctive: [
      'eusse',
      'eusses',
      'eût',
      'eussions',
      'eussiez',
      'eussent',
    ],
    passeSimple: [],
    pastAnterior: [],
    // Different
    imperative: [],
    pastImperative: [],
    participles: {
      present: 'étant',
      past: 'été',
      perfect: 'ayant été',
    },
  },
  avoir: {
    present: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
    imperfect: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
    future: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
    conditional: [
      'aurais',
      'aurais',
      'aurait',
      'aurions',
      'auriez',
      'auraient',
    ],
    subjunctive: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'],
    imperfectSubjunctive: [
      'eusse',
      'eusses',
      'eût',
      'eussions',
      'eussiez',
      'eussent',
    ],
    // Use Past Participle
    passeCompose: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
    pastPerfect: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
    futurePerfect: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
    pastConditional: [
      'aurais',
      'aurais',
      'aurait',
      'aurions',
      'auriez',
      'auraient',
    ],
    pastSubjunctive: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'],
    pluperfectSubjunctive: [
      'eusse',
      'eusses',
      'eût',
      'eussions',
      'eussiez',
      'eussent',
    ],
    passeSimple: [],
    pastAnterior: [],
    // Different
    imperative: [],
    pastImperative: [],
    participles: {
      present: 'étant',
      past: 'été',
      perfect: 'ayant été',
    },
  },
};
