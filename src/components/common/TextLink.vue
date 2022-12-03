<template>
    <div class="col-xs-12 col-sm-6">
        <div>
            <a target="_blank" :href=link>{{textLink}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            textLink: String,
            link: String
        },
    }
</script>
