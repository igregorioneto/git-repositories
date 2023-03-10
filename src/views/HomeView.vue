<template>
  <div v-if="result === false" >
    <Search @search="search($event)" />
  </div>
  <div v-if="result === true" >
    <List :list-search="listResult"/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import List from '@/components/List.vue';

export default {
  name: 'HomeView',
  components: {
    Search,
    List
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
