import axios from "axios";
import { User } from "@/types/User";
import { showNotification } from "@/Helper/notification";
import { LoginResponse } from "@/types/Auth/LoginResponse";
import { hashCode } from "./hash";
import store from "@/store/user";
import router from "@/router";
import { redirectIfAuth } from "./auth";
import { getCookie } from "./cookie";

/**
 * 
 * @returns a user with the username  */
export async function getCurrentUser(): Promise<User> {
    const username = getCookie("username")!;
    const session = getCookie("session")!;
    return axios.get(`http://localhost:8081/get/user/username/session?username=${username}&session=${session}`).then((response) => {
        const user: User = response.data;
        return user;
    })
}

/**
 * 
 * @returns all users in the database 
 */
export async function getAllUsers(): Promise<Array<User>> {
    return await fetch("http://localhost:8081/get/users/all")
        .then((response) => response.json())
        .then((data: Array<User>) => { return data; });
}

/**
 * 
 * @param username name of the user
 * @param password password which the user set
 * @param age  age of the user
 * @param email email of the uesr
 * @returns void
 */
export async function createUser(username: string, password: string, age: number, email: string): Promise<User> {
    return await fetch(`http://localhost:8081/new/user?username=${username}&password=${password}&age=${age}&email=${email}`)
        .then((reponse) => reponse.json())
        .then((data: User) => { return data });
}

/**
 * 
 * @param id id of the user from the database
 * @returns an error
 */
export async function deleteUser(id: number) {
    return await fetch(`http://localhost:8081/delete/user?id=${id}`)
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

function setUserSession(session: string, username: string, password: string) {
    axios.post(`http://localhost:8081/set/session/user?username=${username}&password=${password}&session=${session}`);
}

/**
 * 
 * @param user data from the form of the login process
 * @creates cookie and session for the user
 */
export async function loginUser(user: User) {
    return await axios.post(`http://localhost:8081/login/user?username=${user.username}&password=${user.password}`, {method: 'POST'})
        .then((response) => {
            const user: User = response.data;
            store.state.user = user;
            const session = hashCode(user.username).toString();
            setUserSession(session, user.username, user.password);
            document.cookie = `username=${user.username}`;
            document.cookie = `session=${session}`;
            redirectIfAuth('/');
        })
        .catch((error) => showNotification());
}