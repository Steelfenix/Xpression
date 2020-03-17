<template>
  <div>
    <section
      v-for="(section, index) in productSection"
      :key="'section' + index"
      class="md:hidden relative w-full"
      :class="index > 0 ? 'h-112 mt-32' : 'h-168'"
    >
      <div
        class="absolute overflow-hidden gradient-background w-full transform origin-top-right skew-y-12 shadow-md"
        :class="
          index > 0
            ? 'gradient-background-pink-yellow h-100'
            : 'gradient-background h-112'
        "
      ></div>
      <div class="absolute w-full h-full p-4">
        <div class="flex flex-col">
          <h2 class="mt-16 w-64 text-white text-3xl font-semibold">
            {{ section.sectionName }}
          </h2>
          <div class="flex flex-row mt-8">
            <div class="w-48 h-48 shadow-md rounded-lg overflow-hidden">
              <img
                class="h-full w-full object-cover"
                :src="section.photos[0]"
              />
            </div>
            <div class="flex-col ml-1">
              <div class="w-22 h-22 shadow-md rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover"
                  :src="section.photos[1]"
                />
              </div>
              <div class="mt-1 w-22 h-22 shadow-md rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover"
                  :src="section.photos[2]"
                />
              </div>
            </div>
            <div class="flex-col ml-1">
              <div class="w-22 h-22 shadow-md rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover"
                  :src="section.photos[3]"
                />
              </div>
              <div class="mt-1 w-22 h-22 shadow-md rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover"
                  :src="section.photos[4]"
                />
              </div>
              <div class="mt-1 w-22 h-22 shadow-md rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover"
                  :src="section.photos[5]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      v-for="(section, index) in productSection"
      :key="'sectionD' + index"
      class="hidden md:block relative w-full"
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
              <div class="w-96 h-96 shadow-md rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover"
                  :src="section.photos[0]"
                />
              </div>
              <div class="flex-col ml-1">
                <div class="w-41 h-41 shadow-md rounded-lg overflow-hidden">
                  <img
                    class="h-full w-full object-cover"
                    :src="section.photos[1]"
                  />
                </div>
                <div
                  class="mt-1 w-41 h-41 shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    class="h-full w-full object-cover"
                    :src="section.photos[2]"
                  />
                </div>
              </div>
              <div class="flex-col ml-1">
                <div class="w-41 h-41 shadow-md rounded-lg overflow-hidden">
                  <img
                    class="h-full w-full object-cover"
                    :src="section.photos[3]"
                  />
                </div>
                <div
                  class="mt-1 w-41 h-41 shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    class="h-full w-full object-cover"
                    :src="section.photos[4]"
                  />
                </div>
                <div
                  class="mt-1 w-41 h-41 shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    class="h-full w-full object-cover"
                    :src="section.photos[5]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Desktop-->
  </div>
</template>

<script>
import Navbar from '@/components/Shared/Navbar.vue';

export default {
  name: 'Header',
  data() {
    return {
      productSection: [
        {
          sectionName: 'Playeras',
          photos: [
            require('@/assets/img/playeras/83193536_101758741410889_4526633201971494912_n.jpg'),
            require('@/assets/img/playeras/84068256_101758401410923_74868375255252992_n.jpg'),
            require('@/assets/img/playeras/85066121_101758354744261_5981152343805132800_n.jpg'),
            require('@/assets/img/playeras/85214653_101758668077563_6152360756814807040_n.jpg'),
            require('@/assets/img/playeras/88035226_115924329994330_6374896820740423680_o.png'),
            require('@/assets/img/playeras/90146799_122764329310330_8266621428325941248_n.png')
          ]
        },
        {
          sectionName: 'Térmos',
          photos: [
            require('@/assets/img/playeras/88035226_115924329994330_6374896820740423680_o.png'),
            require('@/assets/img/playeras/83193536_101758741410889_4526633201971494912_n.jpg'),
            require('@/assets/img/playeras/84068256_101758401410923_74868375255252992_n.jpg'),
            require('@/assets/img/playeras/85066121_101758354744261_5981152343805132800_n.jpg'),
            require('@/assets/img/playeras/85214653_101758668077563_6152360756814807040_n.jpg'),
            require('@/assets/img/playeras/90146799_122764329310330_8266621428325941248_n.png')
          ]
        },
        {
          sectionName: 'Tazas',
          photos: [
            require('@/assets/img/playeras/88035226_115924329994330_6374896820740423680_o.png'),
            require('@/assets/img/playeras/83193536_101758741410889_4526633201971494912_n.jpg'),
            require('@/assets/img/playeras/84068256_101758401410923_74868375255252992_n.jpg'),
            require('@/assets/img/playeras/85066121_101758354744261_5981152343805132800_n.jpg'),
            require('@/assets/img/playeras/85214653_101758668077563_6152360756814807040_n.jpg'),
            require('@/assets/img/playeras/90146799_122764329310330_8266621428325941248_n.png')
          ]
        }
      ]
    };
  }
};
</script>
