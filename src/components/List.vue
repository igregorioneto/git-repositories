<template>
    <div class="container">
        <div @click="userDetail(item.login)" class="card" v-for="item in items" :key="item.id">
            <img :src="item.avatar_url" alt="">
            <h2>{{item.login}}</h2>
        </div>

        <div class="button-var-mais">
            <button>Var mais</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    name: 'List',
    props: {
        listSearch: []
    },
    setup(props) {
        const router = useRouter();
        const items = props.listSearch.items;

        function userDetail(username) {
            router.push({ name: "userDetail", params: { username: username } });
        }

        return {
            items,
            userDetail
        }
    }
}
</script>

<style scoped>

.container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.card {
    width: 100%;
    height: 10rem;
    padding: 1rem;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;


    display: flex;
    flex-direction: row;

    cursor: pointer;

    margin-bottom: 14px;
}

.card img {
    width: 120px;
    height: 120px;
}

.card h2 {
    margin-left: 14px;
}

.button-var-mais{
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 20px 0;
}

.button-var-mais button {
    box-sizing: border-box;

    width: 168px;
    height: 46px;

    background: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 10px;
}
</style>