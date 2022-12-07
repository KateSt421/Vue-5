<template>
    <transition name="fade">
        <div v-if="isShown" class="modal">
            <div class="modal__body">
                OK
            </div>
            <button class="close-btn" v-on:click="$modal.hide('add')">close</button>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'AddModal',
    data: () => ({
        isShown: false,
        id: 'add'
    }),
    methods: {
        show(id) {
            if (id == this.id) {
                this.isShown = true
            }
        },
        hide(id) {
            if (id == this.id) {
                this.isShown = false
            }
        }
    },
    mounted() {
        this.$modal.EventBus.$on('modalShow', this.show)
        this.$modal.EventBus.$on('modalHide', this.hide)
    }
}

</script>

<style>
.modal {
    width: 800px;
    padding: 30px;
    background-color: white;
    border: 1px solid #ccc;
    position: absolute;
    top: 200px;
    left: calc(50% - 400px);
    box-shadow: 0 0 100px #444;
}

.close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opasity .5s;
}

.fade-enter,
.fade-leave-to {
    transition: opasity 0;
}

.fade-enter-to,
.fade-leave {
    transition: opasity 1;
}
</style>