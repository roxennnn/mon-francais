import { IConjugation, IVerbs } from '../models/verbs';

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
  "Je/J'",
  'Tu',
  'Il/Elle',
  'Nous',
  'Vous',
  'Ils/Elles',
];

export const VERB_IMPERATIVE_PRONOUNGS = ['(Tu)', '(Nous)', '(Vous)'];

export const COMPOSITE_VERBS = [
  'passeCompose',
  'pastPerfect',
  'futurePerfect',
  'pastConditional',
  'pastSubjunctive',
  'pluperfectSubjunctive',
  'pastAnterior',
  'pastImperative',
];

export const ÊTRE_AUXILIARIES = ['aller', 'venir'];

export const AVOIR: IConjugation = {
  definition: 'Avoir qqch., posséder, disposer de.',
  examples: "J'ai des cheveux bruns.",
  present: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
  imperfect: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
  future: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
  conditional: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'],
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
  passeSimple: ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent'],
  pastAnterior: ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent'],
  // Different
  imperative: ['aie', 'ayons', 'ayez'],
  pastImperative: ['aie', 'ayons', 'ayez'],
  participles: {
    present: 'ayant',
    past: 'eu',
  },
};

export const ÊTRE: IConjugation = {
  definition: 'Avoir une réalité.',
  examples: "Qu'est-ce que tu veux être plus tard?",
  present: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
  imperfect: ['êtais', 'êtais', 'êtait', 'êtions', 'êtiez', 'êtaient'],
  future: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'],
  conditional: ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'],
  subjunctive: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'],
  imperfectSubjunctive: [
    'fusse',
    'fusses',
    'fût',
    'fussions',
    'fussiez',
    'fussent',
  ],
  passeSimple: ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'],
  imperative: ['sois', 'soyons', 'soyons'],
  participles: {
    present: 'étant',
    past: 'été',
  },
};

export const PRINCIPAL_VERBS: IVerbs = {
  être: ÊTRE,
  avoir: AVOIR,
};

const ER_VERB = {
  present: ['e', 'es', 'e', 'ons', 'ez', 'ent'],
  imperfect: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
  future: ['erai', 'eras', 'era', 'erons', 'erez', 'eront'],
  conditional: ['erais', 'erais', 'erait', 'erions', 'eriez', 'eraient'],
  subjunctive: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
  imperfectSubjunctive: ['asse', 'asses', 'ât', 'assions', 'assiez', 'assent'],
  passeSimple: ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'],
  imperative: ['e', 'ons', 'ez'],
  participles: {
    present: 'ant',
    past: 'é',
  },
};

const IR_VERB = {
  present: ['is', 'is', 'it', 'issons', 'issez', 'issent'],
  imperfect: ['issais', 'issais', 'issait', 'issions', 'issiez', 'issaient'],
  future: ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'],
  conditional: ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'],
  subjunctive: ['isse', 'isses', 'isse', 'issions', 'issiez', 'issent'],
  imperfectSubjunctive: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent'],
  passeSimple: ['is', 'is', 'it', 'îmes', 'îtes', 'irent'],
  imperative: ['is', 'issons', 'issez'],
  participles: {
    present: 'issant',
    past: 'i',
  },
};

const RE_VERB = {
  present: ['s', 's', '', 'ons', 'ez', 'ent'],
  imperfect: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
  future: ['rai', 'ras', 'ra', 'rons', 'rez', 'ront'],
  conditional: ['rais', 'rais', 'rait', 'rions', 'riez', 'raient'],
  subjunctive: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
  imperfectSubjunctive: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent'],
  passeSimple: ['is', 'is', 'it', 'îmes', 'îtes', 'irent'],
  imperative: ['s', 'ons', 'ez'],
  participles: {
    present: 'ant',
    past: 'u',
  },
};

export const REG_RE_VERBS: IVerbs = {
  entendre: {
    regular: 'entend',
    definition: '',
    examples: '',
    ...RE_VERB,
  },
  attendre: {
    regular: 'attend',
    definition: '',
    examples: '',
    ...RE_VERB,
  },
  vendre: {
    regular: 'vend',
    definition: '',
    examples: '',
    ...RE_VERB,
  },
};

