<template>
  <v-app id="inspire">
    <painel>
      <img style="margin-bottom: 10px" src="../assets/img/logo.svg" alt="goBarber" />
      <br />

      <v-form>
        <v-text-field
          class="input"
          hide-details
          color="#FFF"
          label="Nome completo"
          single-line
          solo
          background-color="rgba(0,0,0,0.1)"
          required
          v-model="form.nome"
        ></v-text-field>

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
      </v-form>

      <router-link :to="{name: 'home'}">
        <v-btn
          class="cor-botao"
          color="#3b9eff"
          large
          style="margin-bottom:10px; margin-top:10px"
        >Criar conta</v-btn>
      </router-link>

      <p>
        <router-link class="criar-conta" :to="{name: 'login'} ">Já tenho login</router-link>
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
          form:{
              nome: "",
              email: "",
              senha: "",
          }
      }
  }
};
</script>

<style scoped>

.input {
  color: white !important;
  margin-bottom: 15px !important;
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