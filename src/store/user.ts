// store/index.js
import { createStore } from "vuex";
import axios from "axios";
export default createStore({
    state: {
        users: [],
        user: []
    },
    getters: {
        getUsers: function(state) {
            return state.users;
        },
        getUser: function(state)  {
            return state.user;
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                axios.get("http://localhost:8081/get/users/all").then((response) => {
                    commit("SET_USERS", response.data);
                });
            } catch (error) {
                console.log(error);
            }
        },
        async fetchUser({ commit }) {
            try {
                axios.get("http://localhost:8081/get/user/username").then((response) => {
                    commit("SET_USER", response.data);
                })
            } catch (error) {
                console.log(error);
            }
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_USER(state, user) {
            state.user = user;
        }
    },
});
