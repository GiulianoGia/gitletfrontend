import { Language } from "./enum/Language";

export interface LernsetWord {
    id: number,
    lernset: {
        id: number,
        name: string,
        description: string
    },
    firstWord: {
        id: number;
        language: Language,
        word: string
    },
    secondWord: {
        id: number;
        language: Language,
        word: string
    }
}