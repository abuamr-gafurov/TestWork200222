<template>
  <div>
    <div v-if="type && type==='light'" class="flex flex-col xl:flex-row justify-between items-center py-5 xl:py-0">
      <div class="order-2 xl:order-1 text-white">
        <span class="text-sm font-normal">{{ item.category }}</span>
        <h3 class="text-3xl font-medium mt-6 mb-4">{{ item.title }}</h3>
        <p class="text-base font-normal">{{ item.description }} </p>
        <div class="flex justify-self-start mt-8" v-if="item.btnCheckout && item.btnMore">
          <nuxt-link :to="item.btnCheckout.link" type="button" class="rounded text-white bg-esk-red-d6 py-3 px-7 sm:px-10 text-base font-medium mr-4">{{ item.btnCheckout.text }}</nuxt-link>
          <nuxt-link :to="item.btnMore.link" class="rounded text-white border border-esk-gray-32 py-3 px-7 sm:px-10 text-base font-medium">{{ item.btnMore.text }}</nuxt-link>
        </div>
      </div>
      <div class="flex justify-center order-1 xl:order-2">
        <img :src="item.image" alt="" class="max-w-full">
      </div>
    </div>
    <div v-else class="flex flex-col xl:flex-row justify-between items-center py-5 xl:py-0">
      <div class="order-2 xl:order-1">
        <span class="text-sm text-esk-gray-ad font-normal">{{ item.category }}</span>
        <h3 class="text-3xl text-esk-blue-32 font-medium mt-6 mb-4">{{ item.title }}</h3>
        <p class="text-base text-esk-gray-77 font-normal">{{ item.description }} </p>
        <div class="flex justify-self-start mt-8" v-if="item.btnCheckout && item.btnMore">
          <nuxt-link :to="item.btnCheckout.link" type="button" class="rounded text-white bg-esk-red-d6 py-3 px-7 sm:px-10 text-base font-medium mr-4">{{ item.btnCheckout.text }}</nuxt-link>
          <nuxt-link :to="item.btnMore.link" class="rounded text-esk-gray-55 border border-esk-gray-32 py-3 px-7 sm:px-10 text-base font-medium">{{ item.btnMore.text }}</nuxt-link>
        </div>
      </div>
      <div class="flex justify-center order-1 xl:order-2">
        <img :src="item.image" alt="" class="max-w-full">
      </div>
    </div>
      <!-- <img :src="item.image" alt="" class="sm:block hidden"> -->
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['item','type']
}
</script>
