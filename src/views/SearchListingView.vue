<template>
    <div >
      <List :list-search="listResult"/>
    </div>
</template>
  
<script>
import { computed, ref } from "vue";
import { useStore } from 'vuex';

import List from '@/components/List.vue';

export default {
    name: 'SearchListingView',
    components: {
        List
    },
    setup() {
        const store = useStore();
        const listResult = computed(() => store.state.user.listUsers);

        return {
            listResult,
        }

    }
}
</script>
  