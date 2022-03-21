<template>
  <div class="about">
    <div>
    <div data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine">
      <v-img dark src="../assets/5889513.jpg"> </v-img>
    </div>
    <div class="mt-5" data-aos="fade-up-left"
    data-aos-offset="500"
     data-aos-easing="ease-in-sine"
     >
      <section class="overflow-hidden">
        <v-row no-gutters>
          <v-col md="6">
            <v-img
              class="rounded-xl ma-5"
              :src="require('../assets/pizza-gc8cb886e2_1920.jpg')"
              height="auto"
            />
          </v-col>

          <v-col
            class="align-content-space-between layout wrap pa-5"
            cols="12"
            md="6"
          >

            <v-row align="center" justify="center">
              <v-col class="mt-5">
                <h1 class="do" style="font-family: 'Poppins', sans-serif">About Us</h1>
                <p style="font-family: 'Poppins', sans-serif">
                 As Longtime champions of produce-driven pizza making, Foodology has been in business for fifteen wholesome years. At Foodology, we continue our dedication to create tasty excellent hand made pizzas.
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </section>
    </div>
    <div class="mt-10" data-aos="fade-down-right"
    data-aos-offset="500"
     data-aos-easing="ease-in-sine"
     >
      <section id="about" class="overflow-hidden">
        <v-row class="white" no-gutters>
          <v-col class="pa-5" cols="12" md="6">
            
            <h1 class="do  mt-5" style="font-family: 'Poppins', sans-serif">Who We Are</h1>
            <p class="mb-5" style="font-family: 'Poppins', sans-serif">
              Serving up a simply straightforward (and straight-up savory) pizza menus of Northern Italian classics like spicey pizza, sussage Pizza, chicken pizza, beef pizza, etc.
            </p>
            <p class="mb-5" style="font-family: 'Poppins', sans-serif">
               We are known as a world class pizza Heaven from the inception of service to the fulfilling tastes. The Foodology is a love letter to Italy woven from a different cloth. 
            </p>
          </v-col>

          <v-col md="6">
            <v-img
            class="rounded-xl ma-5"
              :src="require('../assets/italian-cuisine-g6ef84f09b_1920.jpg')"
              height="auto"
            />
          </v-col>
        </v-row>
      </section>
    </div>
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
      <h1 class="text-center mb-5 mt-16 do" style="font-family: 'Poppins', sans-serif"><u>How To Place an Order for Pizza</u></h1>
      <v-timeline
        align-top
      :dense="$vuetify.breakpoint.smAndDown"
      >
        <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
      class="mx-5"
      >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="text-h6" style="font-family: 'Poppins', sans-serif">
          {{item.title}}
        </v-card-title>
        <v-card-text class="white text--primary" style="font-family: 'Poppins', sans-serif">
          <p>{{item.word}}</p>
          
        </v-card-text>
      </v-card>
       </v-timeline-item>
        </v-timeline>
    </div>
    <div class="mx-16 turn" data-aos="fade-left"
      >
      <h1 class="text-center mb-5 do" style="font-family: 'Poppins', sans-serif"><u>Frequently Asked Questions (FAQs)</u></h1>
      <v-row justify="center">
        <v-expansion-panels accordion dark
        class="rounded-xl"
        >
        <v-expansion-panel
        v-for="(question,i) in questions"
        :key="i"
        >
        <v-expansion-panel-header class="us" style="font-family: 'Poppins', sans-serif" >{{question.title}}</v-expansion-panel-header>
        <v-expansion-panel-content class="spell" style="font-family: 'Poppins', sans-serif">
          {{question.word}}
          </v-expansion-panel-content>
         </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
    <div
      class="mb-3 we"
      align="center"
      justify="center" >
      <v-icon class="do mr-5" large>
        mdi-instagram
      </v-icon>
      <v-icon class="do mr-5" large>
        mdi-facebook
      </v-icon>
      <v-icon class="do mr-5" large>
        mdi-twitter
      </v-icon>
      <v-icon class="do mr-5" large>
        mdi-snapchat
      </v-icon>
      <v-icon class="do" large>
        mdi-whatsapp
      </v-icon>
    </div>
    <div class="mb-3 mt-5"
      align="center"
      justify="center"
      >
      <p class="do" style="font-family: 'Poppins', sans-serif">Foodology (Pizza Heaven) <v-icon class="do">mdi-copyright</v-icon> 2022</p>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
        {
          color: '#004c4c',
          title: 'Click On Menu',
          word: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          icon: 'mdi-star',
        },
        {
          color: '#1EA1A1',
          title: 'Select Pizza Options',
          word: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          icon: 'mdi-book-variant',
        },
        {
          color: '#004c4c',
          title: 'Click on Checkout to confirm Order ',
          word: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          icon: 'mdi-truck-delivery',
        },
        {
          color: '#1EA1A1',
          title: 'Order Delivered to you',
          word: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          icon: 'mdi-pizza',
        },
      ],
      questions: [
        {
          title: 'How do i place an order?',
          word: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
        },
        {
          title: 'How long does the order take before delivery?',
          word: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
        },
        {
          title: 'Are there extra charges on delivery? ',
          word: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
        },
        {
          title: 'What time does the delivery option for order ends?',
          word: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
        },
         {
          title: 'Do you accept payment on delivery?',
          word: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
        },
      ],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.do {
  color: #004c4c;
}

.we {
  margin-top: 100px;
}

.turn{
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 100px;
  margin-right: 100px;
}
.us{
  background: linear-gradient(to right, #1EA1A1  0%, #004c4c 100%);;
  color: white;
}

.spell{
  background:linear-gradient(to right, #004c4c  0%, #1EA1A1 100%);;
  color: white;
}
</style>
