<template>
    <header class="header">
        <div class="header-core">
            <!-- 左侧 -->
            <div class="left">
                <div class="logo">
                    <svg class="logo-icon" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
                    </svg>
                    <span class="logo-text">呱呱考研</span>
                </div>
            </div>

            <!-- 中间导航 -->
            <nav class="nav">
                <a class="nav-item" href="#">首页</a>
                <a class="nav-item" href="#">查院校</a>
                <a class="nav-item" href="#">查专业</a>
                <a class="nav-item" href="#">国家线</a>
                <a class="nav-item" href="#">科目调整</a>
                <a class="nav-item" href="#">考研指南</a>
            </nav>

            <!-- 右侧 -->
            <div class="right">
                <button class="login-btn">登录</button>
            </div>
        </div>
    </header>
</template>

<script setup></script>

<style scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(255, 255, 255, .75);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0, 0, 0, .05);
}

.header-core {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    position: relative;
    /* 关键：给 nav 绝对定位当参照 */
}

.left {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.logo {
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
}

.logo-icon {
    width: 2rem;
    height: 2rem;
    fill: #6366f1;
}

.logo-text {
    font-size: 1.25rem;
    font-weight: 700;
    background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* 居中导航 */
.nav {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 1.25rem;
}

.nav-item {
    font-size: .95rem;
    color: #4b5563;
    text-decoration: none;
    position: relative;
    transition: color .3s;
}

.nav-item::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #6366f1;
    transition: width .3s;
}

.nav-item:hover {
    color: #6366f1;
}

.nav-item:hover::after {
    width: 100%;
}

.login-btn {
    padding: .45rem 1.1rem;
    font-size: .9rem;
    color: #fff;
    border: none;
    border-radius: 999px;
    background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
    box-shadow: 0 4px 6px rgba(99, 102, 241, .26);
    cursor: pointer;
    transition: transform .2s, box-shadow .2s;
}

.login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(99, 102, 241, .36);
}

@media(max-width:768px) {
    .nav {
        display: none;
    }
}
</style>