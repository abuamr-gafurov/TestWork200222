<template>
    <VueSlickCarousel id="mainSlider" v-if="item" v-bind="settings">
        <div class="overflow-hidden" :style="{ background: slider.bgColor}" v-for="(slider,index) in item" :key="index">
            <div class="container mx-auto px-8 md:px-20 relative">
                <div class="flex justify-between items-center py-8 xl:py-0 gap-3">
                    <div class="xl:w-6/12 relative z-20">
                        <span :class="slider.textColor === 0 ? 'text-sm text-esk-gray-ad':'text-sm text-white'">{{ slider.caption }}</span>
                        <h3 :class="slider.textColor === 0 ?'text-4xl text-esk-blue-32 font-medium mt-6 mb-4' : 'text-4xl text-white font-medium mt-6 mb-4'">{{ slider.type }}</h3>
                        <p :class="slider.textColor === 0 ? 'text-esk-blue-32' : 'text-white'">{{ slider.excerpt }} </p>
                        <div class="flex justify-self-start mt-10 md:mt-8 md:text-base text-sm" v-if="slider.url">
                            <nuxt-link v-if="!slider.url.primary.startsWith('http')" :to="slider.url.primary" type="button" class="rounded text-white bg-esk-red-d6 px-6 pt-3 md:px-12 py-2 mr-4">{{ slider.url.primaryText }}</nuxt-link>
                            <a v-else :href="slider.url.primary" class="rounded text-white bg-esk-red-d6 px-6 pt-3 md:px-12 py-2 mr-4">{{ slider.url.primaryText }}</a>
                            <nuxt-link v-if="!slider.url.secondary.startsWith('http')" :to="slider.url.secondary" :class="slider.textColor === 0 ? 'rounded text-esk-gray-55 border border-esk-gray-32 px-6 md:px-12 py-2':'rounded text-white border border-esk-gray-32 py-3 px-6 sm:px-10 font-medium'">{{ slider.url.secondaryText }}</nuxt-link>
                            <a v-else :href="slider.url.secondary" :class="slider.textColor === 0 ? 'rounded text-esk-gray-55 border border-esk-gray-32 px-6 md:px-12 py-2':'rounded text-white border border-esk-gray-32 py-3 px-6 sm:px-10 font-medium'">{{ slider.url.secondaryText }}</a>
                        </div>
                    </div>
                    <div class="flex justify-center items-center absolute -right-12 top-2 sm:right-3 xl:static xl:w-6/12 z-10">
                        <!-- width: 880; height: 300; -->
                        <img :src="`${$axios.defaults.baseURL.replace('/api/', '/storage/')}${slider.image}`" alt="" class="max-w-full w-60 h-60 xl:h-sliderH xl:w-sliderW object-contain">
                        <!-- <img :src="`${$axios.defaults.baseURL.replace('/api/', '')}${product.images[0]}`" alt="..." class="max-w-full h-20 sm:h-36 mt-4" /> -->
                    </div>
                </div>
            </div>
        </div>
    </VueSlickCarousel>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        props:['item', 'type'],
        components: { VueSlickCarousel },
        data() {
            return {
                settings:{
                    "dots": true,
                    "arrows": false,
                    "dotsClass": "slick-dots custom-dot-class",
                    "edgeFriction": 0.35,
                    "infinite": false,
                    "speed": 500,
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                }
            }
        }
    }
</script>
