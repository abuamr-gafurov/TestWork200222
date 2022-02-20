<template>
    <div
      class="transition duration-300 fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-20"
      :class="active ? 'visible opacity-100' : 'invisible opacity-0'"
      
    >
    <div class="absolute w-full h-full top-0 left-0 z-20" @click="closePopup(false)">
    </div>
        <form
        v-on:submit.prevent="send(item.form)"
        v-if="item.form"
        class="rounded-md fixed p-14 z-30 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition"
        :class="active ? 'opacity-100 visible' : 'hidden opacity-0'"
        >
            <h3 class="font-medium text-xl md:text-4xl mb-14 text-esk-blue-32">
                {{item.title}}
            </h3>
            <input required v-model="item.form.body.name.value" v-if="item.form.body.name" :placeholder="item.form.body.name.placeholder" class="border-eskh-blue-32 w-full rounded-md" type="text" name="" id="">
            <input required v-model="item.form.body.phone.value" minlength="9" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" v-if="item.form.body.phone" :placeholder="item.form.body.phone.placeholder" class="border-eskh-blue-32 w-full rounded-md my-5" type="text" name="" id="">
            <input required v-model="item.form.body.mail.value" v-if="item.form.body.mail" :placeholder="item.form.body.mail.placeholder" class="border-eskh-blue-32 w-full rounded-md" type="email" name="" id="">
            <select required class="border border-gray-300 w-full rounded-md focus:outline-none" v-if="item.form.body.fillials" v-model="item.form.body.fillials.value">
                <option v-for="(el, i) in item.form.body.fillials.options" :key="i" :value="el.address">{{el.address}}</option>
            </select>
            <textarea required v-model="item.form.body.message.value" v-if="item.form.body.message" :placeholder="item.form.body.message.placeholder" class="w-full order-eskh-blue-32 rounded-md mt-5" name="" id="" cols="3" rows="3"></textarea>
            <div class="flex justify-end mt-14">
                <button class="bg-esk-red-d6 text-white py-2 px-8 rounded-md">
                    Отправить
                </button>
            </div>            
        </form>
    </div>
</template>
<script>
export default {
    props: ['item','active','closePopup','send'],
    data() {
        return{

        }
    },
}
</script>