<template>
    <div class="container">
        <div class="card" >
            <img  alt="">
            <h2>Lindemberg</h2>
            <span>username</span>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';

export default {
    name: 'Details',
    props: {
        listSearch: []
    },
    setup(props) {
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