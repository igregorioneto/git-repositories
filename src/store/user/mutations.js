export default {
    SEARCH_USER(state, payload){
        state.listUsers = [];
        state.listUsers = payload;
        payload.total_count !== 0 ? state.notFound = false : state.notFound = true;
    },
    NOT_FOUND_USER(state, payload) {
        state.notFound = !state.notFound;
    },
    FIND_USER_DETAIL(state, payload) {
        state.byUser = payload;
    },
    REPOSITORIES_USER(state, payload) {
        state.repositoriesUser = payload;
    },
    REPOSITORIES_FAVORITE(state, payload) {
        const select = state.repositoriesUser.find((x) => x.id === payload);
        state.repositoriesFavorite = [...state.repositoriesFavorite, select];
    },
    REMOVE_FAVORITE(state, payload) {
        state.repositoriesFavorite = state.repositoriesFavorite.filter((x) => x.id !== payload);
    }
}