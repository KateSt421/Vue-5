<template>
    <div class="popup">
        <button>Удалить</button>
        <router-link :to="`/cost/${id}`">Редактировать</router-link>
    </div>
</template>

<script>
import router from '@/router';

export default {
    name: "Popup",
    props: {
        id: Number
    },
    components: { router }
}

</script>


<style lang="scss">
.popup {
    position: absolute;
    right: 27px;
    width: 100px;
    display: flex;
    flex-direction: column;
    min-height: 58px;
    background: #ccc;
    padding: 20px;
    border: 1px solid #444;
    justify-content: space-between;
    top: 58px;
    z-index: 99;
}
</style>