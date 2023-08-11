import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.vue.bread.recipes',
  appName: 'ionic-vue-bread-recipes',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
