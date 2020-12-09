<template>
  <div class="out">
    <navbar />
    <div class="in">
      <div class="columns" style="margin-bottom: 1.5rem">
        <div class="column">
          <navermap :nameOfChild = data> </navermap>
          <!-- <input v-model="msg">
          <dynamic-props :message="msg" /> -->
        </div>
        <div class="column">
          <covid19all />
          <covidslide :nameOfChild = data> </covidslide>

        </div>
      </div>
    </div>
  </div>
</template>



<script>


import navbar from "./components/navbar";
import navermap from "./components/navermap";
import covid19all from "./components/covid19all";

import covidslide from "./components/covidslide";

export default {

  
  name: "app",
  components: {
    navbar,
    'navermap' : navermap,
    covid19all,
    covidslide,
  },
  data: function () {
    return {
      msg: 'test',
      data: ""
    }
  },
  methods: {
    readCovid19Sido() {
      this.$axios
        .get(
          "http://localhost:9090/coronamap/sido?startCreateDt=" +
            String(this.$moment().subtract(2, "days").format("YYYYMMDD")) +
            "&endCreateDt=" +
            String(this.$moment().format("YYYYMMDD"))
            
        )
        .then((res) => {
          this.data = res;
        })

    }
  },
  created () {
    this.readCovid19Sido();
  }
}
</script>

<style scoped>
.in {
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

</style>