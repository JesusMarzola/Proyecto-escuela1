<template>
  <v-app>
    <!-- BARRA SUPERIOR -->
    <v-app-bar color="#2196F3" dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="font-weight-bold">LICEO GUILLERMO VALENCIA</v-toolbar-title>
    </v-app-bar>

    <!-- MENÚ LATERAL -->
    <v-navigation-drawer v-model="drawer" app color="#E3F2FD">
      <!-- PERFIL DEL PROFESOR -->
      <v-sheet class="pa-4" color="#BBDEFB">
        <v-avatar size="80" class="mb-3">
          <v-img src="https://randomuser.me/api/portraits/men/32.jpg"></v-img>
        </v-avatar>
        <div class="text-h6 font-weight-medium">Prof. Juan Herrera</div>
        <div class="text-body-2 text-grey-darken-1">juan.herrera@liceogv.edu.co</div>
      </v-sheet>

      <v-divider class="my-3"></v-divider>

      <!-- MENÚ DE OPCIONES -->
      <v-list density="comfortable" nav>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :prepend-icon="item.icon"
          :title="item.text"
          @click="selectOption(item.text)"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- CONTENIDO PRINCIPAL -->
    <v-main class="pa-6" style="background-color: #F5F5F5;">
      <v-container>
        <v-card class="pa-6" elevation="4" rounded="lg">
          <v-card-title class="text-h5 font-weight-bold">{{ selectedTitle }}</v-card-title>
          <v-divider class="mb-4"></v-divider>
          <v-card-text>
            <div v-if="selectedTitle === 'Estudiantes'">
              📚 Aquí podrás gestionar la lista de estudiantes, agregar o modificar información académica.
            </div>

            <div v-else-if="selectedTitle === 'Materias'">
              🧮 En este apartado podrás ver las materias asignadas y sus horarios.
            </div>

            <div v-else-if="selectedTitle === 'Salir'">
              🚪 Has cerrado sesión correctamente. ¡Hasta pronto!
            </div>

            <div v-else>
              🏫 Bienvenido al panel del profesor. Selecciona una opción del menú para comenzar.
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(true)
const selectedTitle = ref('Inicio')

const menuItems = [
  { icon: 'mdi-account-group-outline', text: 'Estudiantes' },
  { icon: 'mdi-book-open-page-variant', text: 'Materias' },
  { icon: 'mdi-logout', text: 'Salir' },
]

function selectOption(option) {
  selectedTitle.value = option
}
</script>

<style scoped>
.v-list-item:hover {
  background-color: #BBDEFB !important;
  transition: 0.3s;
}
</style>
