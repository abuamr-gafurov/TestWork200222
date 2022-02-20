<template>
  <div class="container mx-auto px-8 md:px-20">
    <div class="flex flex-col lg:flex-row items-center justify-between mt-28 mb-64">
      <div class="w-full lg:w-6/12 order-2 lg:order-1">
        <h3 class="font-bold text-4xl text-esk-blue-32">Такой страницы больше нет</h3>
        <p class="font-normal text-xl text-esk-blue-32 opacity-80 my-8">Возможно, она была перемещена, или вы просто неверно указали адрес страницы.</p>
        <nuxt-link to="/" class="rounded bg-esk-red-d6 text-base font-normal text-white px-6 py-4 block w-max">Вернуться на главную</nuxt-link>
      </div>
      <img class="max-w-full order-1 lg:order-2" src="/image/error-404.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>
