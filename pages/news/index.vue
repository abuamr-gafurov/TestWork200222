<template>
    <div>
        <section class="mb-16 px-3 bg-esk-gray-f7 py-10 md:py-5">
            <div class="container mx-auto px-8 md:px-20">
                <BannersSingle :item="sliders" />
            </div>
        </section>
        <section class="container mx-auto px-8 md:px-20 mb-32">
            <h3 class="font-bold md:text-4xl text-xl mb-10">Новости и пресс-релизы</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CardsReleases :item="item" :index="index" v-for="(item, index) in news" :key="index" />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sliders: [],
            news:[],
        }
    },
    head() {
    return {
      title: 'Новости'
    }
  },
    mounted(){
        this.init()
    },
    methods: {
    init(){
      let language = localStorage.getItem("lang")
      this.$axios.get(`/news?language_id=${language}`).then(response => {
                    this.sliders = response.data.data[0]
                    this.news = response.data.data
                    response.data.data.map(product => { 
                    product.type_id = 1
                    this.news.push(product)  
                    return product      
                })
            })
        }
    },
}
</script>
