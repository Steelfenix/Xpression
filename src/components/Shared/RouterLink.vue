<template>
  <router-link
    :to="url"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
  >
    <li
      class="p-2"
      :class="isExactActive && 'bg-indigo-200 text-gray-800 rounded-l-full'"
    >
      <span class="ml-3 text-sm" @click="navigate">{{ text }}</span>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    text: String,
    url: String
  }
};
</script>
