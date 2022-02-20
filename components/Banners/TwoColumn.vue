<template>
  <div
    class="grid lg:grid-cols-2 gap-5 py-8"
    :class="bg == 'gray' ? 'bg-esk-gray-f7' : 'bg-white'">
    <div class="flex justify-center">
      <img height="450px" width="585px" :src="`${$axios.defaults.baseURL.replace('/api/', '/storage/')}${item.image ? item.image : item.img }`" alt="" />
    </div>
    <div class="px-3 lg:px-0">
      <!-- <span class="text-esk-gray-ad text-sm">{{ item.category }}</span> -->
      <h2 class="text-esk-blue-32 md:text-2xl text-xl font-medium mt-8">
        {{ item.title }}
      </h2>
      <div v-html="item.body ? item.body : item.description" class="text-esk-gray-55 my-7 md:text-md text-sm text-light break-words md:pr-5">
        
      </div>
      <div v-if="item.content">
        {{item.content}}
      </div>
      <div v-if="!app" class="flex flex-col lg:flex-row mt-8 items-center">
        <!-- <button class="bg-esk-red-d6 text-white px-10 py-3 lg:mr-4">
          Оставить заявку
        </button> -->
        <nuxt-link
          class="mt-3 lg:mt-0 text-esk-gray-85 flex items-center"
          :to="item.link"
          >Подробнее
          <svg
            class="h-4 w-4 fill-current ml-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
                />
              </g>
            </g>
          </svg>
        </nuxt-link>
      </div>
      <div
        class="flex flex-col items-center sm:items-start sm:flex-row"
        v-if="app"
      >
        <a target="_blank" :href="item.links.appStore"
          ><img class="sm:mr-2" src="/image/app-store.svg" alt=""
        /></a>
        <a target="_blank" :href="item.links.playMarket"
          ><img class="mt-2 sm:mt-0" src="/image/play-market.svg" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "bg", "app"],
  data() {
    return {};
  }
};
</script>
