<template>
  <v-container class="mt-5">
    <v-data-table
      :headers="headers"
      :items="usuarios"
      class="elevation-2"
    />
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import tablaservice from "@/services/tablaservice";

const props = defineProps(['usuarios'])





const headers = [
  { title: "Username", key: "username" },
  { title: "Nombre", key: "nombre" },
  { title: "Email", key: "email" },
  { title: "Rol", key: "rol" },
  { title: "ID", key: "id" },
];

/*
const cargar = (async() => {
   try {
    const res = await tablaservice.getUsers();
    usuarios.value = res.data;
  } catch (error) {
    console.error("Error cargando usuarios:", error);
  }
})

onMounted(() => {
  
   cargar()
});*/







</script>
