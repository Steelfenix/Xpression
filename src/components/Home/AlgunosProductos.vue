<template>
  <div>
    <section class="md:hidden mt-20 relative h-100 w-full">
      <div
        class="absolute overflow-hidden gradient-background-red-yellow h-100 w-full transform origin-top-left skew-y-12 shadow-md"
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
          <h2
            class="mt-20 w-4/5 text-white text-2xl font-semibold leading-none"
          >
            Algunos de Nuestros Productos
          </h2>
          <div class="flex flex-row mt-8">
            <div class="w-48 h-48 shadow-md bg-white rounded-lg">
              <img
                class="h-full w-full object-cover rounded-lg"
                :src="images[0]"
              />
            </div>
            <div class="flex-col ml-1">
              <div class="w-22 h-22 shadow-md bg-white rounded-lg">
                <img
                  class="h-full w-full object-cover rounded-lg"
                  :src="images[1]"
                />
              </div>
              <div class="mt-1 w-22 h-22 shadow-md bg-white rounded-lg">
                <img
                  class="h-full w-full object-cover rounded-lg"
                  :src="images[2]"
                />
              </div>
            </div>
          </div>
          <router-link
            :to="'/catalogo'"
            class="md:text-xl mt-2 font-bold self-end text-lg text-white flex
            items-center"
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
          </router-link>
        </div>
      </section>
    </section>
    <!--Desktop-->
    <section class="md:block hidden mt-20 relative h-168 w-full">
      <div
        class="absolute overflow-hidden gradient-background-red-yellow h-168 w-full transform origin-top-left skew-y-12 shadow-md"
      >
        <span class="absolute right-0 h-16 w-32 bg-orange-300"></span>
        <span
          style="top:64px"
          class="absolute right-0 h-16 w-24 bg-red-500"
        ></span>
        <span
          style="bottom: 64px"
          class="absolute left-0 bottom h-16 w-32 bg-orange-200"
        ></span>
        <span class="absolute left-0 bottom-0 h-16 w-48 bg-orange-300"></span>
      </div>
      <section class="flex justify-center mt-48 absolute w-full h-full mt-10">
        <div class="flex flex-col">
          <h2
            class="mt-16 w-11/12 text-white text-3xl font-semibold leading-none"
          >
            Algunos de Nuestros Productos
          </h2>
          <div class="flex flex-col items-center">
            <div class="flex flex-row mt-8">
              <div
                class="w-96 h-96 p-4 bg-white shadow-lg rounded-sm transform -rotate-5 overflow-hidden"
              >
                <img class="h-full w-full object-cover" :src="images[0]" />
              </div>
              <div class="flex-col ml-8">
                <div
                  class="w-41 h-41 p-4 bg-white shadow-lg rounded-sm transform rotate-15 overflow-hidden"
                >
                  <img class="h-full w-full object-cover" :src="images[1]" />
                </div>
                <div
                  class="mt-4 w-41 h-41 p-4 bg-white shadow-lg rounded-sm transform rotate-5 overflow-hidden"
                >
                  <img class="h-full w-full object-cover" :src="images[2]" />
                </div>
              </div>
            </div>
            <router-link
              :to="'/catalogo'"
              class="md:text-xl mt-2 font-bold self-end text-lg text-white flex
            items-center"
              >Ver más<span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="md:w-6 md:h-6 w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path></svg
              ></span>
            </router-link>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AlgunosProductos',
  data() {
    return {
      images: [
        'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/playeras/camisa4.jpg',
        'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/agendas/agenda4.png',
        'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/mochilas/mochila4.png'
      ]
    };
  }
};
</script>
