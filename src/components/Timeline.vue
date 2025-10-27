<template>
  <div class="mx-auto" style="max-width: 80%;">
    <v-timeline align="start">
      <v-timeline-item
        v-for="(event, i) in events"
        :key="i"
        :dot-color="event.color"
        size="small"
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 font-weight-bold text-${event.color}`"
            v-text="event.year"
          ></div>
        </template>
        <div>
          <h2 :class="`mt-n1 font-weight-medium mb-2 text-${event.color}`">
            {{ event.title }}
          </h2>
          <p>{{ event.description }}</p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup>
const events = [
  {
    year: '1985',
    color: 'solid #1976d2',
    title: 'Fundación del Liceo',
    description:
      'Se crea el Liceo Guillermo Valencia como una institución comprometida con la formación académica y humana, iniciando con los niveles de primaria y un pequeño grupo de docentes visionarios.',
  },
  {
    year: '1995',
    color: 'solid #1976d2',
    title: 'Expansión Académica',
    description:
      'Se amplía la cobertura educativa con la apertura del nivel de secundaria y la creación de nuevos espacios pedagógicos, fortaleciendo la enseñanza en ciencias, arte y cultura.',
  },
  {
    year: '2005',
    color: 'solid #1976d2',
    title: 'Integración Tecnológica',
    description:
      'La institución incorpora el uso de herramientas tecnológicas en sus procesos de enseñanza-aprendizaje, promoviendo competencias digitales en docentes y estudiantes.',
  },
  {
    year: '2015',
    color: 'solid #1976d2',
    title: 'Reconocimiento Regional',
    description:
      'El Liceo Guillermo Valencia recibe distinciones por su innovación pedagógica y su compromiso con la educación inclusiva, destacándose en proyectos científicos y culturales.',
  },
  {
    year: '2025',
    color: 'solid #1976d2',
    title: 'Transformación y Futuro',
    description:
      'Se consolida como una comunidad educativa moderna, sostenible y digital, que integra la educación ambiental, la tecnología y los valores humanos como pilares del aprendizaje.',
  },
]
</script>
