export interface LernsetWord {
    id: number,
    firstWord: {
        id: number;
        language: string,
        word: string
    },
    secondWord: {
        id: number;
        language: string,
        word: string
    }
}