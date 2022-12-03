<template>
    <div>
        <ul class="nav nav-tabs">
            <li v-for="tab in tabs" :key="tab.header" class="nav-item">
            <a class="nav-link" :class="{ active: tab.header === selected }" 
                @click="setTab(tab)">{{ tab.header }}</a>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>
<script>
export default{
    props: {
        tabs: {
            type: Array
        },
        selected: {
            type: String
        }
    },
    methods: {
        setTab(tab) {
            this.$emit('selected', tab.header);
        },
    }
}
</script>

<style scoped>
.nav-item {
    color: #647280;
    background-color: #F4F5F8;
    margin: 0;
    border-radius: 3px 3px 0 0;
    border: none!important;
    padding: 10px 18px!important;
    line-height: 1.6;
    margin-right: 5px;
}
.nav-link {
    color: #647280;
    background-color: #F4F5F8;
    margin: 0;
    border-radius: 3px 3px 0 0;
    border: none!important;
    padding: 10px 18px!important;
    line-height: 1.6;
}
.nav-link.active {
    color: #E81932
}
</style>
