<script>
import SupportIcon from "../icons/IconSupport.vue";
export default {
    components: {
        SupportIcon
    },
    props: {
        
    },
    data() {
        return {
        count: 0,
        };
    },
    methods: {
        
    },
};
</script>

<template>
    <div class="middle-wrapper"> 
        <div class="container"> 
            <div class="row"> 
                <div class="inner-row"> 
                    <div class="panel-body"> 
                        <div class="panel-bocy-content"> 
                            <div class="info-circle">
                                <i icon="fa fa-info"></i>
                                <SupportIcon></SupportIcon>
                            </div>
                        </div> 
                        <div class="info-text"> 
                            <p>Değerli Yolcularımız,</p>
                            <p>Ukrayna, Belarus ve Rusya uçuşlarımıza ilişkin duyurulara ve bu ülkelere yaptığımız uçuşlarımız için yolcularımıza tanınan haklara 
                                <a href="/tr-tr/duyurular/ukrayna-moldova-belarus-rusya-seferleri/" target="_blank">buradan</a>
                             erişebilirsiniz.</p> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
</template>

<style scoped>
.middle-wrapper {
    display: table;
    width: 100%;

}
.container {
    display: table;
    padding-left: 0;
    padding-right: 0;
    margin-left: 30px;
    margin-right: 30px;
}

.row {
    display: table-row;
    margin-left: -15px;
    margin-right: -15px;

}
.inner-row {
    display: table-cell;
    float: none;
}
.panel-body {
    display: flex;
}

.info-text p {
    font-size: 14px;
    line-height: 1.42857143;
    color: #232b38;
    vertical-align: middle;
}
.info-circle {
    background-color: #E81932;
    color: #fff;
    border-radius: 100%;
    font-size: 14pt;
    padding: 4px 9px;
    top: 5px;
    margin-right: 15px;
}

@media (min-width: 768px) {
  
}
</style>
