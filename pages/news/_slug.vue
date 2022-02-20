<template>
  <div
    v-if="post && post.title"
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
        <nuxt-link to="/news">Новости</nuxt-link>
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
        <span>{{ post.title }}</span>
      </li>
    </ul>
    <article class="bg-esk-gray-f7 py-8 px-5 md:px-28 text-esk-blue-32">
      <h2 class="font-medium text-2xl md:text-4xl mb-10">
        {{ post.title }}
      </h2>
      <time class="flex text-lg items-center"
        ><img class="mr-2" src="/image/calender.svg" :alt="post.title" />
        {{ post.published_at ? post.published_at.substring(0, 10) : post.created_at.substring(0, 10) }}
      </time>
      <div class="my-8">
        <img
          class="float-left object-cover h-60 w-full md:w-80 mr-4 mb-3 md:mb-0"
          :src="
            `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
              post.image
            }`
          "
          alt="postIMage"
        />
        <div class="mt-3 mb-3" v-html="post.description"></div>
        <div class="clear-both"></div>
      </div>
      <div class="flex flex-col md:flex-row justify-end items-center">
        <nuxt-link
          class="text-white bg-esk-red-d6 px-9 py-3 rounded-md mt-8 md:mt-0"
          to="/news"
          >К новостям</nuxt-link
        >
      </div>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // meta: ['#Новости','#Финансы','#Доход'],
      post: {}
    };
  },

  mounted() {
    this.getPost();
  },

  methods: {
    async getPost() {
      try {
        let postId = this.$route.params.slug;
        let res = await this.$axios(`/news/${postId}`);

        this.post = res.data.data;
      } catch (err) {
        if (err) console.log(err);
      }
    }
  }
};
</script>
