<template>
  <div class="mb-32">
    <section class="mb-16 px-3 bg-esk-gray-f7 py-10 md:py-5">
      <div
        v-if="data.banner && data.banner[0]"
        class="container mx-auto px-8 md:px-20"
      >
        <BannersSingle :item="data.banner[0]" :addForm="true" />
      </div>
    </section>
    <section class="container mx-auto px-8 md:px-20 text-esk-blue-32">
      <h3 class="md:text-3xl text-xl font-medium mb-10" v-if="data.structure">
        {{ data.structure.body.title }}
      </h3>
      <div v-html="data.structure.body.description" class="mb-4 md:text-md text-sm" v-if="data.structure">
        <!-- {{ data.structure.body.description }} -->
      </div>
      <template v-if="data.structure">
        <BannersPositiveTraits
          class="mt-16"
          :item="data.structure.body.banner"
          :absolute="false"
        />
      </template>
    </section>
    <section
      v-if="data.favorites"
      class="container mx-auto px-8 md:px-20 mt-28 mb-8"
    >
      <h3 class="text-esk-blue-32 md:text-3xl text-xl mb-8 font-medium">
        Рекомендуемые продукты
      </h3>
      <div class="grid lg:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-7">
        <CardsProduct
          type="cards"
          :item="item"
          v-for="(item, index) in data.favorites.cards"
          :key="index"
        />
        <CardsProduct
          type="credits"
          :item="item"
          v-for="(item, index) in data.favorites.credits"
          :key="index"
        />
        <CardsProduct
          type="deposits"
          :item="item"
          v-for="(item, index) in data.favorites.deposit"
          :key="index"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: this.data.title || "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.description || ""
        }
      ]
    };
  },

  computed: {
    ...mapState({
      languageId: state => state.language.languageId
    })
  },

  watch: {
    languageId() {
      this.getPage();
    }
  },

  methods: {
    async getPage() {
      try {
        let res = await this.$axios(
          `/pages?container_id=5&language_id=${this.languageId}`
        );

        this.data = res.data;
      } catch (err) {
        if (err) console.log(err);
      }
    }
  },

  mounted() {
    this.getPage();
  },

  data() {
    return {
      data: {}
    };
  }
};
</script>
