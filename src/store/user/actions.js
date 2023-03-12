import axios from 'axios';
import { users } from '../mutations-types';

const { SEARCH_USER, FIND_USER_DETAIL, LIST_USERS } = users;

export default {
    async searchUser({commit}, payload){
        const req = await axios
            .get(` https://api.github.com/search/users?q=${payload}&page=1`)
            .then(resp => {
                console.log(resp.data)
                commit(SEARCH_USER, resp.data);
            });
    },
}