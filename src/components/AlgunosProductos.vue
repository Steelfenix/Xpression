<template>
  <section class="mt-20 relative h-100 w-full">
    <div
      class="absolute overflow-hidden gradient-background-red-yellow h-100 w-full transform origin-top-left skew-y-12"
    >
      <span class="absolute right-0 h-10 w-32 bg-orange-300"></span
      ><span
        style="top:40px"
        class="absolute right-0 h-10 w-24 bg-red-500"
      ></span>
      <span
        style="bottom: 40px"
        class="absolute left-0 bottom h-10 w-32 bg-orange-200"
      ></span>
      <span class="absolute left-0 bottom-0 h-10 w-48 bg-orange-300"></span>
    </div>
    <section class="absolute w-full h-full p-4">
      <div class="flex flex-col items-center">
        <h2 class="mt-20 w-4/5 text-white text-2xl font-semibold leading-none">
          Algunos de Nuestros Productos
        </h2>
        <div class="flex flex-row mt-8">
          <div class="w-48 h-48 shadow-md bg-white rounded-lg"></div>
          <div class="flex-col ml-1">
            <div class="w-22 h-22 shadow-md bg-white rounded-lg"></div>
            <div class="mt-1 w-22 h-22 shadow-md bg-white rounded-lg"></div>
          </div>
        </div>
        <a class="mt-2 mr-8 self-end text-sm text-white flex items-center"
          >Ver más<span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path></svg
          ></span>
        </a>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'AlgunosProductos'
};
</script>
