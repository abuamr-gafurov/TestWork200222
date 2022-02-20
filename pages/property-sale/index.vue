<template>
  <div
    v-if="sales && sales[0]"
    class="container mx-auto px-8 md:px-20 mb-32"
  >
    <ul
      class="flex text-lg items-center flex-wrap font-normal text-esk-blue-32 mt-11 mb-16"
    >
      <li class="">
        <nuxt-link to="/">Главная</nuxt-link>
      </li>
      <li class="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="2"
          viewBox="0 0 13 2"
          fill="none"
        >
          <path d="M0 1H13" stroke="#323856" stroke-width="1.5"></path>
        </svg>
      </li>
      <li>
        <nuxt-link to="/">Продажа имущества</nuxt-link>
      </li>
    </ul>
    <section>
      <div
        class="grid-cols-12 text-center mb-12 text-esk-gray-f6 hidden lg:grid"
      >
        <div class="col-span-2">Регион</div>
        <div class="col-span-3">Наименование</div>
        <div class="col-span-4">Адрес имущества</div>
        <div class="col-span-1">Стоимость</div>
        <div class="col-span-2">Телефон для связи</div>
      </div>
      <div
        v-for="(item, index) in sales"
        :key="index"
        class="grid border-esk-gray-f4 border mb-7 rounded-md lg:text-center lg:rounded-0 lg:mb-0 lg:border-0 lg:grid-cols-12"
      >
        <div
          class="lg:col-span-2 py-2 px-5 lg:px-1 bg-esk-purple-f7 font-medium"
        >
          {{ item.region }}
        </div>
        <div class="lg:col-span-3 py-2 pl-5 pr-5 lg:px-1 font-medium">
          {{ item.excerpt }}
        </div>
        <div
          class="lg:col-span-4 py-2 pl-5 pr-5 lg:px-1 bg-esk-purple-f7 font-medium text-left"
        >
          {{ item.address }}
        </div>
        <div class="lg:col-span-1 py-2 px-5 lg:px-1 font-medium">
          {{ item.price }} TJS
        </div>
        <div
          class="lg:col-span-2 font-medium py-2 px-5 lg:px-1 bg-esk-purple-f7"
        >
          {{ item.phone }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: this.seo.title,
      meta: [{ name: "description", content: this.seo.description }]
    };
  },
  data() {
    return {
      seo: {
        title: "",
        description: ""
      },
      sales: [],
      data: {}
    };
  },

  computed: mapState({
    languageId: state => state.language.languageId
  }),

  methods: {
    async getSale() {
      try {
        let res = await this.$axios(`/estates?language_id=${this.languageId}`);

        this.sales = res.data;
      } catch (err) {
        if (err) console.log(err);
      }
    },

    async getPage() {
      let res = await this.$axios(`/pages?language_id=${this.languageId}`);

      this.seo.title = res.data.title;
      this.seo.description = res.data.description;

      this.data = res.data;
    }
  },

  watch: {
    languageId() {
      this.getSale();
      this.getPage();
    }
  },

  mounted() {
    this.getSale();
    this.getPage();
  }
};
</script>
