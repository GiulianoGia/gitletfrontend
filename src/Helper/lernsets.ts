import { Lernset } from "@/types/Lernset";
import axios from "axios";
import { getCookie } from "./cookie";
import { showNotification } from "./notification";

/**
 * 
 * @returns a user with the username  */
 export async function getLernsetFromUser(): Promise<Lernset[]> {
    const username = getCookie("username")!;
    const session = getCookie("session")!;
    return axios.get(`http://localhost:8081/get/lernset/username/session?username=${username}&session=${session}`).then((response) => {
        const lernsets: Array<Lernset> = response.data;
        return lernsets;
    });
}

export async function getLernsetById(lernsetId: number): Promise<Lernset> {
    const username = getCookie("username")!;
    const session = getCookie("session")!;
    try {
        return axios.get(`http://localhost:8081/get/lernset/id?username=${username}&session=${session}&id=${lernsetId}`).then((response) => {
            const lernsets: Lernset = response.data;
            return lernsets;
        });
    } catch(error) {
        showNotification();
        return {} as Lernset;
    }
}