<template>
  <div @click="redirectToAbout" class="home">
    <div class="container">
      <div class="title">
        ARSENE
      </div>
      <div class="subtitle">Votre coach numérique</div>
    </div>

  </div>
</template>

<script>

export default {
  name: "HomePage",
  methods: {
    redirectToAbout() {

      this.$router.push("/firstScreen");
    }
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #50C878; /* Vert */
  cursor: pointer;
  margin: -250px;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.container {
  text-align: center;
}

.title {
  font-weight: 900;
  font-style: italic;
  font-size: 64px;
  line-height: 60px;
  text-align: center;
  margin: 0;
  color: white;
}

.subtitle {
  font-size: 16px;
  color: white;
  line-height: 28px; /* Hauteur de ligne */
  text-align: center;
  font-weight: 400; /* Poids du texte */
}
.mini-footer {
  width: 100%; /* Largeur totale */
  display: flex;
  justify-content: center; /* Centre la barre horizontalement */
  align-items: center;
  padding: 0;
  margin: 0;
}

/* Style pour la mini barre blanche */

</style>
