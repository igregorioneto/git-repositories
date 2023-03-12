<template>
    <div class="container">
      <Details  />

        <div class="repositories">
            <ListRepo  />

            <div class="button-var-mais">
                <button>Var mais</button>
            </div>
        </div>
    </div>

    
    
  </template>
  
<script>
import Details from '@/components/Details.vue';
import ListRepo from '@/components/ListRepo.vue';

export default {
    name: 'DetailUserView',
    components: {
        Details,
        ListRepo
    },
    data() {
        return {
        result: false,
        listResult: []
        }
    },
    methods: {
        search(event) {
        this.result = true;
        this.listResult = event.items;
        console.log(event)
        }
    }
}
  </script>
  
<style scope>

.container {
    display: flex;
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