<template>

    <!-- 搜索条 -->
    <section class="search-bar">
        <input v-model="keyword" class="search-input" placeholder="搜院校、专业、指南..." />
        <button class="search-btn">搜索</button>
    </section>

    <!-- 功能宫格 -->
    <section class="grid-box">
        <div v-for="(item, i) in cards" :key="i" class="card" :style="{ '--delay': i * 0.1 + 's' }"
            @click="$router.push(item.link)">
            <!-- 直接用 emoji 当图标 -->
            <div class="card-icon">{{ item.emoji }}</div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.desc }}</p>
        </div>
    </section>

</template>

<script setup>
import IndexLayout from '@/components/layout/IndexLayout.vue'
import { ref } from 'vue'

/* 搜索关键字 */
const keyword = ref('')

/* 卡片数据：emoji + 标题 + 描述 + 跳转地址 */
const cards = [
    { title: '查院校', desc: '全国研招院校查询', emoji: '🏫', link: '/school' },
    { title: '查专业', desc: '研究生专业查询', emoji: '📚', link: '/major' },
    { title: '国家线', desc: '历年国家线查询', emoji: '📊', link: '/score' },
    { title: '科目调整', desc: '考研科目调整信息', emoji: '🔄', link: '/adjust' },
    { title: '考研指南', desc: '考研备考核心指南', emoji: '📖', link: '/guide' }
]
</script>

<style scoped>
/* 搜索条 */
.search-bar {
    display: flex;
    justify-content: center;
    margin: 2.5rem 0 3rem;
    gap: .75rem;
}

.search-input {
    width: 100%;
    max-width: 36rem;
    padding: .7rem 1.2rem;
    font-size: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 999px;
    outline: none;
    transition: box-shadow .3s, border-color .3s;
}

.search-input:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, .2);
}

.search-btn {
    padding: .7rem 1.8rem;
    font-size: 1rem;
    color: #fff;
    border: none;
    border-radius: 999px;
    background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
    cursor: pointer;
    transition: transform .2s;
}

.search-btn:hover {
    transform: translateY(-2px);
}

/* 宫格 */
.grid-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1.5rem;
}

.card {
    background: #fff;
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 6px 20px rgba(0, 0, 0, .06);
    cursor: pointer;
    transition: transform .3s, box-shadow .3s;
    animation: fadeUp .6s both;
    animation-delay: var(--delay);
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(99, 102, 241, .15);
}

.card-icon {
    font-size: 2.5rem;
    /* emoji 大小 */
    margin: 0 auto .75rem;
}

.card-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: .25rem;
}

.card-desc {
    font-size: .95rem;
    color: #6b7280;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media(max-width:640px) {
    .search-bar {
        padding: 0 1rem;
    }

    .grid-box {
        padding: 0 1rem;
    }
}
</style>