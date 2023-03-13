<template>
    <div class="container">
        <div class="card" >
            <img :src="byUser?.avatar_url" alt="">
            <h2>{{ byUser?.name }}</h2>
            <span>{{ byUser?.login }}</span>
        </div>
    </div>
</template>

<script>
import { onMounted, computed, watch, ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import axios from 'axios';

export default {
    name: 'Details',
    props: {
        listSearch: []
    },
    setup(props) {
        const store = useStore();
        const router = useRouter();

        const byUser = computed(() => store.state.user.byUser)
        onMounted(() => {
            const payload = router.currentRoute.value.params.username;
            store.dispatch('user/byUser', payload);
            store.dispatch('user/repositoriesUser', payload);
        })

        watch(byUser.value, (newByUser, OldByUser) => console.log(newByUser, OldByUser))

        return { byUser }

    }
}
</script>

<style scoped>

.container {
    margin: 0 auto;
}
.card {
    width: 280px;
    height: 444px;

    padding: 15px;

    background: #D9D9D9;
    border-radius: 5px;
}

.card img {
    width: 100%;
    height: 250px;
}

.card h2 {
    margin-top: 15px;
    text-align: left;
}

.card span {
    text-align: left;
    color:#757575;
}

</style>