export const REG_ER_VERBS: IVerbs = {
  trouver: {
    regular: 'trouv',
    definition:
      "Apercevoir, rencontrer (ce que l'on cherchait ou ce que l'on souhaitait avoir).",
    examples: "J'ai trouvé quelque chose!",
    ...ER_VERB,
  },
  donner: {
    regular: 'donn',
    definition: 'Mettre (qqch.) en la possession de qqn (donner qqch. à qqn)',
    examples: 'Donner un cadeau.',
    ...ER_VERB,
  },
  parler: {
    regular: 'parl',
    definition: "Communiquer, s'exprimer par la parole",
    examples: 'Parler une langue.',
    ...ER_VERB,
  },
  passer: {
    regular: 'pass',
    definition: "Se déplacer d'un mouvement continu.",
    examples: 'On lui passe un truc.',
    ...ER_VERB,
  },
  regarder: {
    regular: 'regard',
    definition: "Faire en sorte de voir, s'appliquer à voir (qqn, qqch.).",
    examples: 'Regarder un film.',
    ...ER_VERB,
  },
  aimer: {
    regular: 'aim',
    definition:
      "Éprouver de l'affection, de l'amitié*, de la sympathie pour (qqn).",
    examples: "J'aime le chocolat.",
    ...ER_VERB,
  },
  manger: {
    regular: 'mang',
    definition:
      'Avaler pour se nourrir (un aliment solide ou consistant) après avoir mâché. ',
    examples: "Je crois qu'il est l'heure de manger.",
    ...ER_VERB,
    present: ['e', 'es', 'e', 'eons', 'ez', 'ent'],
    imperative: ['e', 'eons', 'ez'],
  },
  jouer: {
    regular: 'jou',
    definition: 'Se livrer au jeu.',
    examples: 'Jouer à des jeux vidéo.',
    ...ER_VERB,
  },
};

export const REG_IR_VERBS: IVerbs = {
  finir: {
    regular: 'fin',
    definition:
      'Conduire (une occupation) à son terme en faisant ce qui reste à faire.',
    examples: 'Finir un travail. ',
    ...IR_VERB,
  },
  vieillir: {
    regular: 'vieill',
    definition: "Prendre de l'âge ; continuer à vivre alors qu'on est vieux.",
    examples: 'Vieillir bien, vieillir mal.',
    ...IR_VERB,
  },
  réussir: {
    regular: 'réuss',
    definition: 'Avoir une heureuse issue, un bon résultat, du succès.',
    examples: 'La tentative a réussi.',
    ...IR_VERB,
  },
};

