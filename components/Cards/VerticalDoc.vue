<template>
  <div class="px-7 py-6 flex">
    <img
      class="mr-3"
      src="/image/pdf.svg"
      alt=""
      v-if="item.extension === 'pdf'"
    />
    <img
      class="mr-3 w-24"
      src="/image/xls.svg"
      alt=""
      v-if="item.extension === 'xlsx'"
    />
    <img
      class="mr-3"
      src="/image/Doc.svg"
      alt=""
      v-if="item.extension === 'docx'"
    />

    <div class="flex flex-col justify-between">
      <h5 class="text-esk-blue-32 font-medium">{{ item.name }}</h5>
      <span>{{ parseFloat((item.size / 1024) / 1024).toFixed(2) }} мб</span>
      <a class="text-esk-orange-42" :href="`${$axios.defaults.baseURL.replace('/api/', '/storage/')}${item.path}`">Скачать</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "type"],
  data() {
    return {};
  }
};
</script>
