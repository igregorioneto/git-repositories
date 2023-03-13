<template>
    <div class="container">
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
</template>

<script>
import { ref, computed } from 'vue'
import axios from 'axios';
import { useStore } from 'vuex';

export default {
    name: 'ListRepo',
    setup() {
        const store = useStore();
        const listResult = computed(() => store.state.user.repositoriesUser);

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