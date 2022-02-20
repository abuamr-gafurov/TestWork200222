<template>
  <div
    class="rounded bg-esk-gray-f7 px-7 py-10 lg:py-5 grid grid-cols-1 lg:grid-cols-2 gap-2 items-center"
  >
    <div class="flex items-center justify-center py">
      <img
        v-if="item.images"
        class="h-64 w-72 object-contain"
        :src="
          `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
            item.images[0]
          }`
        "
        :alt="item.title"
      />
      <img
        v-else
        class="h-64 w-72 object-contain"
        :src="
          `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
            item.images[0]
          }`
        "
        :alt="item.title"
      />
    </div>
    <div>
      <!-- <span class="text-sm text-esk-gray-ad font-normal">{{ item.type }}</span> -->
      <h3 class="text-esk-blue-32 font-medium md:text-2xl text-xl mt-5">
        {{ item.title }}
      </h3>
      <p
        class="text-base text-esk-gray-55 font-normal my-4"
        v-html="item.description && item.description.length > 80 ? `${item.description.slice(0,80)} ...` : item.description"
      ></p>
      <!-- <nuxt-link  :to="item.btnCheckout.link ? item.btnCheckout.link : '/'" class="text-base font-normal" :class="[item.btnCheckout.style == 'hasBg' ? 'bg-esk-red-d6 text-white rounded w-full py-3 block mt-6 text-center' : 'text-esk-blue-35']">{{ item.btnCheckout.text }}</nuxt-link> -->
      <nuxt-link
        v-if="type"
        :to="`/${type}/${item.id}`"
        class="text-esk-blue-35 font-normal text-sm text-right block"
        >Подробнее</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["item","type"]
};
</script>
