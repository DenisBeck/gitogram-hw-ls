<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    max-width: 1200px;
    padding-inline: 15px;
    margin: 0 auto;
}
</style>