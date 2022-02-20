<template>
  <div>
    <div class="flex flex-col lg:flex-row">
      <div
        :class="index == 0 ? 'lg:pr-5' : 'mt-5 lg:mt-0'"
        v-for="(data, index) in item.blocks"
        :key="index"
      >
        <h3 class="text-white text-3xl mb-4 font-medium">
          {{ data.title }}
        </h3>
        <div v-html="data.description" class="text-gray-300">
          <!-- {{ data.description }} -->
        </div>
      </div>
    </div>
    <h3 class="text-white text-3xl mt-24 font-medium mb-4">
      {{ item.values.title }}
    </h3>
    <div class="grid md:grid-cols-2 xl:grid-cols-5 gap-5 text-white">
      <div
        class="p-3 bg-esk-purple-95 rounded-md"
        v-for="(data, index) in item.values.items"
        :key="index"
      >
        <img
          class="w-6"
          :src="
            `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
              data.icon
            }`
          "
          alt=""
        />
        <h4 class="text-xl font-medium py-5">{{ data.title }}</h4>
        <div v-html="data.description">
          <!-- {{ data.description }} -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {};
  }
};
</script>
