<template>
  <div class="flex flex-col lg:flex-row rounded-md overflow-hidden shadow-xl">
    <div class="w-full lg:w-5/12 xl:w-4/12">
      <img
        class="md:h-96 lg:h-full w-full object-cover relative z-10"
        :src="
          $axios.defaults.baseURL.replace('/api/', '/storage/') + item.image
        "
        alt="Men explain marketing"
      />
    </div>
    <div
      class="w-full lg:w-7/12 xl:w-8/12 border-t-0 border border-#9CA3AF rounded-b-md  lg:border-0"
    >
      <div class="mt-10 px-6 lg:px-11">
        <span class="text-gray-300">{{ item.category }}</span>
        <h2
          class="font-medium md:text-3xl text-xl my-4 md:my-8 text-esk-dark-grey"
        >
          {{ item.title }}
        </h2>
        <div class="my-8 text-esk-dark-grey">
          <h4 class="font-medium">Основные обязанности:</h4>
          <p
            class="my-1 font-light inline"
            v-for="(require, index) in item.requirements"
            :key="require.id"
          >
            {{
              item.requirements.length === index + 1
                ? require.name + "."
                : require.name + ";"
            }}
          </p>
        </div>
      </div>
      <div
        class="md:flex pb-10 md:justify-between items-end flex-wrap px-6 lg:px-11 lg:mb-0 mb-10 lg:border-t-2 border-#9CA3AF"
      >
        <div class="mt-9">
          <div class="font-medium">Крайний срок подачи анкет:</div>
          <time class="font-light my-3 block">{{ item.active_until }}</time>
          <div class="my-5 md:my-0">
            <div class="font-medium">Регион</div>
            <div class="font-light my-3">
              {{ item.address.substring(0, 40) }}
            </div>
          </div>
        </div>
        <nuxt-link
          :to="{ path: `/vacancies/${item.id}` }"
          class="border border-#9CA3AF focus:outline-none py-3 px-14 text-center text-esk-dark-grey rounded-md"
          >Подробнее</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>
