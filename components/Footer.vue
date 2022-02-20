<template>
  <footer class="text-white">
    <div class="bg-esk-blue-32">
      <div class="container mx-auto px-8 md:px-20 pt-10">
        <div class="grid grid-cols-3">
          <div class="col-span-3 gap-4 md:col-span-2 grid  md:grid-cols-2">
            <div class="col-auto">
              <h3
                @click="activeService = !activeService"
                class="font-medium text-xl flex items-center justify-between"
              >
                Услуги
                <svg
                  class="block md:hidden"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                    fill="#fff"
                  />
                </svg>
              </h3>
              <ul class="mt-6 hidden md:block">
                <li
                  v-for="(item, index) in footer.services"
                  :key="index"
                  class="font-light text-sm my-2"
                >
                  <nuxt-link :to="item.link">{{ item.body }}</nuxt-link>
                </li>
              </ul>
              <ul v-if="activeService" class="mt-6 block md:hidden">
                <li
                  v-for="(item, index) in footer.services"
                  :key="index"
                  class="font-light text-sm my-3"
                >
                  <nuxt-link :to="item.link">{{ item.body }}</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="col-auto">
              <h3
                @click="addonActive = !addonActive"
                class="font-medium text-xl flex items-center justify-between"
              >
                Объявления
                <svg
                  class="block md:hidden"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                    fill="#fff"
                  />
                </svg>
              </h3>
              <ul class="mt-6 hidden md:block">
                <li
                  v-for="(item, index) in footer.addons"
                  :key="index"
                  class="font-light text-sm my-2"
                >
                  <nuxt-link :to="item.link">{{ item.body }}</nuxt-link>
                </li>
              </ul>
              <ul v-if="addonActive" class="mt-6 block md:hidden">
                <li
                  v-for="(item, index) in footer.addons"
                  :key="index"
                  class="font-light text-sm my-3"
                >
                  <nuxt-link :to="item.link">{{ item.body }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div v-if="footer.mailer" class="col-span-3 md:col-auto my-4 md:my-0">
            <h3 class="font-medium text-xl">{{footer.mailer.title}}</h3>

            <div class="mt-6">
              <p class="text-sm font-normal">
                {{footer.mailer.body}}
              </p>
              <div class="rounded bg-esk-blue-40 flex pl-5 pr-2 py-2 mt-3">
                <input
                  v-model="email"
                  type="email"
                  placeholder="Ваша почта"
                  class="bg-transparent border-0 p-0 border-r outline-none font-normal text-sm placeholder-text-esk-blue-32 w-full focus:outline-none focus:border-gray-500 focus:ring-0"
                />
                <button
                  @click="subscribeUser"
                  type="submit"
                  class="font-medium text-sm ml-2 px-4 py-3 outline-none"
                >
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row order-2 md:order-none justify-between w-full border-t border-b border-esk-blue-40 py-5 my-5"
        >
          <ul class="flex flex-wrap items-center w-full lg:w-8/12">
            <li v-for="(item,index) in footer.bottomAddons" :key="index" class="font-normal text-sm md:mr-8 mr-2">
              <nuxt-link :to="item.url">
                {{item.text}}
              </nuxt-link>
            </li>
          </ul>
          <div v-if="footer.contscts" class="w-full lg:w-4/12 flex justify-between">
            <div >
              <h3 class="font-bold md:text-base text-sm">
                <a href="tel:+992000000000">{{footer.contscts.contactCenter.value}}</a>
              </h3>
              <p class="font-normal text-base">{{footer.contscts.contactCenter.text}}</p>
            </div>
            <div>
              <h3 class="font-bold md:text-base text-sm">
                <a href="tel:+992000000000">{{footer.contscts.managementCenter.value}}</a>
              </h3>
              <p class="font-normal text-base">{{footer.contscts.managementCenter.text}}</p>
            </div>
          </div>
        </div>
        <div v-if="footer.description" class="mt-5">
          <h3 class="font-medium text-xl">{{footer.description.title}}</h3>
          <div v-html="footer.description.body" class="text-xs font-light whitespace-pre-line">
          </div>
        </div>
        <div class="pb-4 pt-6">
          <ul class="flex justify-between md:justify-end flex-wrap">
            <li v-for="(item,index) in footer.socialIcons" :key="index" class="md:ml-6 mb-4">
              <a target="_blank" :href="item.link">
                <img
                  :src="`${$axios.defaults.baseURL.replace('/api/', '/storage/')}${item.icon}`"
                  class="w-8 h-8"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-esk-blue-2E">
      <div
        class="flex justify-between py-6 container mx-auto px-8 md:px-20"
      >
        <div>
          <p class="font-normal text-sm">
            © {{ currentDate.getFullYear() }} {{footer.rights}}
          </p>
        </div>
        <div>
          <img src="/image/livo.svg" alt="livo" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      languageId: state => state.language.languageId
    })
  },
  data() {
    return {
      email: "",
      activeService: false,
      addonActive: false,
      footer:{},
      services: [
        {
          body: "Юридическим лицам",
          link: "/"
        },
        {
          body: "Физическим лицам",
          link: "/"
        },
        {
          body: "Финансовым институтам",
          link: "/financial-institutes"
        },
        {
          body: "Еще...",
          link: "/"
        }
      ],
      addons: [
        {
          body: "Вакансии",
          link: "/vacancies"
        },
        {
          body: "Тендеры",
          link: "/"
        },
        {
          body: "Продажа имущества",
          link: "/property-sale"
        },
        {
          body: "Новости",
          link: "/news"
        }
      ],
      currentDate: new Date()
    };
  },
  mounted(){
    this.getFooter()
  },
  watch: {
    languageId() {
      this.getFooter();
    }
  },
  methods: {
    async getFooter(){
      try {
        let businessType = this.$route.query.businessType || 2;

        let res = await this.$axios(
            `/pages?container_id=67&language_id=${this.languageId}&business_entities_id=${businessType}`
          );
          this.footer = res.data.structure;
          // console.log(res.data);
      } catch (err) {
        if (err) console.log(err);
      }
    },

    async subscribeUser() {
      try {
        await this.$axios.post("/subscribe", {
          email: this.email,
          language_id: 1
        });
        this.$toast.success("Вы успешно подписались!").goAway(1500);
        this.email = "";
      } catch (err) {
        if (err) {
          this.$toast.error(err.response.data.errors.email[0]).goAway(1500);
        }
      }
    }
  }
};
</script>
