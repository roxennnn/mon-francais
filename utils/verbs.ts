import {
  AVOIR,
  COMPOSITE_VERBS,
  LEFT_MOST_VERB_COLUMN,
  VERBS,
  VERB_COLUMNS,
  VERB_IMPERATIVE_PRONOUNGS,
  VERB_PRONOUNS,
  ÊTRE,
  ÊTRE_AUXILIARIES,
} from '../constants/verbs';
import { IKeyLabel } from '../models/general';
import { IConjugation } from '../models/verbs';

const getAuxiliary = (active: string): IConjugation =>
  ÊTRE_AUXILIARIES.includes(active) ? ÊTRE : AVOIR;

const mapAuxiliaryKey = (key: keyof IConjugation): keyof IConjugation => {
  switch (key) {
    case 'passeCompose':
      return 'present';
    case 'pastPerfect':
      return 'imperfect';
    case 'futurePerfect':
      return 'future';
    case 'pastConditional':
      return 'conditional';
    case 'pastSubjunctive':
      return 'subjunctive';
    case 'pluperfectSubjunctive':
      return 'imperfectSubjunctive';
    case 'pastAnterior':
      return 'passeSimple';
    case 'pastImperative':
      return 'imperative';
    default:
      return key;
  }
};

const addRegular = (verb: string, regular?: string): string =>
  (!!regular ? regular + ' -' : '') + verb;

export const getVerbData = (
  active: string,
  startIndex: number,
  endIndex: number,
  imperative?: boolean
): { columns: IKeyLabel[]; data: string[][] } => {
  const slicedColumns = VERB_COLUMNS.slice(startIndex, endIndex);
  const columns = [LEFT_MOST_VERB_COLUMN, ...slicedColumns];
  const data: string[][] = [];

  if (!!active) {
    const currentVerb = VERBS[active];
    const pronouns =
      active === 'falloir'
        ? ['il/elle']
        : !!imperative
        ? VERB_IMPERATIVE_PRONOUNGS
        : VERB_PRONOUNS;
    const conjugations = [pronouns];

    const regular = currentVerb.regular;

    slicedColumns.forEach((e: IKeyLabel) => {
      conjugations.push(
        COMPOSITE_VERBS.includes(e.key)
          ? (
              getAuxiliary(active)[
                mapAuxiliaryKey(e.key as keyof IConjugation)
              ] as string[]
            )
              ?.filter((_, index: number) =>
                active === 'falloir' ? index === 2 : true
              )
              ?.map(
                (e: string) =>
                  `${e} ${addRegular(currentVerb.participles.past, regular)}`
              )
          : (currentVerb[e.key as keyof IConjugation] as string[]).map(
              (e: string) => addRegular(e, regular)
            )
      );
    });

    // Make matrix transpose
    Array(pronouns.length)
      .fill(0)
      .forEach((_, colIndex: number) => {
        const dataArr: string[] = [];
        conjugations.forEach((e, i: number) => {
          dataArr.push(e[colIndex]);
        });
        data.push(dataArr);
      });
  }
  return {
    columns,
    data,
  };
};

export const getVerbParticipleData = (active: string): [string, string][] => {
  if (!!active) {
    const currentVerb = VERBS[active];
    const regular = currentVerb.regular;
    return [
      ['Present:', addRegular(currentVerb.participles.present, regular)],
      ['Past:', addRegular(currentVerb.participles.past, regular)],
      [
        'Perfect:',
        `${getAuxiliary(active).participles.present} ${addRegular(
          currentVerb.participles.past,
          regular
        )}`,
      ],
    ];
  }
  return [];
};

export const getPastInfinitive = (active: string): string =>
  !!active
    ? `${ÊTRE_AUXILIARIES.includes(active) ? 'être' : 'avoir'} ${addRegular(
        VERBS[active]?.participles?.past,
        VERBS[active]?.regular
      )}`
    : '';

export const getVerbDefinition = (active: string): string =>
  !!active ? VERBS[active]?.definition : '';

export const getVerbExample = (active: string): string =>
  !!active ? VERBS[active]?.examples : '';

export const getVerbComment = (active: string): string =>
  !!active ? VERBS[active]?.comment || '' : '';
