<template>
  <div>
    <div
      v-if="type === 'credit'"
      class="flex flex-wrap justify-between md:items-center w-full py-7 lg:py-10 px-8 lg:px-14 text-esk-dark-grey border border-#EFEFEF rounded-md"
    >
      <div class="w-6/12 xl:w-auto">
        <span>Минимальная сумма</span>
        <h3 class="text-3xl font-medium text-esk-blue-35">
          {{ item.min_amount }}
        </h3>
        <span>Сомони</span>
      </div>
      <div class="w-6/12 xl:w-auto">
        <span>Максимальная сумма</span>
        <h3 class="text-3xl font-medium text-esk-blue-35">
          {{ item.max_amount }}
        </h3>
        <span>Сомони</span>
      </div>
      <div class="w-6/12 xl:w-auto">
        <span>До</span>
        <h3 class="text-3xl font-medium text-esk-blue-35">{{ item.percent }}%</h3>
        <span>Годовых</span>
      </div>
      <div class="w-6/12 xl:w-auto">
        <span>Срок</span>
        <h3 class="text-3xl font-medium text-esk-blue-35">{{ item.term }}</h3>
        <span>Месяцев</span>
      </div>
      <div class="w-full md:w-auto mt-8 lg:mt-0">
        <router-link to="#calculator"
          class="text-xl bg-esk-red-d6 text-white px-16 py-3 rounded-md focus:outline-none xl:w-auto w-full"
        >
          Оформить
        </router-link>
      </div>
    </div>
    <div v-else-if="type === 'card'" class="flex flex-wrap md:items-center w-full py-7 lg:py-10 px-8 lg:px-14 text-esk-dark-grey border border-#EFEFEF rounded-md">
      <div class="flex flex-col flex-1">
        <span>Сумма</span>
        <b class="text-3xl text-esk-blue-35">{{ item.price }}</b>
        <span>Сомони</span>
      </div>
      <div class="flex flex-col flex-1">
        <span>Срок действия</span>
        <b class="text-3xl text-esk-blue-35">{{ item.validity }}</b>
        <span>Месяцев</span>
      </div>
      <div class="flex flex-col flex-1">
        <span>Доход до</span>
        <b class="text-3xl text-esk-blue-35">{{ item.percent }}%</b>
        <span>Годовых</span>
      </div>
      <div class="flex-1 flex justify-center">
        <button
          @click="$emit('open')"
          class="text-xl bg-esk-red-d6 text-white px-8 py-3 rounded-md focus:outline-none xl:w-auto w-full"
        >
          Оставить заявку
        </button>
      </div>
    </div>
    <div
      v-else
      class="flex flex-wrap justify-between md:items-center w-full py-7 lg:py-10 px-8 lg:px-14 text-esk-dark-grey border border-#EFEFEF rounded-md"
    >
      <div class="w-6/12 xl:w-auto">
        <span>Минимальная сумма</span>
        <h3 class="text-3xl font-medium text-esk-blue-35">
          {{ item.min_tjs_amount }}
        </h3>
        <span>Сомони</span>
      </div>
      <div class="w-6/12 xl:w-auto">
        <span>Минимальная сумма</span>
        <h3 class="text-3xl font-medium text-esk-blue-35">
          {{ item.min_usd_amount }}
        </h3>
        <span>Долларов</span>
      </div>

      <div class="w-6/12 xl:w-auto">
        <span>От</span>
        <h3 class="text-3xl font-medium text-esk-blue-35">
          {{ item.min_tjs_percent }}%
        </h3>
        <span>Сомони годовых</span>
      </div>
      <div class="w-6/12 xl:w-auto">
        <span>От</span>
        <h3 class="text-3xl font-medium text-esk-blue-35">
          {{ item.min_usd_percent }}%
        </h3>
        <span>Долларов годовых</span>
      </div>

      <div class="w-full md:w-auto mt-8 lg:mt-0">
        <router-link to="#calculator"
          class="text-xl bg-esk-red-d6 text-white px-16 py-3 rounded-md focus:outline-none xl:w-auto w-full"
        >
          Оформить
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "type"],
  methods:{
    scrollMeTo(refName) {
      var element = this.$els[refName];
      element.scrollIntoView();
    }
  }
};
</script>
