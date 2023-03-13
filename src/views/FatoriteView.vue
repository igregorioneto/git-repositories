<template>
    <div class="container">
        <div v-if="listResult.length > 0">
            <div class="card-repo" v-for="item in listResult" :key="item.id">

                <div class="title">
                    <h2>{{ item?.name }}</h2>
                    <i class="bi bi-star-fill" @click="removeRepositoriesFavorite(item)"></i>
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
            Sem favoritos...
        </div>
        
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex';

export default {
    name: 'FatoriteView',
    setup() {
        const store = useStore();
        const listResult = computed(() => store.state.user.repositoriesFavorite);

        function removeRepositoriesFavorite(payload) {
            store.dispatch('user/removeFavorite', payload);
        }

        return {
            listResult,
            removeRepositoriesFavorite
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