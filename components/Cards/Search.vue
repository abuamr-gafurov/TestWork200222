<template>
    <article class="bg-esk-gray-f7 py-9 px-11 mb-7 relative">
        <h4 class="font-medium">{{item.title && item.title }}</h4>
        <div v-if="item.description" v-html="item.description" class="py-6">
        </div>
        <nuxt-link class="text-esk-blue-35 break-words" :to="item.link">{{item.link}}</nuxt-link>
        <nuxt-link class="absolute w-full h-full top-0 left-0" :to="item.link"></nuxt-link>
    </article>
    
</template>
<script>
export default {
    props: ['item']
}
</script>