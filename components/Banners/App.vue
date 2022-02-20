<template>
  <div class="flex flex-col lg:flex-row justify-between items-center">
    <div class="lg:w-6/12 flex justify-center">
      <img
        class="max-w-full h-60 w-60 xl:h-96 xl:w-96 my-3 object-contain"
        :src="
          `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${app.image}`
        "
        alt=""
      />
    </div>
    <div class="lg:w-6/12 text-white py-16">
      <span>{{ app.subTitle }}</span>
      <h3 class="text-2xl md:text-5xl font-medium mt-8" v-html="app.title"></h3>
      <div
        v-for="(item, index) in app.ratings"
        :key="index"
        class="mt-8 flex items-end"
      >
        <div :class="index == 0 ? 'border-b pb-4' : ''" class="text-lg mr-8">
          <span class="font-medium block md:w-32">{{ item.title }}</span>
        </div>
        <div>
          <h6 class="font-bold">
            <span class="text-6xl">{{ item.count }}</span> из 5
          </h6>
          <ul class="flex">
            <li class="mr-1" v-for="index in 5" :key="index">
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z"
                  fill="white"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["app"]
};
</script>
