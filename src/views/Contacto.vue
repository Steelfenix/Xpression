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
        <div class="mt-8 overflow-hidden rounded-md shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.9007506363228!2d-100.2765095849788!3d25.773841583631224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629358f99be5ef%3A0x1e36f5e9377f0c1!2sDel%20Encino%20811%2C%20Privadas%20de%20An%C3%A1huac%2C%20Cerrada%20de%20An%C3%A1huac%20Residencial%2C%2066059%20Cd%20Gral%20Escobedo%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1583121943911!5m2!1ses-419!2smx"
            width="400"
            height="250"
          ></iframe>
        </div>
        <div
          class="mt-4 p-8 w-full h-56 flex flex-col rounded-sm bg-white border border-gray-200 rounded-md shadow-lg"
        >
          <div class="flex flex-row w-full items-center">
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
            <p class="ml-2">
              test@xpression.com
            </p>
          </div>
          <div class="mt-4 flex flex-row w-full items-center">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 text-gray-900"
              >
                <path
                  d="M9.228 3.684L8.279 4l.949-.316zm1.498 4.493l-.949.316.949-.316zm-.502 1.21l.447.895-.447-.894zm-2.257 1.13l-.447-.895a1 1 0 00-.465 1.306l.912-.412zm5.516 5.516l-.41.912a1 1 0 001.305-.465l-.895-.447zm1.13-2.257l-.895-.447.894.447zm1.21-.502l-.316.949.316-.949zm4.493 1.498l.317-.949-.317.95zM5 2a3 3 0 00-3 3h2a1 1 0 011-1V2zm3.28 0H5v2h3.28V2zm1.897 1.368A2 2 0 008.279 2v2l1.898-.632zm1.497 4.493l-1.497-4.493L8.279 4l1.498 4.493 1.897-.632zm-1.002 2.421a2 2 0 001.002-2.421l-1.897.632.895 1.79zm-2.258 1.129l2.258-1.129-.895-1.789-2.257 1.13.894 1.788zm5.48 3.71a10.042 10.042 0 01-5.015-5.016l-1.824.822a12.042 12.042 0 006.018 6.018l.822-1.824zm-.176-1.793l-1.129 2.258 1.789.894 1.129-2.257-1.79-.895zm2.421-1.002a2 2 0 00-2.421 1.002l1.789.895.632-1.897zm4.494 1.497l-4.494-1.497-.632 1.897L20 15.72l.633-1.898zM22 15.721a2 2 0 00-1.367-1.898L20 15.721h2zM22 19v-3.28h-2V19h2zm-3 3a3 3 0 003-3h-2a1 1 0 01-1 1v2zm-1 0h1v-2h-1v2zM2 6c0 8.837 7.163 16 16 16v-2C10.268 20 4 13.732 4 6H2zm0-1v1h2V5H2z"
                ></path>
              </svg>
            </span>
            <p class="ml-2">
              (+52) 8181818181
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

// <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path fill="#4A5568" d="M9.228 3.684L8.279 4l.949-.316zm1.498 4.493l-.949.316.949-.316zm-.502 1.21l.447.895-.447-.894zm-2.257 1.13l-.447-.895a1 1 0 00-.465 1.306l.912-.412zm5.516 5.516l-.41.912a1 1 0 001.305-.465l-.895-.447zm1.13-2.257l-.895-.447.894.447zm1.21-.502l-.316.949.316-.949zm4.493 1.498l.317-.949-.317.95zM5 2a3 3 0 00-3 3h2a1 1 0 011-1V2zm3.28 0H5v2h3.28V2zm1.897 1.368A2 2 0 008.279 2v2l1.898-.632zm1.497 4.493l-1.497-4.493L8.279 4l1.498 4.493 1.897-.632zm-1.002 2.421a2 2 0 001.002-2.421l-1.897.632.895 1.79zm-2.258 1.129l2.258-1.129-.895-1.789-2.257 1.13.894 1.788zm5.48 3.71a10.042 10.042 0 01-5.015-5.016l-1.824.822a12.042 12.042 0 006.018 6.018l.822-1.824zm-.176-1.793l-1.129 2.258 1.789.894 1.129-2.257-1.79-.895zm2.421-1.002a2 2 0 00-2.421 1.002l1.789.895.632-1.897zm4.494 1.497l-4.494-1.497-.632 1.897L20 15.72l.633-1.898zM22 15.721a2 2 0 00-1.367-1.898L20 15.721h2zM22 19v-3.28h-2V19h2zm-3 3a3 3 0 003-3h-2a1 1 0 01-1 1v2zm-1 0h1v-2h-1v2zM2 6c0 8.837 7.163 16 16 16v-2C10.268 20 4 13.732 4 6H2zm0-1v1h2V5H2z"></path></svg>
</script>
