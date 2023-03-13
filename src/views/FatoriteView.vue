<template>
    <div class="container">
        <ListRepo />           
    </div>
</template>

<script>
 import ListRepo from '@/components/ListRepo.vue';
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex';

export default {
    name: 'FatoriteView',
    components: {
        ListRepo,
    },
}
</script>

<style scoped>

</style>