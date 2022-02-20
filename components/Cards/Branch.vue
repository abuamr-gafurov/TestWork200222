<template>
  <div class="border border-gray-100 p-6 md:px-12 md:py-9">
    <h5
      v-if="type === 'branches' || type === undefined"
      class="text-lg flex gap-2 items-center"
    >
      <img class="mr-2" src="/image/building.svg" alt="" /> {{ item.location }}
    </h5>
    <h5 v-else class="text-lg flex gap-2 items-center">
      <img class="mr-2" src="/image/card.svg" alt="" /> {{ item.location }}
    </h5>
    <span class="text-gray-300 font-light mt-4 flex">{{ item.address }}</span>
    <div class="flex flex-col my-6 leading-8">
      <time class="font-medium" v-if="type === 'branches' || type === undefined"
        >Работает: c {{ item.work_time.start }}</time
      >
      <span
        class="font-medium flex break-words"
        v-if="type === 'branches' || type === undefined"
        >Тел.: {{ item.phone }}
      </span>
    </div>
    <div>
      <ul class="leading-8">
        <li
          class="flex flex-wrap gap-2 items-center"
          v-if="item.individual_service"
        >
          <img src="image/user.svg" alt="" /> Обслуживание частных лиц
        </li>
        <li
          class="flex flex-wrap gap-2 items-center"
          v-if="item.entity_service"
        >
          <img src="/image/building-service.svg" alt="" /> Обслуживание
          юридических лиц
        </li>
      </ul>
    </div>
    <button
      @click="clickSome(item.id)"
      class="text-esk-blue-35 mt-11 focus:outline-none"
    >
      См. на карте 🡢
    </button>
  </div>
</template>
<script>
export default {
  props: ["item", "type"],
  methods: {
    clickSome(id) {
      this.$emit("click", id);
    }
  }
};
</script>
