// store/index.js
import { createStore } from "vuex";
import axios from "axios";
import { User } from '@/types/User'

export default createStore({
    state: {
        users: [],
        user: {} as User
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
            }
        },
        async fetchUser({ commit }) {
            try {
                axios.get("http://localhost:8081/get/user/username").then((response) => {
                    commit("SET_USER", response.data);
                })
            } catch (error) {
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
