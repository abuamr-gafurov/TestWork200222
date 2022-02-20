<script>
export default {
  name: "Modal",
  props: ["open"],
};
</script>

<template>
  <div>
    <div
      class="fixed top-0 left-0 w-full h-full bg-gray-800 z-20 transition"
      :class="open ? 'opacity-50 visible' : 'hidden opacity-0'"
    ></div>
    <div
      class="rounded-md fixed p-14 z-20 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition"
      :class="open ? 'opacity-100 visible' : 'hidden opacity-0'"
    >
      <img class="mb-10" src="../static/image/check.svg" alt="Bank" />
      <h2 class="text-2xl mb-8 font-medium">
        Ваша заявка успешно отправленна!
      </h2>
      <p class="block mb-20">
        Благодарим за использование услуг Банка. <br />
        Сотрудники банка свяжутся с Вами с минуты на <br />
        минуту.
      </p>
      <router-link
        to="/"
        class="rounded-md font-medium inline-block bg-esk-red-d6 px-7 py-3 text-white"
        >На главную</router-link
      >
    </div>
  </div>
</template>
