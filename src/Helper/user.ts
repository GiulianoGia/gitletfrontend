import axios from "axios";
import { User } from "@/types/User";
/**
 * 
 * @param username name of the user
 * @returns a user with the username
 */
export async function getUser(username: string): Promise<User> {
    return await fetch("http://localhost:8081/get/user/username?username=" + username)
        .then((response) => response.json())
        .then((data: User) => { return data; });
}

/**
 * 
 * @returns all users in the database 
 */
export async function getAllUsers() : Promise<Array<User>> {
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
        .then((data: User) => { return data});
}

/**
 * 
 * @param id id of the user from the database
 * @returns an error
 */
export async function  deleteUser(id: number) {
    return await fetch(`http://localhost:8081/delete/user?id=${id}`)
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export async function loginUser(user: User) {
    return await fetch(`http://localhost:8081/login/user?username=${user.username}&password=${user.password}`)
        .then((response) => response.json)
        .catch((error) => console.log(error));
}