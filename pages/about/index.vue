<template>
  <div v-if="data.structure">
    <section
      :style="`background: ${data.structure.banner.bgColor};`"
      :class="`${
        !data.structure.banner.bgColor &&
        `bg-gradient-to-r from-esk-blue-B9 to-esk-blue-85`
      } mb-16 px-3 pb-20 pt-10 md:py-5`"
    >
      <div class="container mx-auto px-8 md:px-20">
        <BannersSingle
          color="white"
          :about="true"
          :item="data.structure.banner"
        />
      </div>
    </section>
    <section v-if="data.structure" class="container mx-auto px-8 md:px-20">
      <span class="text-esk-blue-32 text-lg">
        {{ data.structure.body.subTitle }}
      </span>
      <h3 class="sm:text-4xl text-esk-blue-32 mt-6 font-medium">
        {{ data.structure.body.title }}
      </h3>
      <div
        v-html="data.structure.body.description"
        class="text-esk-dark-secondary mt-9"
      >
        <!-- {{ data.structure.body.description }} -->
      </div>
    </section>
    <section class="overflow-y-auto">
      <div class="container mx-auto px-8 md:px-20">
        <div class="mt-20 pb-10">
          <div
            class="sm:flex-wrap md:flex-nowrap flex justify-between"
            v-if="data.structure"
          >
            <div
              class="w-32 md:w-auto mr-2 md:mr-0 flex-shrink-0 md:flex-shrink relative"
              v-for="(item, index) in data.structure.benefits"
              :key="index"
            >
              <h3
                class="text-2xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-esk-blue-85 to-blue-400"
              >
                {{ item.title }}
              </h3>
              <p
                class="text-esk-dark-secondary mt-3 md:w-8/12 text-sm lg:text-base"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:flex justify-center relative">
        <div class="w-7/12 flex justify-between right-0 relative">
          <span
            v-for="index in 5"
            :key="index"
            class="w-4 h-4 rounded-full bg-esk-red-d6 block"
          ></span>
          <span
            class="w-full absolute right-0 bg-esk-red-d6 h-1 top-1.5"
          ></span>
        </div>
        <span class="w-5/12 absolute right-0 bg-esk-red-d6 h-1 top-1.5"></span>
      </div>
    </section>
    <section
      :style="`background: ${data.structure.app.bgColor};`"
      :class="`${
        !data.structure.app.bgColor && 'bg-esk-red-d6'
      } mt-16 px-3 py-10 md:py-5`"
    >
      <div class="container mx-auto px-8 md:px-20">
        <BannersApp :app="data.structure.app" />
      </div>
    </section>
    <section class="bg-cover bg-no-repeat bg-about py-16">
      <div class="container mx-auto px-8 md:px-20">
        <BannersValues :item="data.structure.mission" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head() {
    return {
      meta: [{
        hid: "description",
        name: "description",
        }]
      };
    },
  data() {
    return {
      data: {},
      rating: [
        {
          title: "1 млн+",
          description: "Пользователей нам доверяют"
        },
        {
          title: "3000",
          description: "Банкоматов по всей стране"
        },
        {
          title: "28",
          description: "Лет на рынке Таджикистана"
        },
        {
          title: "163",
          description: "Центра банковского обслуживания"
        },
        {
          title: "22",
          description: "Филиала в 3-х регионах"
        }
      ],
      banner: {
        image: "/image/about.png",
        title: "Most safety</br> bank of Tajikistan",
        description: "Овердрафт от Банка",
        btnCheckout: {
          link: "/",
          text: "Оформить"
        },
        btnMore: {
          link: "/",
          text: "Подробнее"
        }
      },
      app: {
        img: "image/slide-1(main).png",
        category: "Лучший мобильный банкинг",
        title: "Мобильное приложение<br> Банк Онлайн",
        rate: [
          {
            platform: "Google Play",
            rateFrom: 4.4,
            rateTo: 5
          },
          {
            platform: "App Store",
            rateFrom: 4.4,
            rateTo: 5
          }
        ]
      },
      bankValues: {
        mission: [
          {
            title: 'Миссия ОАО "123"',
            description:
              "Миссия 123 – содействие экоовышения уровня жизни населения Республики"
          },
          {
            title: 'Видение ОАО "2131"',
            description:
              "Укрепление лояльности клиентов, доверия мировых финансовых итать нашим сотрудникам, акционерам и обществу, в котором мы живем и работаем."
          }
        ],
        vals: [
          {
            icon: "/image/heart.svg",
            title: "Забота и внимание",
            description:
              "Мы стремимся к совершенству, проявляя внимание и заботу о всех наших партнерах – о наших акцион
          },
          {
            icon: "/image/pro.svg",
            title: "Честность и профессионализм",
            description:
              "В нашей работе мы руководствуемся принципами Честности, Прозрачности и Профессионализма."
          },
          {
            icon: "/image/hands.svg",
            title: "Уважение",
            description:
              "Мы относимся с большим уважением ко всем нашим партнерам. Взаимоуважение среди коллег и сотрудников, независимо от занимаемой должности, сверхценно для нас. "
          },
          {
            icon: "/image/bulb.svg",
            title: "Новаторство",
            description:
              "Мы привержены инновационным решениям и технологиям, стимулирующим предложение лучших услуг и продуктов нашим партнерам."
          },
          {
            icon: "/image/plus.svg",
            title: "Надежность",
            description:
              "Для нас быть надежным партнером означает, что мы не поступимся нашими ценностями и честью ради краткосрочной выгоды. "
          }
        ]
      }
    };
  },
  computed: {
    ...mapState({
    languageId: state => state.language.languageId
  })
  },
  watch: {
    "$route.query"() {
        this.getPage();
        },
    languageId() {
      this.getPage();
    }
  },
  mounted() {
    this.getPage();
  },
  methods: {
    async getPage() {
      try {
        let res = await this.$axios(
          `/pages?container_id=42&language_id=${this.languageId}`
        );
        this.data = res.data;
      } catch (err) {
        if (err) console.log(err);
      }
    },
  }
}
</script>
