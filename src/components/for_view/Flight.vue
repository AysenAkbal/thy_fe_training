<template>
  <Input class="col-sm-5" :label="label1"></Input>
  <Input class="col-sm-5" :label="label2"></Input>
  <Button class="btn col-sm-2 mt-10" :butonLabel="butonLabel"></Button>
  <textLink class="col-sm-6" :link="link" :textLink="textLink"></textLink>

</template>

<script>
import Input from "../common/Input.vue"
import Button from "../design_system/Button.vue"
import TextLink from "../common/TextLink.vue"

export default {
    data() {
        return {
            label1: 'Bilet ya da rezervasyon kodu (PNR)',
            label2: 'Yolcunun Soyadı',
            butonLabel: 'Uçuş Ara',
            textLink: 'Rezervasyon kodu (PNR) ve bilet numarası nedir?',
            link: 'https://www.turkishairlines.com/'
        }
    },
    components: {
        Input,
        Button,
        TextLink
    },
    methods: {

    }

}
</script>

<style>
.btn {
    height: 66px!important;
    border-radius: 3px;
    background: #E81932!important;
    border: none!important;
    color: #fff!important;
    border-bottom: none!important;
    opacity: 1!important;
}

.red {
    color: #E81932;
}

.mt-10 {
    margin-top: 10px;
}
</style>