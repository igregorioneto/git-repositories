<template>
    <div class="container">
        <div class="card-repo" >

            <div class="title">
                <h2>Angular-AdminLTE</h2>
                <i class="bi bi-star-fill"></i>
            </div>

            <div>
                <p>
                    AngularjsApp Implementation on top of renowned Admin-LTE theme (https://github.com/almasaeed2010/AdminLTE) now with many useful directives and features.
                </p>
            </div>

            <div>
                <i class="bi bi-star"></i> 500
            </div>
        </div>
        
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';

export default {
    name: 'ListRepo',
    props: {
        listSearch: []
    },
    setup(props) {
    }
}
</script>

<style scoped>

.container {
    width: 600px;
    margin: 0 auto;
}
.card-repo {
    height: 200px;
    padding: 1rem;
    background: #FFFFFF;

    border-bottom: 1px solid #000000;
    transform: rotate(-0.18deg);

    display: flex;
    flex-direction: column;

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