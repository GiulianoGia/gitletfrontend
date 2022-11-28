import { Lernset } from "@/types/Lernset";
import { User } from "@/types/User";
import axios from "axios";
import { getCookie } from "./cookie";

/**
 * 
 * @returns a user with the username  */
 export async function getLernsetFromUser(): Promise<Lernset[]> {
    const username = getCookie("username")!;
    const session = getCookie("session")!;
    return axios.get(`http://localhost:8081/get/lernset/username/session?username=${username}&session=${session}`).then((response) => {
        const lernsets: Array<Lernset> = response.data;
        return lernsets;
    })
}