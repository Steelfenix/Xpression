<template>
  <div>
    <div v-for="(section, index) in productSection" :key="'section' + index">
      <section
        class="lg:hidden relative "
        :class="index > 0 ? 'h-112 mt-16' : 'h-168'"
      >
        <div
          class="absolute overflow-hidden gradient-background w-full transform origin-top-right skew-y-12 shadow-md"
          :class="
            index > 0
              ? 'gradient-background-pink-yellow h-112'
              : 'gradient-background h-168'
          "
        ></div>
        <div class="flex flex-col px-2">
          <h2
            class="z-98 px-8 w-64 text-white text-3xl font-semibold"
            :class="index > 0 ? 'mt-0' : 'mt-20'"
          >
            {{ section.sectionName }}
          </h2>
          <div class="flex p-2 h-112 w-full overflow-x-auto -mx-2">
            <div
              class="px-2 z-98 ml-2"
              v-for="(image, imageIndex) in section.photos"
              :key="'image-' + section + imageIndex"
            >
              <CatalogCard :image="image" :index="imageIndex" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Desktop -->
    <section
      v-for="(section, index) in productSection"
      :key="'sectionD' + index"
      class="hidden lg:block relative w-full"
      :class="index > 0 ? 'h-168' : 'h-252'"
    >
      <div
        class="absolute overflow-hidden w-full transform origin-top-right skew-y-12 shadow-md"
        :class="
          index > 0
            ? 'gradient-background-pink-yellow h-112 mt-32'
            : 'gradient-background h-252'
        "
      ></div>
      <div class="absolute w-full h-full p-4">
        <div class="flex justify-center">
          <div class="flex flex-col">
            <h2
              class="w-64 text-white text-5xl font-semibold"
              :class="index > 0 ? 'pt-2' : 'mt-16'"
            >
              {{ section.sectionName }}
            </h2>
            <div class="flex flex-row mt-8">
              <div
                class="w-96 h-96 p-4 bg-white shadow-lg rounded-sm transform -rotate-5 overflow-hidden"
              >
                <img
                  class="h-full w-full object-cover"
                  :src="section.photos[0]"
                />
              </div>
              <div class="flex-col ml-8">
                <div
                  class="w-41 h-41 p-4 bg-white shadow-lg rounded-sm transform rotate-15 overflow-hidden"
                >
                  <img
                    class="h-full w-full object-cover"
                    :src="section.photos[1]"
                  />
                </div>
                <div
                  class="mt-4 w-41 h-41 p-4 bg-white shadow-lg rounded-sm transform rotate-5 overflow-hidden"
                >
                  <img
                    class="h-full w-full object-cover"
                    :src="section.photos[2]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CatalogCard from '@/components/Shared/CatalogCard.vue';

export default {
  name: 'Header',
  components: {
    CatalogCard
  },
  data() {
    return {
      productSection: [
        {
          sectionName: 'Playeras',
          photos: [
            require('@/assets/img/playeras/88035226_115924329994330_6374896820740423680_o.png'),
            require('@/assets/img/playeras/83193536_101758741410889_4526633201971494912_n.jpg'),
            require('@/assets/img/playeras/84068256_101758401410923_74868375255252992_n.jpg'),
            require('@/assets/img/playeras/85066121_101758354744261_5981152343805132800_n.jpg'),
            require('@/assets/img/playeras/85214653_101758668077563_6152360756814807040_n.jpg')
          ]
        },
        {
          sectionName: 'Térmos',
          photos: [
            require('@/assets/img/termos/termo1.png'),
            require('@/assets/img/termos/termo2.png'),
            require('@/assets/img/termos/termo3.png'),
            require('@/assets/img/termos/termo4.png'),
            require('@/assets/img/termos/termo5.png')
          ]
        },
        {
          sectionName: 'Tazas',
          photos: [
            require('@/assets/img/tazas/taza1.png'),
            require('@/assets/img/tazas/taza2.png'),
            require('@/assets/img/tazas/taza3.png'),
            require('@/assets/img/tazas/taza4.png'),
            require('@/assets/img/tazas/taza5.png')
          ]
        },
        {
          sectionName: 'Agendas',
          photos: [
            require('@/assets/img/agendas/agenda1.png'),
            require('@/assets/img/agendas/agenda2.png'),
            require('@/assets/img/agendas/agenda3.png'),
            require('@/assets/img/agendas/agenda4.png'),
            require('@/assets/img/agendas/agenda5.png')
          ]
        },
        {
          sectionName: 'Boligrafos',
          photos: [
            require('@/assets/img/boligrafos/boligrafo1.png'),
            require('@/assets/img/boligrafos/boligrafo2.png'),
            require('@/assets/img/boligrafos/boligrafo3.png'),
            require('@/assets/img/boligrafos/boligrafo4.png'),
            require('@/assets/img/boligrafos/boligrafo5.png')
          ]
        },
        {
          sectionName: 'Gorras',
          photos: [
            require('@/assets/img/gorras/gorra1.png'),
            require('@/assets/img/gorras/gorra2.png'),
            require('@/assets/img/gorras/gorra3.png'),
            require('@/assets/img/gorras/gorra4.png'),
            require('@/assets/img/gorras/gorra5.png')
          ]
        },
        {
          sectionName: 'Lonchera',
          photos: [
            require('@/assets/img/loncheras/lonchera1.png'),
            require('@/assets/img/loncheras/lonchera2.png'),
            require('@/assets/img/loncheras/lonchera3.png'),
            require('@/assets/img/loncheras/lonchera4.png'),
            require('@/assets/img/loncheras/lonchera5.png')
          ]
        },
        {
          sectionName: 'Mochilas',
          photos: [
            require('@/assets/img/mochilas/mochila1.png'),
            require('@/assets/img/mochilas/mochila2.png'),
            require('@/assets/img/mochilas/mochila3.png'),
            require('@/assets/img/mochilas/mochila4.png'),
            require('@/assets/img/mochilas/mochila5.png')
          ]
        },
        {
          sectionName: "USB's",
          photos: [
            require('@/assets/img/usb/usb1.png'),
            require('@/assets/img/usb/usb2.png'),
            require('@/assets/img/usb/usb3.png'),
            require('@/assets/img/usb/usb4.png'),
            require('@/assets/img/usb/usb5.png')
          ]
        }
      ]
    };
  }
};
</script>
