export default {
    notFound(state) {
        return state.notFound;
    },
    listUsers(state) {
        return state.listUsers;
    },
    byUser(state) {
        return state.byUser;
    },
    repositoriesUser(state) {
        return state.repositoriesUser;
    },
    repositoriesFavorite(state) {
        return state.repositoriesFavorite;
    },
    isFavorite: (state) => (id) => {
        return state.repositoriesFavorite.some(x => x.id === id);
    },
}