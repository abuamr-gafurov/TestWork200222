<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      languageId: (state) => state.language.languageId,
    }),
  },
  data() {
    return {
      language: {
        active: {},
        items: [],
      },
      service: {
        open: false,
        items: [],
      },
      menu: {
        open: false,
        active: {},
        items: [],
      },
      search: {
        value: "",
        open: false,
      },
      activeSelectBox: "",
      activePopup: false,
      contactUs: [
        {
          title: "Приём граждан",
          value: "citizen",
          type: {
            name: "url",
            link: "/citizen-reception",
          },
        },
        {
          title: "Приём жалоб",
          value: "complains",
          type: {
            name: "modal",
            link: false,
          },
          form: {
            application_type_id: 5,
            body: {
              name: {
                placeholder: "ФИО",
                value: "",
              },
              phone: {
                placeholder: "Мобильный номер",
                value: "",
              },
              mail: {
                placeholder: "Электронная почта",
                value: "",
              },
              message: {
                placeholder: "Ваш комментарий",
                value: "",
              },
            },
          },
        },
        {
          title: "Контакт центр",
          value: "contactCenter",
          type: {
            name: "phone",
            link: "tel:+9929888888",
          },
          form: false,
        },
        {
          title: "Написать нам",
          value: "contactUs",
          type: {
            name: "modal",
            link: null,
          },
          form: {
            application_type_id: 6,
            body: {
              name: {
                placeholder: "ФИО",
                value: "",
              },
              phone: {
                placeholder: "Мобильный номер",
                value: "",
              },
              mail: {
                placeholder: "Электронная почта",
                value: "",
              },
              message: {
                placeholder: "Ваш комментарий",
                value: "",
              },
            },
          },
        },
        {
          title: "Заказать звонок",
          value: "orderCall",
          type: {
            name: "modal",
            link: null,
          },
          form: {
            application_type_id: 7,
            body: {
              name: {
                placeholder: "ФИО",
                value: "",
              },
              phone: {
                placeholder: "Мобильный номер",
                value: "",
              },
            },
          },
        },
        {
          title: "Тел доверия НБТ",
          value: "trustNums",
          type: {
            name: "phone",
            link: "tel:+9929888888",
          },
          form: false,
        },
        {
          title: "Комплаенс",
          value: "compleans",
          type: {
            name: "url",
            link: "/posts",
          },
          form: false,
        },
      ],
      activeBranch: "",
      branches: [
        {
          id: 1,
          slug: "filial",
          label: "Филиалы",
        },
        {
          id: 2,
          slug: "cbs",
          label: "ЦБО",
        },
        {
          id: 3,
          slug: "atms",
          label: "АТМ",
        },
        {
          id: 4,
          slug: "pos",
          label: "ПОС-терм/QR",
        },
      ],
    };
  },

  methods: {
    ...mapActions({
      changeLanguageId: "language/changeLanguageId",
    }),

    expandMenu() {
      this.menu.open = !this.menu.open;
    },

    toggleSearchModal() {
      this.search.open = !this.search.open;
    },

    onChangeLang(e) {
      this.changeLanguageId(e.target.value);
    },

    // API
    async getLanguages() {
      try {
        let res = await this.$axios.get("/languages");
        this.language.items = res.data;
        this.language.active = this.language.items[0];

        // after
        this.getMenu();
        this.getServices();
      } catch (err) {
        if (err) console.log(err);
      }
    },

    async getServices() {
      try {
        let res = await this.$axios.get(
          `/services?language_id=${this.languageId}`
        );
        this.service.items = res.data;
      } catch (err) {
        if (err) console.log(err);
      }
    },

    async getMenu() {
      try {
        let res = await this.$axios.get(
          `/menus?language_id=${this.languageId}`
        );

        this.menu.items = res.data;
        this.menu.active = this.menu.items[0];
        console.log(this.menu.items);
      } catch (err) {
        if (err) console.log(err);
      }
    },

    checkSelectBox(type) {
      if (type == "modal") {
        this.activePopup = true;
      } else if (type == "url") {
        this.$router.push(this.activeSelectBox.type.link);
      } else {
        window.open(this.activeSelectBox.type.link);
      }
      console.log(type);
    },

    closePopup(value) {
      this.activePopup = value;
    },

    sendForm(data) {
      try {
        this.$axios.post("/applications", data);
        this.closePopup(false);
      } catch (err) {
        if (err) {
          this.$toast.error("Ошибка во время отправки заявки").goAway(2000);
        }
      }
    },

    setActiveBranch(item) {
      this.$router.push(`/branches?activeBrancId=${item.slug}`);
    },

    searchQ(query) {
      this.$router.push(`/search?q=${query}`);
      this.search.open = false;
    },
  },

  mounted() {
    this.getLanguages();
  },
};
</script>

