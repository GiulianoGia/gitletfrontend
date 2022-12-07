import axios from "axios";
import { Word } from "@/types/Word"
import { getCookie } from "./cookie";
import { LernsetWord } from "@/types/LernsetWord";
import { WordList } from "@/types/WordList";

export function getAllWordsFromLernset(name: string): Promise<Array<WordList>> {
    const username = getCookie("username")!;
    const session = getCookie("session")!;
    return axios.get(`http://localhost:8081/get/words?name=${name}&username=${username}&session=${session}`).then((reponse) => {
        let words = reponse.data as Array<LernsetWord>;
        const wordsList = getAllWordsFromLernsetAsWordList(words);
        return wordsList;
    });
}

export function getAllWordsFromLernsetAsWordList(lernsetWord: Array<LernsetWord>): Array<WordList> {
    const list = [] as Array<WordList>;
    lernsetWord.forEach((lernsetWord) => {
        const x = {
            firstWord: lernsetWord.firstWord,
            secondWord: lernsetWord.secondWord
        }
        list.push(x);
    });
    return list;
}