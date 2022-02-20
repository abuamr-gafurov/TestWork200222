<template>
  <div
    class="relative"
    :class="
      bg == 'gray'
        ? 'bg-esk-gray-f7 py-7 px-5 rounded-md'
        : 'bg-white py-7 px-5 rounded-md'
    "
  >
    <div class="flex justify-center">
      <img
        class="md:h-36 w-32"
        v-if="type == 'xls'"
        src="/image/xls.svg"
        alt=""
      />
      <img
        class="md:h-36 w-32"
        v-if="type == 'doc'"
        src="/image/Doc.svg"
        alt=""
      />
      <img class="md:h-36 w-32" v-if="type == 'pdf'" src="/image/pdf.svg" />
    </div>
    <h5 class="mt-5 text-center md:text-md text-sm">{{ document.name ? document.name : document.title}}</h5>
    <a class="absolute w-full h-full top-0 left-0" v-if="document.file || document.link" :href="`${$axios.defaults.baseURL.replace('/api/', '/storage/')}${document.file ? document.file : document.link}`" target="_blank"></a>
  </div>
</template>
<script>
export default {
  props: ["document", "type", "bg"]
};
</script>
