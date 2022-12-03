<template>
  <div class="input-area">
        <div class="input-area-field">
            <label class="booker-text-label" for="ticketNo">{{label}}</label>
            <input type="search" id="ticketNo" maxlength="13" class="tk-booker-input"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: String
    }
}
</script>

<style>
.input-area{
    margin-bottom: 10px;
}
.input-area-field {
    margin-bottom: 15px;
}
.booker-text-label {
    font-size: 11px;
    font-weight: 700;
    color: #242b38;
    white-space: nowrap;
    z-index: 1040;
    width: auto;
    height: auto;
    left: 20px;
    top: 24px;
    opacity: 1;

}
.tk-booker-input {
    width: 100%;
    height: 66px!important;
    background-color: #F4F6F8;
    border-radius: 3px;
    box-shadow: none;
    border: none;
    padding: 6px 20px;
    font-size: 17px!important;
    color: #242b38;
    font-family: MuseoSans-700,sans-serif;
    letter-spacing: -.5px;
}

</style>