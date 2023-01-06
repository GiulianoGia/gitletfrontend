import router from "@/router";
import { getCookie } from "./cookie";

export function isUserAuthenticated(): boolean {
    if (getCookie('username') == undefined  || getCookie('session') == undefined) {
        console.log('User is not authenticated')
        return false;
    } else {
        console.log('User is authenticated')
        return true;
    }
}