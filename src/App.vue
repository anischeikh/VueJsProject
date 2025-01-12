<template>
  <v-app>
    <router-view /> <!-- Vue Router s'occupe d'afficher le bon composant -->
  </v-app>
</template>

<script>

export default {
  name: "App"
};
</script>


<style>


h1, h2, h3, .title {
  font-family: 'Rubik', sans-serif;
}
body {
  margin-left: 200px;
}

/* Définir la police Inter pour le texte général */
body, p, .subtitle {
  font-family: 'Inter', sans-serif;
}


</style>
