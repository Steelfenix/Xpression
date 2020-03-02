<template>
  <div class="flex flex-col">
    <Header />
    <Ayudar />
    <AlgunosProductos />
    <Clientes />
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue';
import Ayudar from '@/components/Home/Ayudar.vue';
import AlgunosProductos from '@/components/Home/AlgunosProductos.vue';
import Clientes from '@/components/Home/NuestrosClientes.vue';

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
