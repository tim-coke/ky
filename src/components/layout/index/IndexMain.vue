<template>
    <main class="main">
        <div class="main-card">
            <slot />
        </div>
    </main>
</template>

<script setup></script>

<style scoped>
.main {
    flex: 1;
    max-width: 80rem;
    width: 100%;
    margin: 2rem auto;
    padding: 0 1.5rem;
}

.main-card {
    /* background: #fff; */
    border-radius: 1rem;
    /* box-shadow: 0 8px 30px rgba(0, 0, 0, .05); */
    /* padding: 2rem 2.5rem 3rem; */
    min-height: 25rem;
}

@media(max-width:640px) {
    .main-card {
        padding: 1.5rem;
    }
}
</style>