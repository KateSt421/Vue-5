<template>
    <div class="list">
        <div class="list-item" v-for="item of list" v-bind:key="item.id">
            <p>{{ item.date }}</p>
            <p>{{ item.category }}</p>
            <h5>{{ item.value }}$</h5>
            <button v-on:click="togglePopup(item.id)">...</button>

            <Modal v-bind:id="item.id">
                <Popup v-bind:id="item.id" />
            </Modal>
        </div>
    </div>
</template>

<script>
import Popup from './Popup.vue'
import Modal from './Modal.vue'
export default {
    name: 'List',
    components: { Popup, Modal },
    computed: {
        list() { return this.$store.getters.getList }
    },
    methods: {
        togglePopup(id) {
            this.$modal.toggle(id)
        }
    }
}
</script>

<style lang="scss">
.list {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ccc;
}

.list-item {
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-bottom: 1px solid #ccc;
    position: relative;
}
</style>