<template>
  <header class="header">
    <SearchModal
      @close="toggleSearchModal"
      @submit="searchQ"
      :isOpen="search.open"
      v-model="search.value"
    />
    <div class="header__parent">
      <div class="container mx-auto px-8 md:px-20">
        <nav class="header__row lg:flex-row flex-col relative">
          <div class="flex">
            <router-link class="header__logo" to="/?businessType=2">
              <img src="../static/image/logo.svg" alt="Logo" />
            </router-link>

            <ul
              class="header__nav 2xl:w-auto overflow-x-auto md:overflow-hidden"
              :class="menu.open && 'header__nav--expand'"
            >
              <li
                v-for="item of menu.items"
                @click="menu.active = item"
                :key="item.id"
                class="header__item"
              >
                <router-link
                  :to="{
                    path: item.business_entity_id
                      ? item.url + `?businessType=${item.business_entity_id}`
                      : item.url,
                  }"
                  :class="
                    menu.active == item
                      ? 'text-esk-blue-32 font-bold'
                      : 'text-esk-dark-secondary'
                  "
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>

            <div
              :class="menu.open && 'absolute -right-8 lg:right-0'"
              class="header__expand-button hidden md:flex 2xl:hidden"
              @click="expandMenu"
            >
              <template v-if="!menu.open">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  />
                </svg>
              </template>
              <template v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                  />
                </svg>
              </template>
            </div>
          </div>
          <ul
            class="header__tools hidden md:flex"
            :class="menu.open && 'header__tools--hide'"
          >
            <li class="header__tools-item">
              <select
                class="focus:ring-0 w-28 xl:w-auto"
                @change="setActiveBranch(activeBranch)"
                v-model="activeBranch"
                name=""
                id=""
              >
                <option value="" selected disabled>Отделения/АТМ</option>
                <option
                  :value="item"
                  v-for="(item, index) in branches"
                  :key="index"
                >
                  {{ item.label }}
                </option>
              </select>
            </li>
            <li class="header__tools-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g opacity="0.6">
                  <path
                    d="M9.00079 2.84998H6.67578C5.85078 2.84998 5.17578 3.52497 5.17578 4.34997V6.97497V13.725C5.17578 14.55 5.85078 15.225 6.67578 15.225H11.3258C12.1508 15.225 12.8258 14.55 12.8258 13.725V6.97497V4.34997C12.8258 3.52497 12.1508 2.84998 11.3258 2.84998H9.00079Z"
                    stroke="#323856"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.02539 5.09998H9.9754"
                    stroke="#323856"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.1004 12.975C9.1004 13.0302 9.05562 13.075 9.0004 13.075C8.94516 13.075 8.90039 13.0302 8.90039 12.975C8.90039 12.9198 8.94516 12.875 9.0004 12.875C9.05563 12.875 9.1004 12.9198 9.1004 12.975Z"
                    fill="#323856"
                    stroke="#323856"
                  />
                </g>
              </svg>
              <select
                class="focus:ring-0 w-32"
                @change="checkSelectBox(activeSelectBox.type.name)"
                v-model="activeSelectBox"
                name=""
                id=""
              >
                <option value="" selected disabled>Связаться</option>
                <option
                  :value="item"
                  v-for="(item, index) in contactUs"
                  :key="index"
                >
                  {{ item.title }}
                </option>
              </select>
            </li>
            <li class="header__tools-item">
              <img src="../static/image/globe.svg" alt="" />
              <select @change="onChangeLang" class="focus:ring-0">
                <option
                  v-for="lang of language.items"
                  :value="lang.id"
                  :key="lang.id"
                >
                  {{ lang.name }}
                </option>
              </select>
            </li>
            <li class="header__tools-item">
              <router-link
                target="blank"
                class="header__button h-8 px-4 xl:px-8"
                to="/es-online"
              >
                Банк Онлайн
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="header__children">
      <div class="container mx-auto px-8 md:px-20">
        <div class="header__grid">
          <ul class="header__dropdown w-8/12 md:w-auto">
            <li v-for="child of menu.active.children" :key="child.id">
              <router-link
                :to="{
                  path: child.business_entity_id
                    ? child.url + `?businessType=${child.business_entity_id}`
                    : child.url,
                }"
                :class="
                  $route.path.startsWith(child.url)
                    ? 'text-esk-blue-32 font-bold'
                    : 'text-esk-dark-secondary'
                "
              >
                {{ child.name }}
              </router-link>
            </li>
          </ul>

          <ul class="header__controlls">
            <li class="header__controlls-button" @click="toggleSearchModal">
              <img src="../static/image/search.svg" alt="" />
            </li>
            <li
              @click="service.open = !service.open"
              class="header__controlls-button"
            >
              <img src="../static/image/grid.svg" alt="" />

              <div
                class="header__services"
                :class="service.open && 'header__services--expand'"
              >
                <a
                  target="_blank"
                  v-for="item of service.items"
                  :key="item.id"
                  :href="item.url"
                  class="service"
                >
                  <img
                    class="service__icon"
                    :src="item.icon"
                    :alt="item.name"
                  />
                  <h3 class="service__title">{{ item.name }}</h3>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <PopupsContactUs
      :item="activeSelectBox"
      :active="activePopup"
      :closePopup="closePopup"
      :send="sendForm"
    />
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 20;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.header__parent {
  border-bottom: 1px solid #ebecef;
}

