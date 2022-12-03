<template>
    <div class="container-tab">
        <TabNav :tabs="tabs" :selected="selected" @selected="setSelected">
            <Tab v-for="tab in tabs" :key="tab.header" :isSelected="selected === tab.header">
               <FlightVue></FlightVue>
            </Tab>
        </TabNav>
  </div>
</template>
<script>
import TabNav from "../design_system/TabNav.vue"
import Tab from "../design_system/Tab.vue"
import FlightVue from "../for_view/Flight.vue"

export default {
    components: {
        TabNav,
        Tab,
        FlightVue
    },
    data() {
        return {
            selected: 'Uçak',

            tabs: [
                {header:'Uçak', content: 'deneme'}, 
                {header:'Uçak+Otel', content: 'deneme'}, 
                {header:'Check-in', content: 'deneme'}, 
                {header:'Uçuş Durumu', content: 'deneme'}
            ]
        }
    },
    props: {
        
    },
    methods: {
        setSelected(tab) {
            this.selected = tab;
        }
    }
}
</script>

<style scoped>
.container-tab {
font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  flex-direction: row !important;
  justify-content: center !important;
  margin-top: 0;
}

</style>
