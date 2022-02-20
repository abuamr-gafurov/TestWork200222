<template>
    <main class="mb-32 mt-8">
        <section v-if="page.banner && page.banner.length > 0" id="banner" class="mb-16 px-3 bg-esk-gray-f7 py-10 md:py-5 overflow-hidden">
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
            }
        }
    },
    mounted(){
        this.getData()
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
                `/pages?container_id=60&language_id=${this.languageId}`
                );
                this.seo.title = res.data.title;
                this.seo.content = res.data.description;
                this.page = res.data
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