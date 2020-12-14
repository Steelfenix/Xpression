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
                class="w-100 h-100 p-4 bg-white shadow-lg rounded-sm transform -rotate-5 overflow-hidden"
              >
                <img
                  class="h-full w-full object-cover"
                  :src="section.photos[0]"
                />
              </div>
              <div class="flex-col ml-8">
                <div
                  class="w-44 h-44 p-4 bg-white shadow-lg rounded-sm transform rotate-15 overflow-hidden"
                >
                  <img
                    class="h-full w-full object-cover"
                    :src="section.photos[1]"
                  />
                </div>
                <div
                  class="mt-4 w-44 h-44 p-4 bg-white shadow-lg rounded-sm transform rotate-5 overflow-hidden"
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
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/playeras/camisa1.jpg',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/playeras/camisa2.jpg',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/playeras/camisa3.jpg'
          ]
        },
        {
          sectionName: 'Seguridad',
          photos: [
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/seguridad/seguridad1.jpg',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/seguridad/seguridad2.jpg',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/seguridad/seguridad3.png'
          ]
        },
        {
          sectionName: 'Térmos',
          photos: [
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/termos/termo1.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/termos/termo2.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/termos/termo3.png'
          ]
        },
        {
          sectionName: 'Tazas',
          photos: [
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/tazas/taza1.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/tazas/taza2.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/tazas/taza3.png'
          ]
        },
        {
          sectionName: 'Agendas',
          photos: [
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/agendas/agenda1.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/agendas/agenda2.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/agendas/agenda3.png'
          ]
        },
        {
          sectionName: 'Boligrafos',
          photos: [
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/boligrafos/boligrafo1.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/boligrafos/boligrafo2.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/boligrafos/boligrafo3.png'
          ]
        },
        {
          sectionName: 'Gorras',
          photos: [
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/gorras/gorra1.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/gorras/gorra2.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/gorras/gorra3.png'
          ]
        },
        {
          sectionName: 'Lonchera',
          photos: [
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/loncheras/lonchera1.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/loncheras/lonchera2.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/loncheras/lonchera3.png'
          ]
        },
        {
          sectionName: 'Mochilas',
          photos: [
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/mochilas/mochila1.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/mochilas/mochila2.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/mochilas/mochila3.png'
          ]
        },
        {
          sectionName: "USB's",
          photos: [
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/usb/usb1.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/usb/usb2.png',
            'https://xpression-publicity-images.s3-us-west-1.amazonaws.com/usb/usb3.png'
          ]
        }
      ]
    };
  }
};
</script>
