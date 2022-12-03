<template>
    <div class="container-tab">
        <TabNav :tabs="tabs" :selected="selected" @selected="setSelected">
            <Tab v-for="tab in tabs" :key="tab.header" :isSelected="selected === tab.header">
                <FlightVue v-if= "tab.content == 'flight'"></FlightVue>
                <FlightHotelVue v-if= "tab.content == 'flightHotel'"></FlightHotelVue>
                <CheckInVue v-if= "tab.content == 'checkIn'"></CheckInVue>
                <FlightStatusVue v-if= "tab.content == 'flightStatus'"></FlightStatusVue>
            </Tab>
        </TabNav>
  </div>
</template>

<script>
import TabNav from "../design_system/TabNav.vue"
import Tab from "../design_system/Tab.vue"
import CheckInVue from "../for_view/CheckIn.vue"
import FlightStatusVue from "../for_view/FlightStatus.vue"
import FlightVue from "./Flight.vue"
import FlightHotelVue from "./Flight&Hotel.vue"

export default {
    components: {
        TabNav,
        Tab,
        CheckInVue,
        FlightStatusVue,
        FlightVue,
        FlightHotelVue
    },
    data() {
        return {
            selected: 'Flight',

            tabs: [
                {
                    header:'Flight', 
                    content: 'flight'
                }, 
                {
                    header:'Flight+Hotel',
                    content: 'flightHotel'
                }, 
                {
                    header:'Check-In',
                    content: 'checkIn'
                }, 
                {
                    header:'Flight Status',
                    content: 'flightStatus'
                }
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
