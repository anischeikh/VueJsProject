<template>
  <div class="welcome-item">
    <!-- Navigation placée correctement -->
    <div class="navigation">
      <slot name="navigation"></slot>
    </div>

    <!-- Barre de progression -->
    <div class="progress-bar">
      <div class="filled" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- Contenu principal -->


    <!-- Sous-titre -->
    <h3 class="sub-title">
      <slot name="sub-title">{{ subtitle }}</slot>
    </h3>

    <!-- Contenu supplémentaire -->
    <div class="extra-content">
      <slot name="extra-content"></slot>
    </div>

    <!-- Boutons -->
    <div class="buttons">
      <button class="primary-btn" @click="onSignup">Inscrivez-vous</button>
      <button class="secondary-btn" @click="onLogin">Connectez-vous</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      default: 0,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  methods: {
    onSignup() {
      this.$emit('navigate-signup');
    },
    onLogin() {
      this.$emit('navigate-login');
    },
  },
};
</script>

<style scoped>


.welcome-item {
  max-width: 320px;

  margin-left: 200px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #fff;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background-color: whi;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
}

.progress-bar .filled {
  height: 100%;
  background-color: black;
  transition: width 0.3s ease;
}


.sub-title {
  font-size: 30px;
  font-weight: 1000;
  color: #444;
  margin: 10px 0;
}

.extra-content {
  padding :0px;
  margin: 0px;
  font-size: 14px;
  color: #333;
}

.buttons {
  margin-top: 20px;

}

.primary-btn {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 0; 
  width: 100%;
  transition: background-color 0.3s ease;

  position: relative;
  top: 3cm;
}


.primary-btn:hover {
  background-color: #333;
}

.secondary-btn {
  background: none;
  color: black;
  border: none;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
  width: 100%;
  margin-bottom: 0; /* Réinitialise la marge si nécessaire */

  position: relative; /* Nécessaire pour utiliser `top` */
  top: 3cm; /* Déplace le bouton de 5 cm vers le bas */
}


.secondary-btn:hover {
  color: gray;

}
</style>
