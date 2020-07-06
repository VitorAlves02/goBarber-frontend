import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#1565C0",
        "primary-variant-one": "#1ECB88",
        "primary-variant-two": "#00449B",
        secondary: "#009FB7",
        success: "#1ECB88",
        error: "#EF1F65",
        warning: "#FD693E",
        light: "#F0F2F5",
        ice: "#DCE1ED",
        medium: "#A7AFC3",
        grey: "#697785",
        black: "#424F5B"
      }
    }
  },
  
  icons: {
    iconfont: "mdiSvg"
  }
});
