<template>
    <div >
      <ListRepo />
    </div>
</template>
  
<script>
  import ListRepo from '@/components/ListRepo.vue';
  
  export default {
    name: 'RepositoriesView',
    components: {
        ListRepo,
    },
  }
</script>
  