import { Group } from "@/types/Group";
import { getCookie } from "./cookie";
import axios from "axios";

export function getUsersGroup(): Promise<Array<Group>> {
    const username = getCookie("username")!;
    const session = getCookie("session")!;
    return axios.get(`http://localhost:8081/get/teams/by/username/session?username=${username}&session=${session}`).then((response) => {
        const groups = response.data;
        return groups;
    });
}