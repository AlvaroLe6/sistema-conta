<script setup>
import Footer from "@/views/Footer.vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import UserProfile from '@/layouts/UserProfile.vue'


const auth = useAuthStore();
</script>
<template>
  <v-app>
    <v-card elevate="3" class="fill-height">
      <v-app-bar app color="#162D4B" class="app-bar" >
        <v-container class="d-flex align-center justify-space-between">

       
          <router-link :to="{ name: 'login' }">
            <img
              src="@/assets/ESCUELA DE NEGOCIOS_HORIZONTAL BLANCO.png"
              alt="80"
              height="80"
            />
          </router-link>
        <div class="app-bar-actions">
          <div 
          v-if="auth.isAuth" 
          >
            <v-btn :to="{ name: 'admin-list-contabilidad' }" 
            class="button"> 
            Admin 
          </v-btn>      
            <UserProfile />
          </div>
          <div v-else>
            <v-btn :to="{ name: 'login' }"> Iniciar Sesión </v-btn>
          </div>
        </div>
       </v-container>
      </v-app-bar>
      <v-main style="margin-bottom: 50px">
        <v-container  fluid="true">
          <router-view />
        </v-container>
      </v-main>
    </v-card>
    <Footer />
  </v-app>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: "Cursos", route: "cursos" },
      { title: "Webinar", route: "webinar" },
    ],
  }),
  methods: {
    redirectToView(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
<style>
.app-bar-container {
  display: flex; /* Activa flexbox */
  align-items: center; /* Alinea los elementos verticalmente al centro */
  justify-content: space-between; /* Espacio entre el logo y las acciones del lado derecho */
  width: 100%; /* Asegura que el contenedor use todo el ancho disponible */
}

.app-bar-actions {
  display: flex; /* Activa flexbox para los elementos de la derecha */
  align-items: center; /* Alinea los elementos verticalmente al centro */
}

.button {
  margin-right: 20px; /* Espacio a la derecha del botón Admin */
}
.container {
    text-align: center;
}

.button {
    margin-bottom: 10px;
}
.app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem; /* ajusta el relleno según sea necesario */
}


.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem; /* espacio entre el botón y UserProfile */
}
</style>