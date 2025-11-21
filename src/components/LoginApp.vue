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
        style="background-color: #f8f9fa;"
      >
        <v-card>    
         <LoginApp2></LoginApp2>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>


<style>
.h-100 {
  height: 100%;
}
</style>
