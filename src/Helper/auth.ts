import router from "@/router";
import { getCookie } from "./cookie";

export function isEmpty(obj: Object) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

export function redirectIfAuth() {
    if (getCookie('session') == undefined) router.push("login");
    else router.push("/")
}