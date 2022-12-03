<template>
    <div>
        <button class="btn w-100" :style="{ backgroundColor: bgColor }">{{butonLabel}}</button>
    </div>
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
