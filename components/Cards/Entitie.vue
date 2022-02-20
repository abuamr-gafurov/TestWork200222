<template>
    <div class="flex flex-col justify-between">
        <h3 :class="data.disbled ? 'text-esk-gray-80': 'text-esk-blue-32'" class="text-3xl mb-3 font-medium">{{data.title}}</h3>
        <p :class="data.disbled ? 'text-esk-gray-80': 'text-esk-blue-32'" class="text-sm">{{data.description}}</p>
        <div v-if="!data.disbled" class="text-esk-gray-80 mt-3 flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" class="rounded-full bg-esk-red-d6 mr-4"><path d="M11.1988 5.6001L6.79883 10.0001L4.79883 8.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                Бесплатно / Комиссия не взимается
        </div>
        <button class="focus:outline-none bg-esk-red-d6 text-white px-20 py-4 rounded-md mt-4" v-else>Открыть счет</button>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>