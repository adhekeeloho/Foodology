<template>
  <div class="menu">
    <div data-aos="fade-up"
    data-aos-offset="500"
     data-aos-easing="ease-in-sine"
    >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in this.$store.state.cards"
            :key="card.title"
            cols="12"
            sm="4"
          >
            <v-card color="teal lighten-5 shadow" :elevation="hover ? 16 : 8" class="ma-2 rounded-xl">
              <div
                class="d-flex flex-column justify-space-between align-center"
              >
                <v-img
                  :src="card.src"
                  class="white--text mt-3"
                  gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                  height="180"
                  width="450"
                >
                </v-img>
              </div>
              <v-card-title style="font-family: 'Poppins', sans-serif; " v-text="card.title"></v-card-title>
              <v-card-subtitle class="font-weight-medium" style="font-family: 'Poppins', sans-serif; "
                >${{ card.amount }}</v-card-subtitle
              >
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  class="rounded-pill btn"
                  v-on:click="storeMenuOption( card)"   
                >
                  <span style="font-family: 'Poppins', sans-serif; "> Add </span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: function () {
    return {};
  },
  async mounted() {
    console.log(this.$store.state.cards);
  },

  methods: {
    storeMenuOption: function (card) {
         console.log(card)
         if (this.$store.state.currentSelection.length === 0){
              this.$store.commit("ADD_CART", card);
         } else {
              const anItem = this.$store.state.currentSelection.find(
                  (item)=>item.id === card.id);
                  if (anItem ){
                          return alert("Item has been added already")
                          }
                        this.$store.commit("ADD_CART", card);  
         }
      }   
  }
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.btn {
    background: linear-gradient(to right, #004c4c  0%, #1ea1a1 100%);
    border: none;
    height: 45px;
    transition: all 3s
}

.btn:hover {
    background: linear-gradient(to right, #1ea1a1 0%, #004c4c 100%)
}

.btn:focus {
    box-shadow: none
}
</style>