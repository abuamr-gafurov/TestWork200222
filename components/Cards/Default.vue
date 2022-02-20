<template>
  <div class="flex flex-col gap-2">
    <div
      v-if="type === 'card' || type === undefined"
      class="flex flex-col lg:flex-row shadow-navCustom lg:shdow-0 rounded-md overflow-hidden"
    >
      <div class="w-full lg:w-7/12">
        <img
          class="md:h-96 w-full h-96 object-cover"
          :src="
            `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
              item.images[0]
            }`
          "
          :alt="item.title"
        />
      </div>
      <div class="w-full lg:w-7/12">
        <div class="mt-10 px-6 lg:px-11">
          <span v-if="item.type_id == 3" class="text-gray-300"
            >Дебетовая карта</span
          >
          <h3
            class="font-medium md:text-3xl text-2xl my-4 md:my-8 text-esk-dark-grey"
          >
            {{ item.title }}
          </h3>
          <div
            class="my-8 text-esk-dark-grey flex lg:justify-between lg:flex-wrap"
          >
            <div
              v-for="(data, index) in item.table"
              :key="index"
              class="w-6/12 xl:w-auto "
            >
              <span class="md:text-md text-sm">{{ data.title }}</span>
              <h3 class="md:text-3xl font-medium text-esk-blue-35">
                {{ data.price }}
              </h3>
              <span class="md:text-md text-sm">{{ data.secondary }}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-between px-6 md:px-10 flex-wrap">
          <div v-if="item.price" class="flex flex-col md:flex-1">
            <span>Сумма</span>
            <b class="text-3xl text-esk-blue-35">{{ item.price }}</b>
            <span>Сомони</span>
          </div>
          <div v-if="item.validity" class="flex flex-col md:flex-1">
            <span>Срок действия</span>
            <b class="text-3xl text-esk-blue-35">{{ item.validity }}</b>
            <span>Месяцев</span>
          </div>
          <div v-if="item.percent" class="flex flex-col md:flex-1">
            <span>Доход до</span>
            <b class="text-3xl text-esk-blue-35">{{ item.percent }}%</b>
            <span>Годовых</span>
          </div>
        </div>
        <div
          class="md:px-11 px-8 mt-16 border-t border-esk-blue-sky pt-6 flex justify-end"
        >
          <nuxt-link
            class="md:mr-7 mr-6 md:py-3 text-esk-gray-80 md:text-md  text-sm"
            :to="{ path: `/cards/${item.id}` }"
            >Подробнее</nuxt-link
          >
          <!-- <button
            @click="$emit('clickCredit', item.id)"
            class="bg-esk-blue-35 text-white md:text-md text-sm px-2 md:px-14 md:py-3 py-2 focus:outline-none rounded-md"
          >
            Выбрать
          </button> -->
        </div>
      </div>
    </div>
    <div
      v-if="type === 'credit' || type === undefined"
      class="flex flex-col lg:flex-row shadow-navCustom lg:shdow-0 rounded-md overflow-hidden"
    >
      <div class="w-full lg:w-7/12">
        <img
          class="md:h-96 w-full h-96 object-cover"
          :src="
            `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
              item.images[0]
            }`
          "
          :alt="item.title"
        />
      </div>
      <div class="w-full lg:w-7/12">
        <div class="mt-10 px-6 lg:px-11">
          <span v-if="item.type_id == 3" class="text-gray-300"
            >Дебетовая карта</span
          >
          <h3
            class="font-medium md:text-3xl text-2xl my-4 md:my-8 text-esk-dark-grey"
          >
            {{ item.title }}
          </h3>
          <div
            class="my-8 text-esk-dark-grey flex lg:justify-between lg:flex-wrap"
          >
            <div
              v-for="(data, index) in item.table"
              :key="index"
              class="w-6/12 xl:w-auto "
            >
              <span class="md:text-md text-sm">{{ data.title }}</span>
              <h3 class="md:text-3xl font-medium text-esk-blue-35">
                {{ data.price }}
              </h3>
              <span class="md:text-md text-sm">{{ data.secondary }}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-between px-6 md:px-10 flex-wrap">
          <div class="flex flex-col">
            <span>Максимальная сумма</span>
            <b class="text-3xl text-esk-blue-35">{{ item.max_amount }}</b>
            <span>Сомони</span>
          </div>
          <div 
          v-if="item.min_amount"
          class="flex flex-col">
            <span>Минимальная сумма</span>
            <b class="text-3xl text-esk-blue-35">{{ item.min_amount }}</b>
            <span>Сомони</span>
          </div>
          <div class="flex flex-col">
            <span>До</span>
            <b class="text-3xl text-esk-blue-35">{{ item.percent }}%</b>
            <span>Годовых</span>
          </div>
        </div>
        <div
          class="md:px-11 px-8 mt-16 border-t border-esk-blue-sky pt-6 flex justify-end"
        >
          <nuxt-link
            class="md:mr-7 mr-6 md:py-3 text-esk-gray-80 md:text-md  text-sm"
            :to="{ path: `/credits/${item.id}` }"
            >Подробнее</nuxt-link
          >
          <button
            @click="$emit('clickCredit', item.id)"
            class="bg-esk-blue-35 text-sm text-white md:text-md text-sm px-2 md:px-14 md:py-3 py-2 focus:outline-none rounded-md"
          >
            Выбрать
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="type === 'deposit'"
      class="flex flex-col lg:flex-row shadow-navCustom lg:shdow-0 rounded-md overflow-hidden"
    >
      <div class="w-full lg:w-7/12">
        <img
          class="md:h-96 w-full h-96 object-cover"
          :src="
            `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
              item.images[0]
            }`
          "
          :alt="item.title"
        />
      </div>
      <div class="w-full lg:w-10/12">
        <div class="mt-10 px-6 lg:px-11">
          <span v-if="item.type_id == 3" class="text-gray-300"
            >Дебетовая карта</span
          >
          <h3
            class="font-medium md:text-3xl text-2xl my-4 md:my-8 text-esk-dark-grey"
          >
            {{ item.title }}
          </h3>
          <div
            class="my-8 text-esk-dark-grey flex lg:justify-between lg:flex-wrap"
          >
            <div
              v-for="(data, index) in item.table"
              :key="index"
              class="w-6/12 xl:w-auto "
            >
              <span class="md:text-md text-sm">{{ data.title }}</span>
              <h3 class="md:text-3xl font-medium text-esk-blue-35">
                {{ data.price }}
              </h3>
              <span class="md:text-md text-sm">{{ data.secondary }}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-between px-6 md:px-10 flex-wrap">
          <div
          v-if="item.min_tjs_amount"
          class="flex flex-col w-6/12 md:w-auto md:flex-1">
            <span>Минимальная сумма</span>
            <b class="text-3xl text-esk-blue-35">{{ item.min_tjs_amount }}</b>
            <span>Сомони</span>
          </div>
          <div 
          v-if="item.min_usd_amount"
          class="flex flex-col w-6/12 md:w-auto md:flex-1">
            <span>Минимальная сумма</span>
            <b class="text-3xl text-esk-blue-35">{{ item.min_usd_amount }}</b>
            <span>Доллары</span>
          </div>
          <div 
          v-if="item.min_tjs_percent"
          class="flex flex-col w-6/12 md:w-auto md:flex-1">
            <span>От</span>
            <b class="text-3xl text-esk-blue-35">{{ item.min_tjs_percent }}%</b>
            <span>Сомони</span>
          </div>
          <div 
          v-if="item.min_usd_percent"
          class="flex flex-col w-6/12 md:w-auto md:flex-1">
            <span>От</span>
            <b class="text-3xl text-esk-blue-35">{{ item.min_usd_percent }}%</b>
            <span>Доллары</span>
          </div>
        </div>
        <div
          class="md:px-11 px-8 mt-16 border-t border-esk-blue-sky pt-6 flex justify-end pb-5"
        >
          <nuxt-link
            class="md:mr-7 mr-6 md:py-3 text-esk-gray-80 md:text-md text-sm flex items-center"
            :to="{ path: `/deposits/${item.id}` }"
            >Подробнее</nuxt-link
          >
          <button
            @click="$emit('clickDeposit', item.id)"
            class="bg-esk-blue-35 text-white md:text-md text-sm px-2 py-2  md:px-14 md:py-3 focus:outline-none rounded-md"
          >
            Выбрать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "type"]
};
</script>
