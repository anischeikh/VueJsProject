<template >

  <WelcomeItem :progress="33">


    <template #sub-title>ENTRAÎNEZ-VOUS</template>


    <template #extra-content>
      <p>Commencez des séances sur-mesure, conçues par des experts et boostées par l’IA, pour atteindre vos objectifs </p>

    </template>

    
    <template #navigation>
      <div class="navigation">

        <router-link to="/secondScreen" class="nav-arrow next">
          <img src="../assets/fleche-suiv.png" alt="Suivant" />
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


.welcome-item {
  max-width: 60%;
  padding: 20px 10px;
  min-height: calc(100vh + 3cm);
  text-align: center;
  border-radius: 2px;
  background: #fff;
  max-height: 2%;
  margin-bottom: 0;

}


.nav-arrow {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor: pointer;

}

.nav-arrow img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.nav-arrow:hover {
  transform: scale(1.2);
}


.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
}


.progress-bar {
  width: 90%;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px auto;
}

.progress-bar > .progress {
  width: 100%;
  height: 100%;
  background-color: #50c878;
  transition: width 0.3s ease;
}

</style>
