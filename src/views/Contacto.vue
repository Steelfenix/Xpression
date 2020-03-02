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
        <h2
          class="mt-32 w-64 text-white text-3xl text-right font-semibold self-end leading-none"
        >
          Contacto
        </h2>
        <div class="z-10 mt-8 overflow-hidden rounded-md shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.9007506363228!2d-100.2765095849788!3d25.773841583631224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629358f99be5ef%3A0x1e36f5e9377f0c1!2sDel%20Encino%20811%2C%20Privadas%20de%20An%C3%A1huac%2C%20Cerrada%20de%20An%C3%A1huac%20Residencial%2C%2066059%20Cd%20Gral%20Escobedo%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1583121943911!5m2!1ses-419!2smx"
            width="400"
            height="250"
          ></iframe>
        </div>
        <div
          class="mt-16 m-2 w-full flex flex-col rounded-sm bg-white h-56 rounded-md shadow-lg"
        >
          <div class="flex flex-row w-full">
            <p>
              <span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </span>
              test@xpression.com
            </p>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Contacto'
};
</script>
