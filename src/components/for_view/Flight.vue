<template>
    <Input class="col-sm-5" :label="label1"></Input>
    <Input class="col-sm-5" :label="label2"></Input>
    <Button class="col-sm-2 mb-1" :butonLabel="butonLabel"></Button>
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
}
</script>

<style>

</style>