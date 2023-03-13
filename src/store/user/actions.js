import axios from 'axios';
import { users } from '../mutations-types';

const { 
    SEARCH_USER, 
    FIND_USER_DETAIL, 
    REPOSITORIES_USER, 
    REPOSITORIES_FAVORITE, 
    REMOVE_FAVORITE,
    SEARCH_REPOSITORIES
} = users;

export default {
    async searchUser({commit}, payload){
        const req = await axios
            .get(`https://api.github.com/search/users?q=${payload}&page=1`)
            .then(resp => {
                commit(SEARCH_USER, resp.data);
            });
    },
    async searchRepositories({commit}, payload){
        const req = await axios
            .get(`https://api.github.com/search/repositories?q=${payload}&page=1`)
            .then(resp => {
                commit(SEARCH_REPOSITORIES, resp.data);
            });
    },
    async byUser({commit}, payload) {
        const req = await axios
            .get(`https://api.github.com/users/${payload}`)
            .then(resp => {
                commit(FIND_USER_DETAIL, resp.data);
            });
    },
    async repositoriesUser({commit}, payload) {
        const req = await axios
            .get(`https://api.github.com/users/${payload}/repos?direction=desc`)
            .then(resp => {
                commit(REPOSITORIES_USER, resp.data);
            });
    },
    repositoriesFavorite({commit}, payload) {
        commit(REPOSITORIES_FAVORITE, payload);
    },
    removeFavorite({commit}, payload){
        commit(REMOVE_FAVORITE, payload);
    }
}