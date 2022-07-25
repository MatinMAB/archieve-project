import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  rtl : true,
  theme: {
    themes: {
      light: {
        pallete1: "#141E27",
        pallete2:  "#203239",
        pallete3: "#5fb7e4",
        pallete4: "#CCFFFF",
      },
    },
  },
});
