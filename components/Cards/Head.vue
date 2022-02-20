<template>
    <div class="bg-white">
        <img class="w-full h-72 object-cover" :src="
          `${$axios.defaults.baseURL.replace('/api/', '/storage/')}${
            item.img
          }`
        " alt="">
        <div class="p-8 text-esk-blue-51">
            <h5 class="text-2xl lg:text-3xl mb-4 font-medium">{{item.title}}</h5>
            <p>
                {{item.description}}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props:['item']
}
</script>