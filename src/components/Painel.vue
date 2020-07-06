<template>
  <v-app id="inspire">
    <div class="login">
      <div class="login-acoes">
          <slot></slot>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-acoes {
  width: 25%;
  height: 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

#inspire {
  background: none;
}
</style>