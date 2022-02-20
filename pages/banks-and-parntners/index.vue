<template>
    <main class="mb-16">
        <section class="my-16 container mx-auto px-8 md:px-20">
            <h3 class="text-esk-blue-32 md:text-3xl text-xl font-medium pb-8">Банкам партнерам</h3>
            <BannersTwoColumn :item='pageData.forBanks' v-if="pageData.forBanks"/>
        </section>
        <section v-if="page.banner && page.banner.length > 0" id="banner" class="my-16 px-3 bg-esk-gray-f7 py-10 md:py-5 overflow-hidden">
            <div class="container mx-auto px-8 md:px-20">
                <BannersSingle :item="page.banner[0]" />
            </div>
        </section>
        <section v-if="page.structure && page.structure.body" class="container mx-auto px-8 md:px-20">
            <h3 class="font-bold text-4xl mb-10 text-esk-blue-32">
                {{ page.structure.body.title}}
            </h3>
            <div v-html="page.structure.body.description">

            </div>
        </section>
    </main>
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
    data() {
        return{
            name: "Some",
            seo: {
                title: "",
                content: ""
            },
            page:{                
            },
            pageData: {}
        }
    },
    mounted(){
        this.getData()
        this.getPage()
    },
    computed: {
        ...mapState({
        languageId: state => state.language.languageId
        })
    },
    methods: {
        async getData(){
            try{
                let res = await this.$axios(
                `/pages?container_id=54&language_id=${this.languageId}`
                );
                this.seo.title = res.data.title;
                this.seo.content = res.data.description;
                this.page = res.data
                console.log(this.page)
            }catch(err){
                console.log(err)
            }
        },
        async getPage() {
            try {
                let res = await this.$axios(
                `/pages?container_id=43&language_id=${this.languageId}`
                );
                this.pageData = res.data.structure
                console.log(res.data)
            } catch (err) {
                if (err) console.log(err);
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