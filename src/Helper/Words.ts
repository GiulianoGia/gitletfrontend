import axios from "axios";
import { Word } from "@/types/Word"
import { getCookie } from "./cookie";

export function getAllWordsFromLernset(name: string): Promise<Array<Word>> {
    const username = getCookie("username")!;
    const session = getCookie("session")!;
    return axios.get(`http://localhost:8081/get/words?name=${name}&username=${username}&session=${session}`).then((reponse) => {
        const words = reponse.data;
        return words;
    });
}