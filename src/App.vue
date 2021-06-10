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

body {
  overflow-x: hidden;
  letter-spacing: -0.03em;
  font-weight: 400;
  line-height: 1.5;
}
/* @font-face {
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
  font-family: "Light";
  src: url('./font/Montserrat-Medium.ttf');
}
@font-face {
  font-family: "Regular";
  src: url('./font/OpenSans-Regular.ttf');
}
@font-face {
  font-family: "Bold";
  src: url('./font/OpenSans-Bold.ttf');
} */


@font-face {
  font-family: "MontserratRegular";
  src: url("./fonts/Montserrat-Regular.eot");
  src: local("Montserrat Regular"), local("Montserrat-Regular"),
    url("./fonts/Montserrat-Regular.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-Regular.woff") format("woff"),
    url("./fonts/Montserrat-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "MontserratBold";
  src: url("./fonts/Montserrat-Bold.eot");
  src: local("Montserrat Bold"), local("Montserrat-Bold"),
    url("./fonts/Montserrat-Bold.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-Bold.woff") format("woff"),
    url("./fonts/Montserrat-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "MontserratLight";
  src: url("./fonts/Montserrat-Light.eot");
  src: local("Montserrat Light"), local("Montserrat-Light"),
    url("./fonts/Montserrat-Light.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-Light.woff") format("woff"),
    url("./fonts/Montserrat-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "MontserratItalic";
  src: url("./fonts/Montserrat-Italic.eot");
  src: local("Montserrat Italic"), local("Montserrat-Italic"),
    url("./fonts/Montserrat-Italic.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-Italic.woff") format("woff"),
    url("./fonts/Montserrat-Italic.ttf") format("truetype");
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: "MontserratSemiBold";
  src: url("./fonts/Montserrat-SemiBold.eot");
  src: local("Montserrat SemiBold"), local("Montserrat-SemiBold"),
    url("./fonts/Montserrat-SemiBold.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Montserrat-SemiBold.woff") format("woff"),
    url("./fonts/Montserrat-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "MontserratExtraBold";
  src: url("./fonts/Montserrat-ExtraBold.eot");
  src: url("./fonts/Montserrat-ExtraBold.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/Montserrat-ExtraBold.woff") format("woff"),
    url("./fonts/Montserrat-ExtraBold.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
}
.v-notices .v-toast .v-toast-text {
    font-family: "MontserratBold";
}


.item__row {
  display: flex;
  flex-direction: row;
}
.item__column {
  display: flex;
  flex-direction: column;
}
.item__ac {
  align-items: center;
}
.item__jb {
  justify-content: space-between;
}
.item__100 {
  width: 100%;
}
.item__abs {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item__c {
  justify-content: center;
}

</style>
