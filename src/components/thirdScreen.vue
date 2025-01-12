<template >

  <WelcomeItem :progress="100">


    <template #sub-title>REUSSISSEZ</template>

    <!-- Contenu supplémentaire -->
    <template #extra-content>
      <p>Sentez-vous fier de chaque étape. Transformez vos efforts en succès, savourez vos progrès et prenez plaisir à chaque victoire. </p>

    </template>

    <!-- Navigation -->
    <template #navigation>
      <div class="navigation">

        <router-link to="/secondScreen" class="nav-arrow prev">
          <img src="../assets/fleche-suiv.png" alt="Précdent" />
        </router-link>
      </div>
    </template>
  </WelcomeItem>
</template>

<script>
import WelcomeItem from '@/components/template.vue';

export default {
  name: 'CheikhPage',
  components: {
    WelcomeItem,
  },
};
</script>

<style scoped>

/* Styles des flèches de navigation */

/* Styles pour agrandir le conteneur principal */
.welcome-item {
  max-width: 60%; /* Largeur ajustée à 90% de l'écran */
  /* Centre horizontalement */
  padding: 20px 10px; /* Ajoute un espace intérieur pour agrandir visuellement */
  min-height: calc(100vh + 3cm); /* Augmente la hauteur du conteneur de 5 cm */
  text-align: center;
  border-radius: 2px;
  background: #fff;
  max-height: 2%; /* Réduction de la hauteur */
  margin-bottom: 0; /* Supprime les espaces externes inutiles */

}

/* Styles des flèches de navigation */
.nav-arrow {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40px; /* Taille ajustée pour les flèches */
  height: 40px;
  margin-right: 20px; /* Espace ajusté à droite */
  cursor: pointer;

}

.nav-arrow img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.nav-arrow:hover {
  transform: scale(1.2); /* Agrandit légèrement au survol */
}

/* Centrer les flèches */
.navigation {
  display: flex;
  justify-content: flex-end; /* Alignement à droite */
  align-items: center;
  margin-top: 20px;
}

/* Progress bar */
.progress-bar {
  width: 90%; /* Largeur ajustée */
  height: 5px;
  background-color: #e0e0e0; /* Couleur de fond */
  border-radius: 10px;
  overflow: hidden;
  margin: 20px auto;
}

.progress-bar > .progress {
  width: 100%; /* Avancée à 100% */
  height: 100%;
  background-color: #50c878; /* Couleur verte */
  transition: width 0.3s ease;
}

</style>
