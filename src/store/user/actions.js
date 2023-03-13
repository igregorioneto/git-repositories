import axios from 'axios';
import { users } from '../mutations-types';

const { SEARCH_USER, FIND_USER_DETAIL, LIST_USERS } = users;

export default {
    async searchUser({commit}, payload){
        const req = await axios
            .get(`https://api.github.com/search/users?q=${payload}&page=1`)
            .then(resp => {
                commit(SEARCH_USER, resp.data);
            });
    },
    async byUser({commit}, payload) {
        const req = await axios
            .get(`https://api.github.com/users/${payload}`)
            .then(resp => {
                commit(FIND_USER_DETAIL, resp.data);
            });
    }
}