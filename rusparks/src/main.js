import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from "@/router/router";


const app=createApp(App)
//components.forEach(component =>{
  //  app.component(component.name, component)
//});
console.log(Object.keys(app));
Object.keys(app).forEach(key=>{
    app.component(components.name, components)
});

app
    .use(router)
    .mount('#app');
