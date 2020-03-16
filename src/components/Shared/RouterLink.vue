<template>
  <router-link
    :to="url"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
  >
    <li
      class="p-2 flex items-center"
      :class="isExactActive && 'bg-indigo-200 text-gray-800 rounded-l-full'"
    >
      <span v-html="svg" :class="isExactActive && 'text-gray-900'"></span>
      <span class="ml-3 text-sm" @click="navigate">{{ text }}</span>
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
