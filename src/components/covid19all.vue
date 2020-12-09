<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <h1>전국 확진자 현황</h1>
          <hr style="border: solid 2px black;"/>

          <div class="columns">
          <div class="column">
            <h2>확진 : {{decideCnt}} <hr /> 검사중 : {{examCnt}}</h2>
          </div>
          <div class="column">
            <h2>격리해제 : {{clearCnt}} <hr /> 사망자 : {{deathCnt}}</h2>

          </div>
        </div>

        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
          decideCnt: "", 
          examCnt: "",
          clearCnt: "",
          deathCnt: ""
    };
  },
  methods: {

    readCovid19All() {
      this.$axios
        .get(
          "http://localhost:9090/coronamap/all?startCreateDt=" + String(this.$moment().subtract(2, 'days').format('YYYYMMDD')) + "&endCreateDt=" + String(this.$moment().format('YYYYMMDD'))
        )
        .then((res) => {

          var cnt = 1;

          if(res.data.item[2] != null) {
            cnt=2;
          }

          this.decideCnt = res.data.item[0].decideCnt;
          this.examCnt = res.data.item[0].examCnt;
          this.clearCnt = res.data.item[0].clearCnt;
          this.deathCnt = res.data.item[0].deathCnt;
        });
    },
  },

  mounted() {
    this.readCovid19All();
  },

  
  
};
</script>

<style scoped>
hr {
  border: solid 1px black;
}

h1 {
  text-align: center;
  font-size: 1.5rem;
}
h2 {
  text-align: center;
  font-size: 1em;
}
</style>