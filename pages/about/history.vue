<template>
    <div class="mb-32">
        <section v-if="page.banner && page.banner.length > 0" class="mb-16 px-3 bg-esk-gray-f7 py-10 md:py-5">
            <div class="container mx-auto px-8 md:px-20">
                <BannersSingle :item="page.banner[0]" />
            </div>
        </section>
        <section v-if="page.structure" class="container mx-auto px-8 md:px-20 text-esk-blue-32">
            <h3 class="font-medium text-3xl mb-8">{{page.structure.title}}</h3>
            <div v-html="page.structure.description">
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
        meta: [
            {
            hid: "description",
            name: "description",
            content: this.seo.content
            }
        ]
        };
    },
    data(){
        return{
            name: "Some",
            seo: {
                title: "",
                content: ""
            },
            page: {
                 banner: {
                    image: 'media/2021/11/syBxeCymqP3ggBMeMyqMnjmhRq4HKP4y4dB2UX9M.png ',
                    title: 'Политика Под/фт',
                    type: 'type',
                    excerpt: 'Широкий спектр осуществлений банковских операций от перевода средств до оплаты услуг и конвертации валю',
                    url: {
                        primary: '/',
                        primaryText: 'Войти'
                    }
                },
                structure: {
                    body: {
                    }
                }
            }
        }
    },
    computed: {
        ...mapState({
        languageId: state => state.language.languageId
        })
    },
    mounted(){
        this.getData()
    },
    methods:{
         async getData(){
            try{
                let res = await this.$axios(
                `/pages?container_id=52&language_id=${this.languageId}`
                );
                this.seo.title = res.data.title;
                this.seo.content = res.data.description;
                this.page.structure = res.data

                this.page.banner = res.data.banner[0]
            }catch(err){
                console.log(err)
            }
        },
    },
    watch: {
        "$route.query"() {
            this.getData();
        },
        languageId() {
            this.getData();
        }
    },
}
</script>