export const IRR_RE_VERBS: IVerbs = {
  faire: {
    definition: 'Réaliser [un être : qqch. ou qqn]',
    examples: "Qu'est-ce que tu aimes faire?",
    present: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'],
    imperfect: [
      'faisais',
      'faisais',
      'faisait',
      'faisions',
      'faisiez',
      'faisaient',
    ],
    future: ['ferai', 'feras', 'fera', 'ferons', 'ferez', 'feront'],
    conditional: [
      'ferais',
      'ferais',
      'ferait',
      'ferions',
      'feriez',
      'feraient',
    ],
    subjunctive: ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'],
    imperfectSubjunctive: [
      'fisse',
      'fisses',
      'fît',
      'fissions',
      'fissiez',
      'fissent',
    ],
    passeSimple: ['fis', 'fis', 'fit', 'fîmes', 'fîtes', 'firent'],
    imperative: ['fais', 'faisons', 'faites'],
    participles: {
      present: 'faisant',
      past: 'fait',
    },
  },
  dire: {
    definition:
      "Émettre (les sons, les éléments signifiants d'une langue). Dire quelques paroles.",
    examples: 'Je dis beaucoup de bêtises.',
    present: ['dis', 'dis', 'dit', 'disons', 'dites', 'disent'],
    imperfect: ['disais', 'disais', 'disait', 'disions', 'disiez', 'disaient'],
    future: ['dirai', 'diras', 'dira', 'dirons', 'direz', 'diront'],
    conditional: [
      'dirais',
      'dirais',
      'dirait',
      'dirions',
      'diriez',
      'diraient',
    ],
    subjunctive: ['dise', 'dises', 'dise', 'disions', 'disiez', 'disent'],
    imperfectSubjunctive: [
      'disse',
      'disses',
      'dît',
      'dissions',
      'dissiez',
      'dissent',
    ],
    passeSimple: ['dis', 'dis', 'dit', 'dîmes', 'dîtes', 'dirent'],
    imperative: ['dis', 'disons', 'dites'],
    participles: {
      present: 'disant',
      past: 'dit',
    },
  },
  prendre: {
    definition: 'Mettre avec soi ou faire sien.',
    examples: 'Prendre son temps.',
    comment:
      'Prendre and all of its derivations are conjugated in the present tense by dropping the d in all the plural forms and doubling the n in the third person plural, then adding the regular -re endings',
    present: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'],
    imperfect: [
      'prenais',
      'prenais',
      'prenait',
      'prenions',
      'preniez',
      'prenaient',
    ],
    future: [
      'prendrai',
      'prendras',
      'prendra',
      'prendrons',
      'prendrez',
      'prendront',
    ],
    conditional: [
      'prendrais',
      'prendrais',
      'prendrait',
      'prendrions',
      'prendriez',
      'prendraient',
    ],
    subjunctive: [
      'prenne',
      'prennes',
      'prenne',
      'prenions',
      'preniez',
      'prennent',
    ],
    imperfectSubjunctive: [
      'prisse',
      'prisses',
      'prît',
      'prissions',
      'prissiez',
      'prissent',
    ],
    passeSimple: ['pris', 'pris', 'prit', 'prîmes', 'prîtes', 'prirent'],
    imperative: ['prends', 'prenons', 'prenez'],
    participles: {
      present: 'prenant',
      past: 'pris',
    },
  },
  mettre: {
    definition: 'Faire changer de lieu.',
    examples: 'Mettre quelque chose sur sa tête.',
    present: ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'],
    imperfect: [
      'mettais',
      'mettais',
      'mettait',
      'mettions',
      'mettiez',
      'mettaient',
    ],
    future: ['mettrai', 'mettras', 'mettra', 'mettrons', 'mettrez', 'mettront'],
    conditional: [
      'mettrais',
      'mettrais',
      'mettrait',
      'mettrions',
      'mettriez',
      'mettraient',
    ],
    subjunctive: ['mette', 'mettes', 'mette', 'mettions', 'mettiez', 'mettent'],
    imperfectSubjunctive: [
      'misse',
      'mises',
      'mît',
      'missions',
      'missiez',
      'missent',
    ],
    passeSimple: ['mis', 'mis', 'mit', 'mîmes', 'mîtes', 'mirent'],
    imperative: ['mets', 'mettons', 'mettez'],
    participles: {
      present: 'mettant',
      past: 'mis',
    },
  },
  croire: {
    definition:
      'Penser que (qqch.) est véritable, donner une adhésion de principe à.',
    examples: 'Je crois en toi!',
    present: ['crois', 'crois', 'croit', 'croyons', 'croyez', 'croient'],
    imperfect: [
      'croyais',
      'croyais',
      'croyait',
      'croyions',
      'croyiez',
      'croyaient',
    ],
    future: ['croirai', 'croiras', 'croira', 'croirons', 'croirez', 'croiront'],
    conditional: [
      'croirais',
      'croirais',
      'croirait',
      'croirions',
      'croiriez',
      'croiraient',
    ],
    subjunctive: ['croie', 'croies', 'croie', 'croyions', 'croyiez', 'croient'],
    imperfectSubjunctive: [
      'crusse',
      'crusses',
      'crût',
      'crussions',
      'crussiez',
      'crussent',
    ],
    passeSimple: ['crus', 'crus', 'crut', 'crûmes', 'crûtes', 'crurent'],
    imperative: ['crois', 'croyons', 'croyez'],
    participles: {
      present: 'croyant',
      past: 'cru',
    },
  },
  boire: {
    definition: 'Avaler (un liquide).',
    examples: 'Boire un jus de fruits.',
    present: ['bois', 'bois', 'boit', 'buvons', 'buvez', 'boivent'],
    imperfect: ['buvais', 'buvais', 'buvait', 'buvions', 'buviez', 'buvaient'],
    future: ['boirai', 'boiras', 'boira', 'boirons', 'boirez', 'boiront'],
    conditional: [
      'boirais',
      'boirais',
      'boirait',
      'boirions',
      'boiriez',
      'boiraient',
    ],
    subjunctive: ['boive', 'boives', 'boive', 'buvions', 'buviez', 'boivent'],
    imperfectSubjunctive: [
      'busse',
      'busses',
      'bût',
      'bussions',
      'bussiez',
      'bussent',
    ],
    passeSimple: ['bus', 'bus', 'but', 'bûmes', 'bûtes', 'burent'],
    imperative: ['bois', 'buvons', 'buvez'],
    participles: {
      present: 'buvant',
      past: 'bu',
    },
  },
};

