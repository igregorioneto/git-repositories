<template>
    <div class="container">
        <div v-if="listResult.length > 0">
            <div class="card-repo" v-for="item in listResult" :key="item.id">

                <div class="title">
                    <h2>{{ item?.name }}</h2>
                    <i 
                        @click="setRepositoriesFavorite(item.id)" 
                        :class="verificaFavorito(item?.id) ? 'bi bi-star-fill' : 'bi bi-star'"
                    >
                    </i>
                </div>

                <div>
                    <p>
                        {{ item?.description }}
                    </p>
                </div>

                <div>
                    <i class="bi bi-star"></i> {{item?.stargazers_count}}
                </div>
            </div>
        </div>
        <div v-else>
            Volte ao menu inicial e realize uma pesquisa...
        </div> 
        
        
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    name: 'ListRepo',
    setup() {
        const store = useStore();
        const router = useRouter();

        const payload = router.currentRoute.value.name;

        const listResult = payload === 'favorites' 
            ? computed(() => store.state.user.repositoriesFavorite)
            : computed(() => store.state.user.repositoriesUser);



        function setRepositoriesFavorite(payload) {
            if(verificaFavorito(payload) === true) {
                store.dispatch('user/removeFavorite', payload);
            } else {
                store.dispatch('user/repositoriesFavorite', payload);
            }
        }

        function verificaFavorito(id){
            return store.getters["user/isFavorite"](id);
        }

        return {
            listResult,
            setRepositoriesFavorite,
            verificaFavorito
        }
    }
}
</script>

<style scoped>

.container {
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.card-repo {
    height: 200px;
    padding: 1rem;
    background: #FFFFFF;

    border-bottom: 1px solid #000000;
    transform: rotate(-0.18deg);


    margin-left: 14px;
}

.card-repo .title {
    display: flex;
    justify-content: space-between;
}

.card-repo .title i {
    color: #FFC700;
    cursor: pointer;
}


</style>