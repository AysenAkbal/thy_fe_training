<template>
    <button class="btn col-sm-2" :style="{ backgroundColor: bgColor }">{{butonLabel}}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        butonLabel: String,
        bgColor: String
    }
}
</script>

<style scoped>
</style>
