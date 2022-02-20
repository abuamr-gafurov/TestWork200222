<template>
  <div
    :class="color ? `${color} rounded-md` : 'bg-esk-gray-f7'"
    class="flex relative overflow-hidden items-center flex-col md:flex-row"
  >
    <div class="lg:w-6/12 flex md:justify-center items-center">
      <img
        :class="
          absolute
            ? 'absolute z-10 -right-36 top-5 sm:-top-12 sm:-right-5 lg:right-auto w-bannerW h-bannerH'
            : 'w-52 h-52 md:w-96 md:h-96 object-contain md:mt-0 mt-5'
        "
        :src="
          `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
            item.image
          }`
        "
      />
    </div>
    <div
      :class="
        item.image
          ? 'lg:w-6/12 relative z-10 py-10 lg:py-16 px-10 lg:px-0'
          : 'py-8 md:py-16 px-5 md:px-20'
      "
    >
      <span class="mb-10 text-gray-400 text-sm"> {{ item.body }}</span>
      <h3 class="text-2xl mb-4">{{ item.title }}</h3>
      <ul class="md:leading-10 md:pl-7">
        <li
          v-for="(purpose, index) in item.benefits"
          :key="index"
          class="relative"
        >
          <svg
            class="rounded-full -left-7 top-1 md:top-2 bg-esk-red-d6 mr-2 h-5 w-5 absolute"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M11.1988 5.6001L6.79883 10.0001L4.79883 8.0001"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          ><p v-html="purpose.description ? purpose.description : purpose.value"></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "absolute", "color", "text", "image"]
};
</script>
