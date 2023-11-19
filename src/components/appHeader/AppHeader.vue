<template>
    <header class="header">
        <div class="container">
            <div class="top-header">
                <slot name="top-header"></slot>
            </div>
            <div class="bottom-header" v-if="$slots['bottom-header']">
                <slot name="bottom-header"></slot>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="sass" src="./appHeader.sass" scoped></style>
