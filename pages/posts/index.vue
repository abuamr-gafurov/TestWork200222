<template>
    <div v-if="page.structure" class="container mx-auto px-8 md:px-20 mb-32">
        <ul class="flex items-center text-esk-blue-32 mt-10 mb-16">
            <li>Главная</li>
            <li class="mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="2" viewBox="0 0 13 2" fill="none">
                <path d="M0 1H13" stroke="#323856" stroke-width="1.5"/>
                </svg>
            </li>
            <li>{{page.title}}</li>
        </ul>
        <section class="text-esk-blue-32">
            <h3 class="text-3xl font-medium mb-10">{{page.title}}</h3>
            <div class="text-lg" v-html="page.description">                
            </div>
        </section>
        <section class="mt-20 grid grid-cols-3 gap-3">
            <div v-for="(document, index) in page.structure.doc" :key="index">
                <CardsVerticalDoc type="pdf" :item="document" class="bg-esk-gray-f7" />
            </div>
        </section>
        <section v-if="showForm" class="bg-esk-gray-f7 py-16 px-20 mt-20">
            <FormsFeedBack :comment="true" @send="sendFeedBack"
            @upload="uploadResume" :item="form" />
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
            showForm: true,
            form: {
                phone: "",
                email: "",
                name: "",
                file: "",
                message: ""
            },
            page: {}
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
    methods:{
        async getData(){
            try{
                let res = await this.$axios(
                `/pages?container_id=62&language_id=${this.languageId}`
                );
                this.seo.title = res.data.title;
                this.seo.content = res.data.description;
                this.page = res.data
                console.log(this.page)
            }catch(err){
                console.log(err)
            }
        },
        async uploadResume(files) {
      try {
        let file = files[0];
        let formData = new FormData();

        formData.append("media[]", file);

        let res = await this.$axios.post("/media", formData);

        this.form.file = res.data[0];
      } catch (err) {
        if (err) {
          console.log(err);
          this.$toast
            .error("В процессе отправки резюме произошла ошибка")
            .goAway(2000);
        }
      }
    },

    async sendFeedBack() {
      try {
        let data = {
          application_type_id: 6,
          body: {
            name: {placeholder: 'Фио', value: this.form.name},
            email: {placeholder: 'Почта', value: this.form.email},
            phone: { placeholder: 'Телефон',value: this.form.phone},
            sv_url: { placeholder: 'Файл',value: this.form.file},
            message: {placeholder: 'Комментарий', value: this.form.message}
          }
        };

        await this.$axios.post("/applications", data).then(res => {
            this.$toast.success("Форма отправлена").goAway(2000);
        })        
      } catch (err) {
        if (err) {
          this.$toast.error("Ошибка во время отправки заявки").goAway(2000);
        }
      }
    }
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