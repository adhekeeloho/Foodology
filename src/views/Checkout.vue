<template>
  <div class="checkout">
    <v-toolbar class="pl-0 mt-5" flat color="teal lighten-5">
      <h3 style="font-family: 'Poppins', sans-serif; ">My Order</h3>
      <v-spacer></v-spacer>
      <div v-if="delivered == false">
      <router-link to= "/" class="line" v-show="$store.state.currentSelection.length > 0" >
      <h6 class="teal--text" style="font-family: 'Poppins', sans-serif; ">Back</h6>
      </router-link>
      </div>
    </v-toolbar>
    <v-app-bar flat color="rgba(0,0,0,0)" class="mt-5">
      <v-btn fab x-small color="teal lighten-5" elevation="0">
        <v-icon color="teal">mdi-alarm</v-icon>
      </v-btn>
      <h5 class="ml-2 grey--text text--darken-2" style="font-family: 'Poppins', sans-serif; ">{{ timestamp }}</h5>
    </v-app-bar>
    <v-app-bar flat color="rgba(0,0,0,0)" class="mt-n5">
      <v-btn fab x-small color="teal lighten-5" elevation="0">
        <v-icon color="teal">mdi-map-marker</v-icon>
      </v-btn>
      <h5 class="ml-2 grey--text text--darken-2" style="font-family: 'Poppins', sans-serif; ">
        No 14, Ellis Close, Ajah, Lagos
      </h5>
    </v-app-bar>
    <v-divider></v-divider>

    <v-container>
      <h1
      style="font-family: 'Poppins', sans-serif; "
        class="text-center mt-3 grey--text text--darken-2"
        v-if="$store.state.currentSelection.length <= 0"
      >
        No Cart items
      </h1>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     >
      <v-row
        v-for="card in this.$store.state.currentSelection"
        :key="card.title"
      >
        <v-col cols="12" sm="3" >
          <v-img
            :src="card.src"
            max-height="60"
            max-width="150"
            class="mr-1"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="3" >
          <h4 class="grey--text text--darken-2 ml-5" style="font-family: 'Poppins', sans-serif; ">{{ card.title }}</h4>
          <h4 class="grey--text text--darken-2 ml-5" style="font-family: 'Poppins', sans-serif; ">${{ card.amount }}</h4>
        </v-col>
        <v-col cols="12" sm="6" >
          <div class="qty-minus" v-on:click="minusQty(card)">
            <v-icon small color="teal" elevation="0"> mdi-minus </v-icon>
          </div>
          <div class="qty">{{card.quantity}}</div>
          <div class="qty-plus" v-on:click="plusQty(card)">
            <v-icon small color="teal" elevation="0"  > mdi-plus </v-icon>
          </div>
          <v-btn
            fab
            x-small
            color="teal lighten-5"
            elevation="0"
            class="he"
            v-on:click="deleteCart(card)"
          >
            <v-icon> mdi-close-thick </v-icon>
          </v-btn>
          <strong class="she" style="font-family: 'Poppins', sans-serif; ">$ {{card.price}}</strong>
        </v-col>
        <p  class="hline"> </p>
      </v-row>
      </div>
    </v-container>
    <v-toolbar class="pl-0" flat color="teal lighten-5" 
    v-show="$store.state.currentSelection.length > 0"
    >
      <h3 style="font-family: 'Poppins', sans-serif; ">Total</h3>
      <v-spacer></v-spacer>
      <h3 style="font-family: 'Poppins', sans-serif; "> 
      $ {{ total() }} </h3>
    </v-toolbar>
     <div v-if="delivered" 
     align="center"
      justify="center"
      class="mt-4"
     data-aos="fade-left"
     >
      <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div class="text-h5 mb-1" style="font-family: 'Poppins', sans-serif; color:#004c4c "  ><u style="font-family: 'Poppins', sans-serif; ">Delivery Details</u></div>
      <p class="text-h6 text--primary" style="font-family: 'Poppins', sans-serif; ">
        {{name}}
      </p>
      <p style="font-family: 'Poppins', sans-serif; ">{{email}}</p>
      <p style="font-family: 'Poppins', sans-serif; " >{{phone}}</p>
      <div class="text--primary" style="font-family: 'Poppins', sans-serif; " >
        {{address}}
        {{city}}

      </div>
    </v-card-text>
      </v-card>
    </div> 
    <div 
    data-aos="fade-up"
     data-aos-anchor-placement="top-center"
    v-if="delivered == false"
    class="mt-10" 
    v-show="$store.state.currentSelection.length > 0">
      <v-row  
      no-gutters>
        <v-col
        class="hidden-sm-and-down mt-16 rounded-l"
        
        md="7"
      >
        <v-img
          class="ml-2"
          :src="require('../assets/undraw_delivery_address_re_cjca.svg')"
          height="50%"
          contain
        />
      </v-col>
    <v-col
       class="pa-5"
        md="5"
    >
    <v-form id="signup-form" v-model="valid"
    
     @submit.prevent="processForm">
       <v-card ref="form" style="font-family: 'Poppins', sans-serif; background: linear-gradient(to right, #1EA1A1  20%, #004c4c 80%); " dark>
        <v-card-text>
          <v-text-field
          color="#004c4c"
          :counter="25"
            :rules="nameRules"
            v-model="name"
            label="Full Name"
            placeholder="John Doe"
            required
            filled
            clearable
            style="font-family: 'Poppins', sans-serif; "
          > </v-text-field>
          <v-text-field
          color="#004c4c"
            :rules="addressRules"
            v-model="address"
            label="Address"
            placeholder="No 15 Epe express way"
            counter="40"
            required
            filled
            clearable
            style="font-family: 'Poppins', sans-serif; "
          ></v-text-field>
          <v-text-field
          color="#004c4c"
            v-model="phone"
            label="Phone Number"
            @keypress="validateNumber"
            :rules="numberRules"
            required
            placeholder="070"
            filled
            clearable
            style="font-family: 'Poppins', sans-serif; "
          > </v-text-field>
           <v-text-field
           placeholder="E-mail"
            
            filled
            :rules="[rules.email]"
            clearable
            style="font-family: 'Poppins', sans-serif; "
          v-model="email"
          label="E-mail"
          required
          color="#004c4c"
        ></v-text-field>
          <v-text-field
          color="#004c4c"
            :rules="cityRules"
            v-model="city"
            label="City"
            placeholder="Lekki"
            required
            filled
            clearable
            style="font-family: 'Poppins', sans-serif; "
          >  </v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
          </v-slide-x-reverse-transition>
          <v-btn
            color="white"
            text
            :disabled="!valid"
            type="submit" class="button"
            style="font-family: 'Poppins', sans-serif; "
            @click="submit()"
            
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card> 
    </v-form>
    </v-col>
  </v-row>
    </div>
    <div class="text-center mt-10 mb-10"
    v-show="$store.state.currentSelection.length > 0"
    v-if="enter"
    
    >
    <router-link to= "/delivery" class="line" >
      <v-btn class="px-15 btn" rounded  dark style="font-family: 'Poppins', sans-serif; "> Checkout </v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
      data: () => ({
        el: '#signup-form',
        email: '',
      valid: true,
      timestamp: '',
      name: '',
      address: '',
      phone: '',
      city: '',
      delivered: false,
      enter:false,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 25) || 'Name must be less than 25 characters',
      ],
      addressRules: [
        v => !!v || 'Address is required',
        v => (v && v.length <= 40) || 'Address must be less than 40 characters',
      ],
      numberRules: [
        v => !!v || 'Phone Number is required',
        v => (v && v.length == 11) || 'Phone Number must be less than 11 characters',
      ],
      cityRules: [
        v => !!v || 'City is required',
        v => (v && v.length <= 15) || 'City must be less than 15 characters',
      ],
    }),

      computed: {
      form () {
        return {
          name: this.name,
          address: this.address,
          city: this.city,
          phone: this.phone,

        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    created() {
                setInterval(this.getNow, 1000);
            },

  methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? `Hey! I'm required`
          : ''

        return true
      },

      validate () {
        this.$refs.form.validate()
      },

    deleteCart(card) {
      this.$store.state.currentSelection.splice(
        this.$store.state.currentSelection.indexOf(card),
        1
      );
    }, 

    processForm: function() {
      console.log({ name: this.name, address: this.address, phone: this.phone, city: this.city, email: this.email, })
      alert('processing')
    },

    getNow: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    this.timestamp = dateTime;
                },
    plusQty(card) {
        const result = this.$store.state.currentSelection.map((data) => {
            if (data.id == card.id) {
             data.quantity +=1; 
             card.price = data.quantity*data.amount;
              return data;
            } else {
              return data;
              }
        }) 
        this.$store.commit("INCREASE_QUANTITY", result)
        console.log(this.$store.state.currentSelection)
        
    },

     minusQty(card) {
        const result = this.$store.state.currentSelection.map((data) => {
            if (data.id == card.id) {
             data.quantity -=1; 
             if (data.quantity < 1){
               data.quantity = 1
             }
             card.price = data.quantity*data.amount;
              return data;
            } else {
              return data;
              }
        }) 
        this.$store.commit("INCREASE_QUANTITY", result)
        console.log(this.$store.state.currentSelection)
        
    },
    

      submit(){
          this.$data.delivered = true;
          this.$data.enter = true;
          console.log(this.$data.delivered)
          
      },
   
       validateNumber: (event) => {
      let keyCode = event.keyCode;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },

    total: function(){
      var sum = 0;
      this.$store.state.currentSelection.forEach(function(currentSelection){
            sum += parseInt(currentSelection.price);
      });
        return sum;
    },

  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.she {
  position: absolute;
  right: 20px;
}

.he {
  position: absolute;
  right: 100px;
}

.qty-minus {
  float: left;
  width: 20px;
  margin-left: 40px;
  text-align: center;
  cursor: pointer;
}

.qty {
  float: left;
  width: 20px;
  margin-left: 10px;
  text-align: center;
}

.qty-plus {
  float: left;
  width: 20px;
  margin-left: 10px;
  text-align: center;
  cursor: pointer;
}

.hline { 
  width:100%; 
  height: 1px;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 2%;
  margin-right:2%;
  border: 1px dashed grey; 
  }
  
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

.do {
  color: #004c4c;
}

.line{
  text-decoration: none;
  color: inherit;
}
</style>
