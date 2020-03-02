<template>
  <header class="relative h-168 w-full">
    <div
      class="absolute overflow-hidden gradient-background h-112 w-full transform origin-top-left -skew-y-12 shadow-md"
    >
      <span
        style="top:59px"
        class="absolute right-0 h-10 w-24 bg-pink-500"
      ></span>
      <span
        style="top: 432px"
        class="absolute right-0 h-10 w-32 bg-pink-500"
      ></span>
      <span
        style="top: 472px"
        class="absolute right-0 h-10 w-48 bg-pink-600"
      ></span>
    </div>
    <section class="absolute w-full h-full p-4">
      <div class="flex flex-col">
        <h1
          class="mt-32 w-64 text-white text-3xl text-right font-semibold self-end leading-none"
        >
          Dolor sit ameddt Lorem ipsum, adipiscing elit.
        </h1>
        <h2 class="mt-12 text-white text-3xl font-extrabold">
          ¿Quienes Somos?
        </h2>
        <p class="mt-1 w-11/12 text-indigo-100 font-thin leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mt-10 w-56 h-56 shadow-md bg-white rounded-lg"></div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>
