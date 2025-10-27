<template>
  <v-container fluid class="pa-0 ma-0" style="height: 100vh; border: 4px solid black;">
    <v-row no-gutters class="h-100">
      <!-- Columna izquierda con imagen -->
      <v-col cols="7" class="pa-0">
        <v-img
          src="https://th.bing.com/th/id/R.c274de9341f592bc5406bd7d8e1e24c6?rik=%2fTSuNKBpTo8t1g&riu=http%3a%2f%2f3.bp.blogspot.com%2f-uQvXPgjrnEI%2fXPUAj8JIjzI%2fAAAAAAAAAXc%2f-ifj76wXu_IsM7yXg0xWWWCg1SqFTBP0ACK4BGAYYCw%2fs1600%2f12744751_124993741222316_8925517374320173786_n.jpg&ehk=MeikgcEtr3uuj4jgAO204HAHhPAmLYpTzHE3uYC6aQA%3d&risl=&pid=ImgRaw&r=0"
          cover
          height="100%"
          width="100%"
          class="rounded-0"
        ></v-img>
      </v-col>

      <!-- Columna derecha con login -->
      <v-col
        cols="5"
        class="d-flex align-center justify-center"
        style="background-color: #f8f9fa;"
      >
        <v-card
          class="pa-12 pb-8"
          elevation="8"
          rounded="lg"
          style="width: 80%; max-width: 480px;"
        >
          <div class="text-subtitle-1 text-medium-emphasis mb-2">Account</div>

          <v-text-field
            density="compact"
            placeholder="Correo electronico"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          ></v-text-field>

          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
          >
            Contraseña
            <a
              class="text-caption text-decoration-none text-blue"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Olvidaste la contraseña?
            </a>
          </div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'Contraseña'"
            density="compact"
            placeholder="Ingresa tu contraseña"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>

          <v-card class="mb-12" color="surface-variant" variant="tonal">
            <v-card-text class="text-medium-emphasis text-caption">
              Advertencia: Después de 3 intentos fallidos de inicio de sesión consecutivos, 
              su cuenta se bloqueará temporalmente durante tres horas. Si necesita iniciar sesión ahora,
              también puede hacer clic en "¿Olvidó la contraseña de inicio de sesión?" 
              a continuación para restablecer la contraseña de inicio de sesión.
            </v-card-text>
          </v-card>

          <v-btn color="blue" 
          @click="login()"
          size="large" variant="tonal" block>
            Iniciar
          </v-btn>

          <v-card-text class="text-center mt-4">
            <a
              class="text-blue text-decoration-none"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Registrate ahora <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const visible = ref(false)

const login = () => {
  router.push('dashboard')
}
</script>

<style>
.h-100 {
  height: 100%;
}
</style>
