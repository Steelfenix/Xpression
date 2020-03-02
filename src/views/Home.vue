<template>
  <div class="flex flex-col">
    <Header />
    <Ayudar />
    <AlgunosProductos />
    <Clientes />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Ayudar from '@/components/Ayudar.vue';
import AlgunosProductos from '@/components/AlgunosProductos.vue';
import Clientes from '@/components/NuestrosClientes.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Ayudar,
    AlgunosProductos,
    Clientes
  }
};
</script>
