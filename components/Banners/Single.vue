<template>
  <div class="flex justify-between relative items-center" >
    <div v-if="!about" class="relative z-10 w-8/12 py-28">
      <!-- <span
        class="text-sm font-normal"
        :class="color == 'white' ? 'text-white' : 'text-esk-gray-ad'"
        >{{ item.type }}</span> -->
      <h3
        class="text-2xl md:text-3xl font-medium mt-6 mb-4"
        :class="color == 'white' ? 'text-white' : 'text-esk-blue-32'"
      >
        {{ item.title }}
      </h3>
        <div v-html="item.description"
        class="text-base font-normal"
        :class="color == 'white' ? 'text-white' : 'text-esk-gray-77'"
      >
      </div>
      <div class="flex justify-self-start mt-8">
        <nuxt-link
          :to="item.url.primary"
          v-if="item.url"
          type="button"
          class="rounded text-white bg-esk-red-d6 py-3 px-7 sm:px-10 text-base font-medium mr-4"
          >{{ item.url.primaryText }}</nuxt-link
        >
        <!-- <nuxt-link
          :to="item.url.secondary"
          v-if="item.url"
          class="rounded border border-esk-gray-32 py-3 px-7 sm:px-10 text-base font-medium"
          :class="color == 'white' ? 'text-white' : 'text-esk-gray-55'"
          >{{ item.url.secondaryText }}</nuxt-link
        > -->
      </div>
    </div>
    <div class="w-8/12 pb-24 pt-16 lg:py-20 text-white" v-else>
      <h3 class="text-2xl md:text-7xl font-medium mt-6 mb-4">
        {{ item.title }}
      </h3>
      <div class="md:mt-12 md:text-white text-esk-gray-e6 text-lg" v-if="item.description">
        {{ item.description }}
      </div>
      <img
        class="md:mt-24 md:static absolute -bottom-6 w-96 md:w-auto"
        :src="
          `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
            item.images[1]
          }`
        "
        :alt="item.title"
      />
    </div>

    <div class="w-8/12 pb-24 pt-16 lg:py-20 text-white" v-if="type === 'app'">
      <h3 class="text-2xl md:text-7xl font-medium mt-6 mb-4">
        {{ item.title }}
      </h3>
      <div class="md:mt-12 md:text-white text-esk-gray-e6 text-lg" v-if="item.description">
        {{ item.description }}
      </div>
      <img
        class="md:mt-24 md:static absolute -bottom-6 w-96 md:w-auto"
        :src="
          `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
            item.images[1]
          }`
        "
        :alt="item.title"
      />
    </div>

    <img
      v-if="!about"
      :src="
        `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${item.image}`
      "
      :alt="item.title"
      class="w-52 sm:w-60 md:w-80 lg:w-96 xl:w-bannerW xl:h-bannerH xl:max-w-full absolute lg:static -right-8 sm:-right-12 z-10 object-contain"
    />
    <img
      v-else
      :src="
        `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
          item.images[0]
        }`
      "
      :alt="item.title"
      class="w-52 sm:w-60 md:w-80 lg:w-96 xl:h-bannerHSecondary xl:w-bannerWSecondary absolute lg:relative -right-8 sm:-right-12 lg:-left-16 lg:right-0 z-10 object-contain"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["item", "color", "about", "addForm", "type"]
};
</script>
