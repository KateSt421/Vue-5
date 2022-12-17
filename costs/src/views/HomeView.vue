<template>
  <div class="home">
    <button v-on:click="showModal">Добавить +</button>
    <List />
    <div class="pagination">
      <button v-on:click="$store.commit('prevPage')">prev</button>
      <button v-on:click="$store.commit('nextPage')">next</button>
    </div>
    <Modal v-bind:id="'addCost'">
      <AddForm v-on:saveCost="addNew" v-bind:id="'addCost'" />
    </Modal>
    <Modal v-bind:id="'err'">Error</Modal>
  </div>
</template>

<script>
import List from '@/components/List.vue';
import Modal from '@/components/Modal.vue';
import AddForm from '@/components/AddForm.vue';
export default {
  name: 'HomeView',
  components: { List, Modal, AddForm },
  methods: {
    showModal() {
      this.$modal.show('addCost')
    },
    addNew(data) {
      this.$store.commit('addCost', data)
    }
  },
  mounted() {
    if (this.$route.name == 'cost' || this.$route.name == 'cost-edit') {
      this.showModal()
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == 'cost' || to.name == 'cost-edit') {
      this.$modal.show('addCost')
    }
    next()
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name == 'cost' || to.name == 'cost-edit') {
      this.$modal.show('addCost')
    }
    next()
  }
}
</script>
