export default {
    SEARCH_USER(state, payload){
        state.listUsers = [];
        state.listUsers = payload;
        payload.total_count !== 0 ? state.notFound = false : state.notFound = true;
    },
    NOT_FOUND_USER(state, payload) {
        state.notFound = !state.notFound;
    }
}