<template>
  <v-app>
    <vue-progress-bar></vue-progress-bar>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  onIdle() {
    if (this.$store.getters.GET_TOKEN.length !== 0) {
        this.$store.dispatch('SIGN_OUT_USER')
    }
  },
};
</script>

<style>
@font-face {
  font-family: "MontserratBold";
  src: url('./font/Montserrat-Bold.ttf');
}
@font-face {
  font-family: "MediumExtraLight";
  src: url('./font/Montserrat-ExtraLight.ttf');
}
@font-face {
  font-family: "MediumMedium";
  src: url('./font/Montserrat-Medium.ttf');
}
@font-face {
  font-family: "Regular";
  src: url('./font/OpenSans-Regular.ttf');
}
@font-face {
  font-family: "Bold";
  src: url('./font/OpenSans-Bold.ttf');
}

.v-notices .v-toast .v-toast-text {
    font-family: "MontserratBold";
}


</style>
