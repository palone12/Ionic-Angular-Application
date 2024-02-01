import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.photoapp.app',
  appName: 'photoapp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
