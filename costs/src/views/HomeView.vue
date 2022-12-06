<template>
  <div class="home">
    <List />
    <div class="pagination">
      <button v-on:click="$store.commit('prevPage')">prev</button>
      <button v-on:click="$store.commit('nextPage')">next</button>
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue';

export default {
  name: 'HomeView',
  components: { List }
}
</script>