export const IRR_ER_VERBS: IVerbs = {
  aller: {
    definition: '(mouvement, locomotion)',
    examples: 'Aller à la cuisine.',
    present: ['ais', 'vas', 'va', 'allons', 'allez', 'vont'],
    imperfect: ['allais', 'allais', 'allait', 'allions', 'alliez', 'allaient'],
    future: ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'],
    conditional: ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'],
    subjunctive: ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'],
    imperfectSubjunctive: [
      'allasse',
      'allasses',
      'allât',
      'allassions',
      'allassiez',
      'allassent',
    ],
    passeSimple: ['allai', 'allas', 'alla', 'allâmes', 'allâtes', 'allèrent'],
    imperative: ['va', 'allons', 'allez'],
    participles: {
      present: 'allant',
      past: 'allé',
    },
  },
};

export const IRR_IR_VERBS: IVerbs = {
  pouvoir: {
    definition: 'Avoir la possibilité de (faire qqch.).',
    examples: 'Oui nous pouvons!',
    present: ['peux, puis', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'],
    imperfect: [
      'pouvais',
      'pouvais',
      'pouvait',
      'pouvions',
      'pouviez',
      'pouvaient',
    ],
    future: ['pourrai', 'pourras', 'pourra', 'pourrons', 'pourrez', 'pourront'],
    conditional: [
      'pourrais',
      'pourrais',
      'pourrait',
      'pourrions',
      'pourriez',
      'pourraient',
    ],
    subjunctive: [
      'puisse',
      'puisses',
      'puisse',
      'puissions',
      'puissiez',
      'puissent',
    ],
    imperfectSubjunctive: [
      'pusse',
      'pusses',
      'pouvût',
      'pussions',
      'pussiez',
      'pussent',
    ],
    passeSimple: ['pus', 'pus', 'put', 'pûmes', 'pûtes', 'purent'],
    imperative: ['n/a', 'n/a', 'n/a'],
    participles: {
      present: 'pouvant',
      past: 'pu',
    },
  },
  voir: {
    definition: 'Percevoir les images des objets par le sens de la vue. ',
    examples: 'Je ne peux rien voir.',
    present: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'],
    imperfect: ['voyais', 'voyais', 'voyait', 'voyions', 'voyiez', 'voyaient'],
    future: ['verrai', 'verras', 'verra', 'verrons', 'verrez', 'verront'],
    conditional: [
      'verrais',
      'verrais',
      'verrait',
      'verrions',
      'verriez',
      'verraient',
    ],
    subjunctive: ['voie', 'voies', 'voie', 'voyions', 'voyiez', 'voient'],
    imperfectSubjunctive: [
      'visse',
      'visses',
      'vît',
      'vissions',
      'vissiez',
      'vissent',
    ],
    passeSimple: ['vis', 'vis', 'vit', 'vîmes', 'vîtes', 'virent'],
    imperative: ['vois', 'voyons', 'voyez'],
    participles: {
      present: 'voyant',
      past: 'vu',
    },
  },
  vouloir: {
    definition: 'Avoir la volonté, le désir de.',
    examples: 'Je veux des bonbons.',
    present: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'],
    imperfect: [
      'voulais',
      'voulais',
      'voulait',
      'voulions',
      'vouliez',
      'voulaient',
    ],
    future: ['voudrai', 'voudras', 'voudra', 'voudrons', 'voudrez', 'voudront'],
    conditional: [
      'voudrais',
      'voudrais',
      'voudrait',
      'voudrions',
      'voudriez',
      'voudraient',
    ],
    subjunctive: [
      'veuille',
      'veuilles',
      'veuille',
      'voulions',
      'vouliez',
      'veuillent',
    ],
    imperfectSubjunctive: [
      'voulusse',
      'voulusses',
      'voulût',
      'voulussions',
      'voulussiez',
      'voulussent',
    ],
    passeSimple: [
      'voulus',
      'voulus',
      'voulut',
      'voulûmes',
      'voulûtes',
      'voulurent',
    ],
    imperative: ['veux, veuille', 'veuillons', 'voulez, veuillez'],
    participles: {
      present: 'voulant',
      past: 'voulant',
    },
  },
  devoir: {
    definition: "Être dans l'obligation de (faire qqch.)",
    examples: 'Tu dois faire tes devoirs.',
    present: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'],
    imperfect: ['devais', 'devais', 'devait', 'devions', 'deviez', 'devaient'],
    future: ['devrai', 'devras', 'devra', 'devrons', 'devrez', 'devront'],
    conditional: [
      'devrais',
      'devrais',
      'devrait',
      'devrions',
      'devriez',
      'devraient',
    ],
    subjunctive: ['doive', 'doives', 'doive', 'devions', 'deviez', 'doivent'],
    imperfectSubjunctive: [
      'dusse',
      'dusses',
      'dût',
      'dussions',
      'dussiez',
      'dussent',
    ],
    passeSimple: ['dus', 'dus', 'dut', 'dûmes', 'dûtes', 'durent'],
    imperative: ['dois', 'devons', 'devez'],
    participles: {
      present: 'devant',
      past: 'devant',
    },
  },
  venir: {
    definition:
      'Se déplacer de manière à aboutir dans un lieu (où se trouve une personne de référence).',
    examples: 'Tu peux venir avec nous.',
    present: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'],
    imperfect: ['venais', 'venais', 'venait', 'venions', 'veniez', 'venaient'],
    future: [
      'viendrai',
      'viendras',
      'viendra',
      'viendrons',
      'viendrez',
      'viendront',
    ],
    conditional: [
      'viendrais',
      'viendrais',
      'viendrait',
      'viendrions',
      'viendriez',
      'viendraient',
    ],
    subjunctive: [
      'vienne',
      'viennes',
      'vienne',
      'venions',
      'veniez',
      'viennent',
    ],
    imperfectSubjunctive: [
      'vinsse',
      'vinsses',
      'vînt',
      'vinssions',
      'vinssiez',
      'vinssent',
    ],
    passeSimple: ['vins', 'vins', 'vint', 'vînmes', 'vîntes', 'vinrent'],
    imperative: ['viens', 'venons', 'venez'],
    participles: {
      present: 'venant',
      past: 'venant',
    },
  },
  falloir: {
    definition: "(Manquer) Il s'en faut de, il manque.",
    examples:
      'Il faut que je me coupe les cheveux. Il faut que je pense à une phrase.',
    comment: 'https://www.lawlessfrench.com/grammar/falloir-lesson/',
    present: ['faut'],
    imperfect: ['fallait'],
    future: ['faudra'],
    conditional: ['faudrait'],
    subjunctive: ['faille'],
    imperfectSubjunctive: ['fallût'],
    passeSimple: ['fallit'],
    imperative: ['n/a'],
    participles: {
      present: 'n/a',
      past: 'fallu',
    },
  },
  savoir: {
    definition: "(Appréhender par l'esprit)",
    examples: 'Je sais tout!',
    present: ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'],
    imperfect: ['savais', 'savais', 'savait', 'savions', 'saviez', 'savaient'],
    future: ['saurai', 'sauras', 'saura', 'saurons', 'saurez', 'sauront'],
    conditional: [
      'saurais',
      'saurais',
      'saurait',
      'saurions',
      'sauriez',
      'sauraient',
    ],
    subjunctive: ['sache', 'saches', 'sache', 'sachions', 'sachiez', 'sachent'],
    imperfectSubjunctive: [
      'susse',
      'susses',
      'sût',
      'sussions',
      'sussiez',
      'sussent',
    ],
    passeSimple: ['sus', 'sus', 'sut', 'sûmes', 'sûtes', 'surent'],
    imperative: ['sache', 'sachons', 'sachez'],
    participles: {
      present: 'sachant',
      past: 'su',
    },
  },
};

export const VERBS: {
  [key: string]: IConjugation;
} = {
  ...PRINCIPAL_VERBS,
  ...REG_ER_VERBS,
  ...REG_IR_VERBS,
  ...REG_RE_VERBS,
  ...IRR_RE_VERBS,
  ...IRR_IR_VERBS,
  ...IRR_ER_VERBS,
};
