<template>
    <div class="registration-container">
      <h1>INSCRIVEZ VOUS</h1>
      <p class="subtitle">Commençons par faire connaissance.</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="lastName">Nom(s)</label>
          <input type="text" id="lastName" v-model="form.lastName" required />
        </div>
  
        <div class="form-group">
          <label for="firstName">Prénom(s)</label>
          <input type="text" id="firstName" v-model="form.firstName" required />
        </div>
  
        <div class="form-group">
          <label for="phone">Téléphone</label>
          <input type="tel" id="phone" v-model="form.phone" required />
        </div>
  
        <div class="form-group">
          <label for="email">Mail</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
  
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <div class="password-input">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="form.password"
              required
            />
            <button type="button" @click="togglePasswordVisibility">
              👁️
            </button>
          </div>
        </div>
  
        <div class="form-group terms">
          <label>
            <input type="checkbox" v-model="form.acceptTerms" required />
            J'ai lu et j'accepte les CGU et la Politique de confidentialité
          </label>
        </div>
  
        <button type="submit" class="btn-continue" :disabled="!isFormValid">
          Continuer
        </button>
      </form>
  
      <p class="existing-account">
        Vous avez déjà votre coach ? <a href="#">Connectez-vous maintenant</a>
      </p>
    </div>
  </template>
  
  <script>
export default {
  name: 'Inscription',

  data() {
    return {
      form: {
        lastName: '',
        firstName: '',
        phone: '',
        email: '',
        password: '',
        acceptTerms: false,
      },
      showPassword: false,
    };
  },

  computed: {
    isFormValid() {
      const { lastName, firstName, phone, email, password, acceptTerms } = this.form;
      return (
        lastName &&
        firstName &&
        phone &&
        email &&
        password &&
        acceptTerms
      );
    },
  },

  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    submitForm() {
      if (this.isFormValid) {
        alert('Formulaire soumis avec succès !');
        console.log('Données du formulaire :', this.form);
      }
    },
  },
};
</script>

  
  <style scoped>
  /* Importation des polices via Google Fonts */
 
  
  .registration-container {
    max-width: 4000px;    
    text-align: left;
    color: black;
    background-color: white;
  }
  h1 {
   
    font-size: 51px;
    font-weight: 999;
    text-align: center;
    margin-bottom: 10px;
    color: black;
  }
  .subtitle {
   
    font-size: 16px;
    text-align: center;
    margin-bottom: 30px;
    color: black;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .form-group {
    margin-bottom: 20px;
  }
  label {
   
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
    color: black;
  }
  input[type='text'],
  input[type='tel'],
  input[type='email'],
  input[type='password'] {
    width: 100%;
    padding: 10px;
    
    font-size: 14px;
    margin-top: 5px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: white;
    color: black;
  }
  input::placeholder {
    color: black;
  }
  .password-input {
    display: flex;
    align-items: center;
  }
  .password-input button {
    margin-left: 5px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: black;
  }
  .terms label {
    
    font-size: 12px;
    line-height: 1.5;
  }
  .btn-continue {
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    
    cursor: pointer;
    margin-top: 10px;
  }
  .btn-continue:disabled {
    background-color: black;
    color: black;
    color:aliceblue;
    cursor: not-allowed;
    border-radius: 2px;
  }
  .existing-account {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
    font-family: 'Inter', sans-serif;
  }
  .existing-account a {
    color: black;
    text-decoration: underline;
    cursor: pointer;
  }
  </style>
  