.header__grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__button {
  background: #d60051;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.header__logo img {
  margin-right: 15px;
  min-width: 50px;
}

.header__dropdown {
  display: flex;
  align-items: center;
  gap: 30px;
  height: 45px;
  font-size: 14px;
  overflow-x: scroll;
  white-space: nowrap;
  margin: 20px 0 0 0;
  padding: 0;
}

.header__container {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}

.header__tools {
  display: flex;
  align-items: center;
  /* margin-left: auto; */
  opacity: 1;
  transition: 600ms;
  overflow: hidden;
  width: auto;
}

.header__tools--hide {
  opacity: 0;
  transition: 600ms;
  width: 0;
}

.header__controlls {
  display: flex;
  justify-content: flex-end;
  width: 80px;
  gap: 25px;
}

.header__controlls-button {
  cursor: pointer;
  position: relative;
}

.header__services {
  background: #fff;
  position: absolute;
  padding: 20px;
  top: 30px;
  opacity: 0;
  visibility: hidden;
  right: 0;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 400ms;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  white-space: nowrap;
}

.header__services--expand {
  opacity: 1;
  visibility: visible;
  top: 50px;
}

.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
}

.service:hover {
  background: #dfdfdf;
}

.service__icon {
  width: 50px;
}

.service__title {
  font-size: 14px;
  font-weight: 500;
}

select {
  border: none;
  font-size: 14px;
}

.header__tools-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.header__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  padding: 15px 0;
  /* height: 65px; */
}

.header__item a {
  width: 100%;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  left: 80px;
  color: #444;
  overflow: hidden;
  width: 280px;
  transition: 200ms;
}

.header__nav--expand {
  width: 100%;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #fff;
}

.header__dropdown::-webkit-scrollbar {
  width: 14px;
}

.header__dropdown::-webkit-scrollbar-track {
  background: #fff;
}

.header__dropdown::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 20px;
  border: 6px solid #fff;
}

.header__expand-button {
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  cursor: pointer;
  color: #444;
  user-select: none;
  width: 35px;
  height: 35px;
  justify-content: center;
  border-radius: 10px;
  background: #f2f2f2;
}

.header__expand-button svg {
  width: 20px;
  fill: #444;
  cursor: pointer;
}
</style>
