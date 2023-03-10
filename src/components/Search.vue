<template>
    <div class="container">
        <div class="row g-3">
            <div class="col-md-12 row d-flex justify-content-center">
                <i
                    class="bi bi-github rounded-circle" 
                    alt="Github avatar" >
                </i>
            </div>

            <div class="col-md-12 row d-flex justify-content-center buttons-group">
                <button 
                    @click="getRepositories()" 
                    type="button"
                    class="btn"
                    :class="{'active': !isActive}"
                >
                    Repositório
                </button>
                <button 
                    @click="getUsers()" 
                    type="button" 
                    class="btn"
                    :class="{'active': isActive}"
                >
                    Usuário
                </button>
            </div>

            <div class="col-md-12 row d-flex justify-content-center input-search">
                <div class="input-group rounded">
                    <input v-model="search" @keyup.enter=" getSearch()" type="text" class="form-control rounded" placeholder="Buscar..." aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-addon border-0" id="search-addon">
                        <button @click="getSearch()" class="bi bi-search" style="background:transparent;border:none"></button>
                    </span>
                </div>
            </div>
        </div>


        <NotFound v-if="notFound" @close="notFound = false"/>

    </div>
</template>

<script>
import axios from 'axios';
import NotFound  from '@/components/NotFound.vue';

export default {
    name: 'Search',
    components: {
        NotFound
    },  
    data() {
        return {
            user: true,
            search: '',
            isActive: true,
            notFound: false,
        }
    },
    methods: {
        async getUsers() {
            this.user = true;
            this.isActive = true;
        },
        async getRepositories() {
            this.user = false;
            this.isActive = false;
        },
        async getSearch() {
            if (this.user) {
                await axios
                .get(` https://api.github.com/search/users?q=${this.search}&page=1`)
                .then(resp => {
                    resp.data.total_count === 0 ? this.notFound = true: this.$emit('search', resp.data); 
                })
                .catch(error => this.notFound = true);
            } else {
                await axios
                .get(`https://api.github.com/search/repositories?q=${this.search}&page=1`)
                .then(resp => {
                    resp.data.total_count === 0 ? this.notFound = true: this.$emit('search', resp.data); 
                })
                .catch(error => this.notFound = true);
            }
            
        },
    }
}
</script>

<style scoped>
.bi.bi-github {
    font-size: 150px;
    text-align: center;
}

.container {
  margin: 0 auto;
}

div .buttons-group {
    margin: 0 auto;
}

div .buttons-group .btn {
    width: 11.625rem !important;
    background-color: #FFFFFF;
    border: 2px solid #000000;
    margin-right: 2.5rem;
    font-weight: bold;
}

div .buttons-group .btn:hover{
    background-color: #000000 !important;
    color: #FFFFFF;
}

.active {
    background-color: #000000 !important;
    color: #FFFFFF;
}

div .input-search .input-group {
    margin-top: 2.5rem;
}

div .input-group {
    width: 45rem !important;
}

div .input-search .input-group input {
    width: 80%;
    height: 60px;
}

div .input-search .input-group button {
    position: absolute;
    top: 0;
    right: 15px;
    margin-top: 10px;
    font-size: 27px;
    z-index: 10;
}
</style>