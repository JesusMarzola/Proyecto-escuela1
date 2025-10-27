<template>
  <v-app-bar :color="'#64b5f6'" theme="light" :elevation="2"
  height=100>
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title class="titulo text-center text-h4 text-white">LICEO GUILLERMO VALENCIA SEDE MONTERÍA</v-app-bar-title>
  <template v-slot:append>
          <v-btn color="light-blue-darken-2" variant="flat" @click="dialog = true">Iniciar Sesion</v-btn>
  </template>
  </v-app-bar>

 <v-dialog
      v-model="dialog"
      max-width="1200px"
    >
       <LoginApp></LoginApp>
  </v-dialog>  
</template>


<script setup>
  import { ref } from 'vue'
     const dialog = ref(false)
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

.titulo {
  font-family: 'Poppins', sans-serif;
  font-size: 34px;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>