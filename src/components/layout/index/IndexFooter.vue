<template>
    <footer class="footer">
        <div class="footer-core">
            <p class="text">
                本站信息查询仅供参考，具体数据请以学校官网或考试院公布为准<br>
                本站数据未经授权严禁转载，违者将依法追究责任 © 呱呱考研
            </p>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped>
.footer {
    margin-top: auto;
    background: linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 100%);
    border-top: 1px solid rgba(0, 0, 0, .05);
}

.footer-core {
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    text-align: center;
}

.text {
    font-size: .85rem;
    color: #6b7280;
    line-height: 1.6;
}
</style>