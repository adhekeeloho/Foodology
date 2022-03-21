<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app style="background: linear-gradient(to right, #004c4c  0%, #1EA1A1 100%);"  dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6" style="font-family: 'Poppins', sans-serif; ">
            <v-icon x-large class="pr-2">mdi-pizza</v-icon> Foodology
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      

      <v-list dense nav 
      
      >
        <v-list-item  v-for="item in items" :key="item.title" :to="item.to" link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-medium" style="font-family: 'Poppins', sans-serif; ">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-img
        class="grace"
        style="
          position: absolute;
          bottom: 0px;
          background: inherit;
          margin-bottom: 20px;
        "
        height="200"
        contain
        src="../src/assets/Frying-1.png"
      ></v-img>
    </v-navigation-drawer>

    <v-app-bar app style="background: linear-gradient(to right, #1EA1A1  0%, #004c4c 100%);" dark>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          
          contain
          position="end"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="font-family: 'Poppins', sans-serif; ">Pizza Heaven</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon link v-if="this.$store.state.win == false"  >
        <router-link to="/checkout" class="line">
          <v-icon color="white">mdi-cart</v-icon>
          <span class="Cart" style="font-family: 'Poppins', sans-serif; ">{{
            this.$store.state.currentSelection.length
          }}</span>
        </router-link>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    items: [
      { title: "About", icon: "mdi-account-group", to: "/about" },
      { title: "Menu", icon: "mdi-pizza", to: "/" },
    ],
  }),

};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.grace {
  border: none !important;
}

.Cart {
  color: white;
  position: absolute;
  top: -13px;
  right: 6px;
}

.line{
  text-decoration: none;
  color: inherit;
}
</style>
