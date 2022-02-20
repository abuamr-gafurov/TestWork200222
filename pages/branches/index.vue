<template>
  <div class="container mx-auto px-8 md:px-20">
    <ul class="flex items-center text-esk-blue-32 mt-10 mb-16">
      <li>Главная</li>
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
      <li>Филиалы и ЦБО</li>
    </ul>
    <h3 class="text-3xl text-esk-blue-32 font-medium mb-10">
      Филиалы и центры банковского обслуживания
    </h3>
    <section id="map">
      <yandexMap
        :settings="mapSettings"
        zoom="3"
        style="
          width: 100%;
          max-width: 100%;
          height: 40vh;
          margin: 20px 0 0 0;
        "
        :coords="[point[0] ? point[0] : 1, point[1] ? point[1] : 1]"
      >
        <template v-if="point[0] && point[1]">
          <ymapMarker
            marker-id="111555"
            :coords="[point[0], point[1]]"
          ></ymapMarker>
        </template>
        <template v-else>
          <ymapMarker
            v-for="(item, index) of activeTab === 1 ? filials : cbo"
            :marker-id="index"
            :key="index"
            :coords="[item.latitude, item.longitude]"
          ></ymapMarker>
        </template>
      </yandexMap>
    </section>
    <section id="branches" class="mt-16 mb-10">
      <ul class="text-esk-blue-32 flex text-2xl cursor-pointer mb-10">
        <li @click="activeTab = 'filial'" :class="activeTab == 'filial' ? 'font-medium' : 'opacity-50 font-medium'">
          <nuxt-link to="/branches?activeBrancId=filial" >Филиалы</nuxt-link> 
        </li>
        <li @click="activeTab = 'cbs'" :class="activeTab == 'cbs' ? 'font-medium ml-14' : 'ml-14 opacity-50 font-medium'">
          <nuxt-link to="/branches?activeBrancId=cbs" >ЦБО</nuxt-link>          
        </li>
        <li @click="activeTab = 'atms'" :class="activeTab == 'atms' ? 'font-medium ml-14' : 'ml-14 opacity-50 font-medium'">
          <nuxt-link to="/branches?activeBrancId=atms" >АТМ</nuxt-link>          
        </li>
        <li @click="activeTab = 'pos'" :class="activeTab == 'pos' ? 'font-medium ml-14' : 'ml-14 opacity-50 font-medium'">
          <nuxt-link to="/branches?activeBrancId=pos" >ПОС-терм/QR</nuxt-link>          
        </li>
      </ul>
      <div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardsBranch
            @click="changePoint"
            v-for="(item, index) in page"
            :key="index"
            :item="item"
          />
          <h3 class="opacity-50 font-medium text-3xl" v-if="noneData">
            В данный момент данных нет
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  components: { yandexMap, ymapMarker },
  data() {
    return {
      activeTab: this.$route.query.activeBrancId ? this.$route.query.activeBrancId : 'fillials',
      mapSettings: {
        apiKey: "",
        lang: "ru_RU",
        version: "2.1"
      },
      point: [],
      filials: [],
      cbo: [],
      page: [],
      noneData: false
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    async init(){
      if(this.$route.query.activeBrancId){
        try{
        let res = await this.$axios(`/filials?type=${this.$route.query.activeBrancId}`);
        this.page = res.data.data;
        this.page.length == 0 ? this.noneData = true : this.noneData = false
        }catch(err){
          console.log(err)
        }
      }else{
        try{
          let res = await this.$axios(`/filials?type=filial`);
          this.page = res.data.data;
          this.page.length == 0 ? this.noneData = true : this.noneData = false 
        }catch(err){
          console.log(err)
        }
      }
    },
    changePoint(id) {
      let foundedItem = this.page.find(item => item.id === id);

      this.point = [foundedItem.latitude, foundedItem.longitude];

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },
  watch:{
    "$route.query"() {
      this.activeTab = this.$route.query.activeBrancId
      this.init()
    },
  }
};
</script>
