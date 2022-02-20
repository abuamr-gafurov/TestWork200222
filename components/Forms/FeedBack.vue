<template>
  <div>
    <form v-on:submit.prevent="$emit('send')">
      <h3 class="md:text-3xl text-xl font-medium mb-10 text-esk-blue-32">
        Форма обратной связи
      </h3>
      <input
        class="h-14 p-5 placeholder-esk-gray-72 border-0 w-full focus:ring-0 focus:outline-none focus:border-0"
        placeholder="Фамилия, имя и отчество *"
        type="text"
        required
        v-model="item.name"
      />
      <div class="flex flex-col md:flex-row justify-between mt-5 md:mt-11">
        <input
          placeholder="Мобильный телефон: 9xx-xx-xx-xx*"
          class="h-14 p-5 placeholder-esk-gray-72 border-0 focus:ring-0 focus:outline-none focus:border-0 w-full md:w-6/12 md:mr-2"
          type="text"
          required
          maxlength="9" 
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          v-model="item.phone"
        />
        <input
          placeholder="Электронная почта*"
          required
          class="h-14 p-5 placeholder-esk-gray-72 border-0 focus:ring-0 focus:outline-none focus:border-0 w-full md:w-6/12 mt-5 md:mt-0 md:ml-2"
          type="email"
          v-model="item.email"
        />
      </div>
      <textarea
        v-model="item.message"
        v-if="comment"
        class="mt-11 p-5 placeholder-esk-gray-72 border-0 w-full focus:ring-0 focus:outline-none focus:border-0"
        placeholder="Ваш комментарий *"
        cols="30"
        rows="10"
      ></textarea>
      <div class="mt-11">
        <label
          v-if="file"
          class="text-esk-gray-72 cursor-pointer flex items-center underline"
          for="file"
          ><img class="mr-1 w-5 h-5" src="/image/unlink.svg" alt="addFile" />
          Прикрепить файл</label
        >
        <input
          @change="e => $emit('upload', e.target.files)"
          class="hidden"
          type="file"
          name=""
          id="file"
        />
      </div>
      <label
        v-if="!file"
        for="file"
        class="border rounded-md border-dashed flex flex-col py-3 px-5 md:py-8 md:px-16 text-esk-gray-85 text-center"
      >
        <template v-if="item.file === ''">
          <span class="font-medium md:text-xl text-md "
            >Перетащите или загрузите файл анкеты* (.doc,.pdf,.docx,.rtf)</span
          >
          <span class="text-sm mt-5"
            >Анкеты, отправленные в другой форме, могут не рассматриваться
            банком.</span
          >
        </template>

        <template v-else>
          <label>
            Файл успешно загружен!
          </label>
        </template>
      </label>
      <button
        class="mt-11 bg-esk-red-d6 py-4 text-white rounded-md font-bold md:px-20 px-10 focus:outline-none"
      >
        Отправить
      </button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["comment", "file", "item"]
};
</script>
