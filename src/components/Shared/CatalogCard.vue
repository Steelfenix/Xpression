<template>
  <div
    class="mt-4 w-64 p-4 bg-white shadow-lg rounded-sm transform overflow-hidden relative"
    :class="index % 2 === 0 ? 'rotate-5' : '-rotate-5'"
  >
    <img class="h-64 w-64 border border-gray-100 object-cover" :src="image" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    index: Number
  },
  data() {
    return {};
  }
};
</script>
