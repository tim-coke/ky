<template>
    <div class="layout">
        <IndexHeader />
        <IndexMain>
            <slot />
        </IndexMain>
        <IndexFooter />
    </div>
</template>

<script setup>
import IndexHeader from './index/IndexHeader.vue'
import IndexMain from './index/IndexMain.vue'
import IndexFooter from './index/IndexFooter.vue'
</script>

<style scoped>
.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
    animation: fadeIn .6s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>