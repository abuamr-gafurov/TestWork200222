<template>
  <div class="bg-esk-gray-f7 rounded-xl overflow-hidden flex flex-col sm:flex-row lg:h-80">
    <div class="lg:w-6/12">
      <img
        class="object-cover h-full w-full"
        v-if="item.type_id == 1"
        :src="
          `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
            item.image
          }`
        "
        :alt="item.title"
      />
    </div>
    <div class="xl:pl-9 px-5 py-6 lg:w-6/12">
      <!-- <span v-if="item.excerpt" class="text-esk-gray-ad text-sm">{{ item.excerpt.length > 30 ? `${item.excerpt.slice(0,33)}...` : item.excerpt  }}</span> -->
      <h3 class="text-esk-blue-32 md:text-2xl text-xl mt-4 font-medium">
        {{ item.title.length > 20 ?  `${item.title.slice(0,20)}...` : item.title}}
      </h3>
      <!-- <time
        class="block my-4 text-esk-gray-ad text-sm"
        datetime="2020-04-10 12:19"
        >{{ item.created_at }}</time
      > -->
      <p class="mb-6 text-esk-gray-55">{{ item.excerpt.length > 30 ? `${item.excerpt.slice(0,30)}...` : item.excerpt }}</p>
      <p v-if="item.descriptions" class="mb-6 md:text-md text-sm text-esk-gray-55">
        {{ item.descriptions }}
      </p>
      <nuxt-link
        :to="{ path: `news/${item.id}` }"
        class=" text-gray-500 text-center"
        >Подробнее</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "firstImage"]
};
</script>
937101965
