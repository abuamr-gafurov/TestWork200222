<template>
    <form @submit.prevent="$emit('send')" class="px-14 py-10 bg-esk-gray-fb">
        <h3 class="font-bold text-4xl mb-10 text-esk-blue-32">Онлайн заявка</h3> 
        <div class="flex flex-col lg:flex-row justify-between">
            <input 
            class="h-14 p-5 placeholder-esk-gray-72 border-0 focus:ring-0 focus:outline-none focus:border-0 w-full md:w-6/12 md:mr-2"
            type="text" 
            name="name" 
            v-model="item.name"
            required
            placeholder="ФИО"
            id="name">
            <input 
            class="h-14 p-5 placeholder-esk-gray-72 border-0 focus:ring-0 focus:outline-none focus:border-0 w-full md:w-6/12 md:ml-2"
            type="tel" 
            v-model="item.phone"
            name="phone" 
            placeholder="Мобильный телефон: 9xx-xx-xx-xx*"
            required
            id="phone"
            maxlength="9" 
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
        </div>  
        <p class="text-esk-blue-98 py-12">
            Скачайте шаблон и заполните свои данные
        </p> 
        <div class="grid lg:grid-cols-3 gap-6">
            <div class="flex">
                <img class="h-20" src="/image/Doc.svg" alt="">
                <div class="ml-6">
                    <h4 class="text-esk-gray-55">Заявка - Торговое финансирование.docx</h4>
                    <div class="flex justify-between mt-4 text-sm">
                        <span class="text-light">300 Кб</span>
                        <nuxt-link class="text-esk-blue-35" to="#">Скачать 🡢</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="text-sm">
                <label v-if="item.file === ''" class="flex flex-col border-2 rounded-md border-dotted p-8 cursor-pointer text-center text-esk-gray-77" for="file">
                    <span class="font-medium">Перетащите или загрузите файл заявки*(.doc)</span>                    
                    <span class="mt-2">Заявки, отправленные в другой форме, могут не рассматриваться банком.</span>                    
                </label>
                <label v-else class="flex flex-col border-2 rounded-md border-dotted p-8 cursor-pointer text-center text-esk-gray-77" for="file">
                    <span class="font-medium">Файл успешно загружен</span>                    
                </label>
                <input  @change="e => $emit('upload', e.target.files)" class="hidden" type="file" name="file" id="file">
            </div>
            <div class="flex justify-center items-end text-sm">
                <button
                    class="bg-esk-red-d6 py-4 text-white rounded-md font-bold md:px-12 px-10 focus:outline-none"
                >
                    Оставить заявку
                </button>
            </div>
        
        </div>      
    </form>
</template>
<script>
export default {
    props: ['item'],
    data() {
        return{

        }
    },
}
</script>