<template>
    <div class="pagination">
        <button :disabled="page === 1" @click="emit('change', page - 1)">上一页</button>
        <span class="info">{{ page }} / {{ totalPage }}</span>
        <button :disabled="page === totalPage" @click="emit('change', page + 1)">下一页</button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    page: { type: Number, required: true },
    size: { type: Number, required: true },
    total: { type: Number, required: true }
})
const emit = defineEmits(['change'])
const totalPage = computed(() => Math.ceil(props.total / props.size))
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
}

.pagination button {
    padding: 0.4rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    background: #fff;
    cursor: pointer;
    transition: background 0.2s;
}

.pagination button:hover:not(:disabled) {
    background: #6366f1;
    color: #fff;
    border-color: #6366f1;
}

.pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.info {
    font-size: 0.9rem;
    color: #6b7280;
}
</style>