<template>
  <div class="bg-esk-gray-f7 rounded px-7 py-5">
    <small class="text-xs font-normal text-esk-gray-62">{{
      item.created_at.substring(0, 10)
    }}</small>
    <h3 class="text-xl font-normal text-dark my-2">{{ item.title.length > 60 ? item.title.slice(0,60) + '...' : item.title}}</h3>
    <nuxt-link
      :to="item.link ? item.link : `/news/${item.id}`"
      class="text-esk-blue-35 font-normal text-xs text-right block"
      >Подробнее...</nuxt-link
    >
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>
