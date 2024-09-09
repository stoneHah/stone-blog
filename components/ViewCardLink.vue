<template>
    <div class="search-result-card">
      <a :href="url" class="card-link">
        <div class="card-header">
          <img :src="logo" alt="网站logo" class="site-logo">
          <div class="site-info">
            <span class="site-name">{{ siteName }}</span>
          </div>
        </div>
        <p class="card-description">{{ description }}</p>
      </a>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    logo: string;
    siteName: string;
    description: string;
    url: string;
  }
  
  defineProps<Props>();
  </script>
  
  <style scoped>
  .search-result-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 16px;
    width: 200px;
    height: 150px;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease;
  }
  
  .search-result-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  
  .site-logo {
    height: 32px;
  }
  
  .site-info {
    text-align: right;
  }
  
  .site-name {
    font-size: 14px;
    color: #006621;
  }
  
  .card-description {
    font-size: 12px;
    color: #545454;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 限制为两行 */
    -webkit-box-orient: vertical;
    line-height: 1.4;
    text-overflow: ellipsis; /* 确保在末尾显示省略号 */
  }
  </style>