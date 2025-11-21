<template>
  <v-form ref="form" class="mt-3" v-model="valid">
    
    <!-- EMAIL -->
    <v-text-field
      v-model="usuario.email"
      label="Email"
      prepend-inner-icon="mdi-email"
      :rules="[rules.required, rules.email]"
      variant="outlined"
      density="comfortable"
      class="mb-3"
    />

    <!-- NOMBRE -->
    <v-text-field
      v-model="usuario.nombre"
      label="Nombre"
      prepend-inner-icon="mdi-account"
      :rules="[rules.required]"
      variant="outlined"
      density="comfortable"
      class="mb-3"
    />

    <!-- USERNAME -->
    <v-text-field
      v-model="usuario.username"
      label="Usuario"
      prepend-inner-icon="mdi-account-circle"
      :rules="[rules.required]"
      variant="outlined"
      density="comfortable"
      class="mb-3"
    />

    <!-- PASSWORD -->
    <v-text-field
      v-model="usuario.password"
      label="Contraseña"
      prepend-inner-icon="mdi-lock"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      :type="showPassword ? 'text' : 'password'"
      @click:append-inner="showPassword = !showPassword"
      :rules="[rules.required, rules.minPassword]"
      variant="outlined"
      density="comfortable"
      class="mb-3"
    />

    <!-- SELECT DE ROL -->
    <v-select
      v-model="usuario.rol"
      :items="items"
      label="Rol"
      :rules="[rules.required]"
      variant="outlined"
      density="comfortable"
      class="mb-4"
    />

    <!-- BOTÓN -->
    <v-btn
      :loading="loading"
      :disabled="!valid"
      color="primary"
      size="large"
      block
      @click="crearUsuario"
    >
      <v-icon left class="mr-2">mdi-content-save</v-icon>
      Guardar Usuario
    </v-btn>

    <!-- ALERTA DE ÉXITO -->
    <v-alert
      v-if="success"
      type="success"
      class="mt-4"
      border="start"
      elevation="2"
      prominent
      closable
    >
      Usuario creado correctamente 🎉
    </v-alert>

    <!-- ALERTA DE ERROR -->
    <v-alert
      v-if="error"
      type="error"
      class="mt-4"
      border="start"
      elevation="2"
      prominent
      closable
    >
      Ocurrió un error al crear el usuario ❌
    </v-alert>

  </v-form>
</template>



<script setup>
import { reactive, ref } from 'vue'
import usuarioservice from '@/services/usuarioservice'

const emit = defineEmits(['actualiza'])

const form = ref(null)
const valid = ref(false)
const loading = ref(false)
const success = ref(false)
const error = ref(false)
const showPassword = ref(false)

const items = ['Admin', 'Alumno', 'Docente', 'Secretaria']

const usuario = reactive({
  username: "",
  password: "",
  email: "",
  nombre: "",
  rol: ""
})

/* VALIDACIONES */
const rules = {
  required: v => !!v || "Este campo es obligatorio",
  email: v => /.+@.+\..+/.test(v) || "Email inválido",
  minPassword: v => (v && v.length >= 6) || "La contraseña debe tener al menos 6 caracteres",
}

/* FUNCIÓN PARA CREAR USUARIO */
const crearUsuario = async () => {
  const isValid = await form.value.validate()
  if (!isValid.valid) return    

  loading.value = true
  success.value = false
  error.value = false

  try {
    const result = await usuarioservice.usuario(usuario)
    success.value = true
     emit('actualiza')
    limpiarFormulario()
   

  } 
  catch (e) {
    error.value = true
  } 
  finally {
    loading.value = false
  }
}

/* LIMPIAR FORMULARIO */
const limpiarFormulario = () => {
  usuario.username = ""
  usuario.password = ""
  usuario.email = ""
  usuario.nombre = ""
  usuario.rol = ""
  form.value.resetValidation()
}
</script>
