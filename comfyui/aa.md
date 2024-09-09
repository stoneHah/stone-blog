<script setup>
import ViewCardLink from '/components/ViewCardLink.vue';
</script>

# AI/ComfyUI
## 模型放大

通过模型对图片进行放大，这种放大不会添加更多细节


## 潜空间放大
顾名思义，在潜空间里进行放大，这种会添加更多的细节，当然也更耗GPU资源


## SD放大

将图片进行拆分然后对每块进行放大，最后再将每块拼接起来

{{1+1}}

<div class="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  这是一个使用Tailwind CSS样式的div
</div>

<div class="search-results">
    <ViewCardLink
      logo="/baidu.png"
      siteName="百度"
      title="百度一下，你就知道"
      description="百度——全球最大的中文搜索引擎及最大的中文网站，全球领先的人工智能公司。"
      url="https://www.baidu.com"
    />
    <ViewCardLink
      logo="https://www.baidu.com/favicon.ico"
      siteName="百度"
      title="百度一下，你就知道"
      description="百度——全球最大的中文搜索引擎及最大的中文网站，全球领先的人工智能公司。"
      url="https://www.baidu.com"
    />

    <!-- 可以添加更多SearchResult组件 -->
    
</div>

<button class="button">按钮</button>

<style scoped>
.button {
  color: red;
  font-weight: bold;
}
.search-results {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
