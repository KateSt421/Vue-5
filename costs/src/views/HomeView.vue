<template>
  <div class="home">
    <button v-on:click="showModal">Добавить+</button>
    <List />
    <div class="pagination">
      <button v-on:click="$store.commit('prevPage')">prev</button>
      <button v-on:click="$store.commit('nextPage')">next</button>
    </div>
    <AddModal />

  </div>
</template>

<script>
import List from '@/components/List.vue';
import AddModal from '@/components/AddModal.vue';
export default {
  name: 'HomeView',
  components: { List, AddModal },
  methods: {
    showModal() {
      this.$modal.show('add')
    }
  }
}
</script>
