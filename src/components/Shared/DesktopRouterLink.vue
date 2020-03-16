<template>
  <router-link
    :to="url"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
  >
    <li
      class="mx-1 p-2 flex items-center cursor-pointer text-gray-100"
      :class="isExactActive && 'text-gray-100 border-b-2 border-orange-400'"
      @click="navigate"
    >
      <span v-html="svg" :class="isExactActive && 'text-gray-100'"></span>
      <span class="ml-3 text-md ">{{ text }}</span>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    text: String,
    url: String,
    svg: String
  }
};
</script>
