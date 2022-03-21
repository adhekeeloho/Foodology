<template>
  <div class="delivery">
    <div class="mt-1" >
       <div v-if="fresh" 
        align="center"
        justify="center"
        data-aos="fade-left"
        >
        <v-row class="white" no-gutters justify="center">
          <v-col class="pa-5" cols="12" md="6">
            
            <h1 class="do  mt-5" style="font-family: 'Poppins', sans-serif">Thank You for the <br>Purchase.</h1>
            <p class="mb-5" style="font-family: 'Poppins', sans-serif">
              We hope you enjoyed our service.<br> Do comeback again.
            </p>
            
          </v-col>
        </v-row>
      </div>
      <v-container >
        <div v-if="fresh == false" 
        data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     
        >
        <v-row justify="center" >
        <v-col
       
        cols="12"
        md="6"
        
    >
        <v-card ref="form" class="form " style="background: linear-gradient(to right, #1EA1A1  20%, #004c4c 80%);" dark >
          <div align="center"
      justify="center">
          <img  class="typeImg"  src="../assets/undraw_credit_card_re_blml-2.svg" alt="Card image">
          </div>
          <v-form id="signup-form" v-model="valid">
          <div class="flex-row">
              <v-card-text>
                <div class="px-3">
          <v-text-field
          color="#004c4c"
            ref="name"
            :rules="nameRules"
            v-model="name"
            label="Full Name"
            placeholder="John Doe"
            required
            filled
            clearable
            style="font-family: 'Poppins', sans-serif; "
          ></v-text-field>
          </div>
          <div class="px-3">
          <v-text-field
          color="#004c4c"
            ref="number"
            @keypress="validateNumber"
            :rules="numberRules"
            v-model="number"
            label="Card Number"
            placeholder="Card Number"
            required
            filled
            clearable
            style="font-family: 'Poppins', sans-serif; "
          ></v-text-field>
          </div>
          <div
          class="row no-gutters"
            style="display: flex; flex-wrap: wrap;"
              >
              <v-col cols="12" md="4" class="px-3" >
          <v-autocomplete
          color="#004c4c"
            ref="Month"
            v-model="month"
            :rules="[() => !!month || 'This field is required']"
            :items="months"
            label="Month"
            placeholder="Select..."
            required
            filled
            style="font-family: 'Poppins', sans-serif; "
          ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4" class="px-3">
          <v-autocomplete
          color="#004c4c"
            ref="Year"
            v-model="year"
            :rules="[() => !!year || 'This field is required']"
            :items="years"
            label="Year"
            placeholder="Select..."
            required
            filled
            clearable
            style="font-family: 'Poppins', sans-serif; "
          ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4" class="px-3">
          <v-text-field
          color="#004c4c"
            ref="cvv"
            @keypress="validateNumber"
            :rules="cvvRules"
            v-model="cvv"
            label="Cvv"
            placeholder="Cvv"
            required
            filled
            clearable
            style="font-family: 'Poppins', sans-serif; "
          ></v-text-field>
          </v-col>
          </div>
              </v-card-text>
          </div>
          <div align="start"
      justify="start">
          <img  class="tie ml-5 "  src="../assets/paystack-badge-cards-ngn.png" alt="Card image">
          </div>
            <div 
            class="pb-3 mt-1"
      align="center"
      justify="center">
            <v-btn
            style=" font-family: 'Poppins', sans-serif;"
            color="white"
            text
            type="submit" class="button"
            :disabled="!valid"
            @click="submit()"
          >
            Submit
          </v-btn>
            </div>
            </v-form>
        </v-card>
        </v-col>
        </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        fresh:false,
        valid: true,
        number: null,
        name: null,
        month: null,
        year: null,
        cvv: null,
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
        years: ['2022', '2023','2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035',],
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      numberRules: [
        v => !!v || 'card Number is required',
        v => (v && v.length == 16) || 'Card Number must be 16 numbers',
      ],
      cvvRules: [
        v => !!v || 'CVV is required',
        v => (v && v.length == 3) || 'CVV must be  3 numbers',
      ],
      }
    },

    computed: {
      form () {
        return {
          name: this.name,
          number: this.number,
          month: this.month,
          year: this.year,
          cvv: this.cvv,
          
        }
      },
    },


    methods: {
      submit(){
        this.$store.state.win = true;
          this.$data.fresh = true;
          console.log(this.$data.delivered)
          
      },
      
      validateNumber: (event) => {
      let keyCode = event.keyCode;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },

    },
  }
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.card-image {
  width: 425px;
  position: absolute;
  top: -125px;
  left: 100px;
  z-index: 1;
  
}

.card-image-shadow {
  position: absolute;
  width: 410px;
  height: 253px;
  top: -113px;
  left: 107px;
  border-radius: 15px;
  box-shadow: -5px 10px 32px 0px #000;
  z-index: 0;
}

.flex-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}


.form {
  border-radius: 15px;
  background-color: #fff;
  min-width: 100%;
  padding-top: 15px;
  position: relative;
  box-shadow: -5px 7px 32px 0px rgba(0, 0, 0, 0.35);
}

.typeImg {
    max-width: 30%;
    object-fit: contain;
    max-height: 30%;
    object-position: top;
  }

.tie {
    max-width: 40%;
    object-fit: contain;
    max-height: 40%;
    object-position: top;
  }

.do {
  color: #004c4c;
}
@media (max-width: 700px){

}
</style>