<template>
    <Dropdown class="col-sm-2 mt-10"></Dropdown>
    <InputVue class="col-sm-6" :label=label1></InputVue>
    <Dropdown class="col-sm-2 mt-10" ></Dropdown>
    <Button class="col-sm-2 mb-1" :butonLabel="butonLabel"></Button>
</template>

<script>
import Button from '../design_system/Button.vue'
import Dropdown from '../common/Dropdown.vue'
import InputVue from '../common/Input.vue'

export default {
    data() {
        return {
            butonLabel: 'Search',
            label1: 'Enter your flight number',
            label2: 'Saturday 3 Dec',
            dropdown1: [ 
                {
                    key: 1,
                    value:'Flight No'
                }, 
                {
                    key: 2,
                    value: 'Arrival'
                },
                {
                    key: 3,
                    value: 'Departure'
                },
                {
                    key: 4,
                    value: 'Route'
                }
            ]
        }
    },
    components: { 
        Button,
        Dropdown,
        InputVue
    },
    
}
</script>

<style scoped>
    .mt-10 {
        margin-top: 10px
    }
</style>