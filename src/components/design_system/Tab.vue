<template>
    <div v-if="isSelected">
        <div id="travelPackageTab" class="tab-pane active">
			<div class="tk-booker">
				<div class="row tk-booker travel-package-booker">
                    <slot></slot>
                </div>
            <div>
        </div>
    </div>
</div>
</div>
</template>

<script>
    export default {
        props: {
            isSelected: {
                type: Boolean,
            },
        },
    }
</script>

<style scoped>
#travelPackageTab {
    background-color: #fff;
    padding: 30px 2em 20px;
    box-shadow: 0 10px 15px rgb(0 0 0 / 14%);
    border: none;
    border-radius: 0 3px 3px;
}
.tk-booker {
    align-items: center;
}
</style>
