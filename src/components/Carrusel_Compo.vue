<template>
  <v-carousel
    height="700"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide) in slides" :key="i"
       :src="slide"
        cover
    >
    
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
  const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]
  const slides = [
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHHa2AN9Bmf7f9xip8RVE4Ru-sskeApsuKOyHpcbk0JlC30CE-loLpNGzjZ07Ii1aD68DjqhcF7tI0KvHp200uQ1cYSaH7nAAYghKQhNgTIZ2JVEqy3HNbo7zp_P44804eKrT2Wi6n3bE/s1600/12813992_170482220006801_487748578189376616_n+-+copia.jpg',
    'https://www.chicanoticias.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-11-at-10.02.03-AM.jpeg',
    'https://cncmonteria.com/wp-content/uploads/2022/08/FB_IMG_1659921250321.jpg',
    'https://larazon.co/wp-content/uploads/2021/07/1-2.jpeg',
  ]
</script>