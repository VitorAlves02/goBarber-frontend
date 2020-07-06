<template>
  <v-app id="inspire">
    <painel>
      <img style="margin-bottom: 10px" src="../assets/img/logo.svg" alt="goBarber" />
      <br />
      <v-form @submit.prevent="login" id="login-form" ref="loginForm">
        <v-text-field
          class="input"
          hide-details
          type="email"
          label="Seu e-mail"
          single-line
          solo
          background-color="rgba(0,0,0,0.1)"
          required
          v-model="form.email"
        ></v-text-field>

        <v-text-field
          class="input"
          hide-details
          color="#FFF"
          type="password"
          label="Sua senha secreta"
          single-line
          solo
          background-color="rgba(0,0,0,0.1)"
          required
          v-model="form.senha"
        ></v-text-field>

        <v-btn
          type="submit"
          form="login-form"
          class="cor-botao"
          color="#3b9eff"
          :disabled="!form.senha || !form.email"
          large
          style="margin-bottom:10px; margin-top:10px"
        >Acessar</v-btn>
      </v-form>

      <p>
        <router-link class="criar-conta" :to="{name: 'cadastro'} ">Criar conta gratuita</router-link>
      </p>
    </painel>
  </v-app>
</template>

<script>
import Painel from "../components/Painel.vue";

export default {
  components: {
    painel: Painel
  },
  data() {
    return {
      form: {
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    async login() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
.input {
  margin-bottom: 15px !important;
  color: white !important;
}

.criar-conta {
  color: white;
}

.cor-botao {
  text-decoration: none !important;
  color: white !important;
  width: 100% !important;
}

a {
  text-decoration: none;
}

#inspire {
  background: none;
}
</style>