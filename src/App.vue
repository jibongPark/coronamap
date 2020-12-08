<template>
  <div id="contents">
     <input type="text" placeholder="title" v-model="title">
     <input type="text" placeholder="author" v-model="author">
     <button @click="fromSubmit()">submit</button>

    <naver-maps
      :height="height"
      :width="width"
      :mapOptions="mapOptions"
      :initLayers="initLayers"
      @load="onLoad">
      <naver-info-window
        class="info-window"
        @load="onWindowLoad"
        :isOpen="info"
        :marker="marker">
        <div class="info-window-container">
          <h1>{{hello}}</h1>
        </div>
      </naver-info-window>
      <naver-marker :lat="37" :lng="127" @click="onMarkerClicked" @load="onMarkerLoaded"/>
    </naver-maps>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      title:'',
      author:'',
      output:'',

      width: 800,
      height: 800,
      info: false,
      marker: null,
      count: 1,
      map: null,
      isCTT: false,
      mapOptions: {
        lat: 37,
        lng: 127,
        zoom: 10,
        zoomControl: true,
        zoomControlOptions: {position: 'TOP_RIGHT'},
        mapTypeControl: true,
      },
      initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH', 'CHINESE', 'JAPANESE']
    }
  },
  computed: {
    hello() {
      return `Hello, World! × ${this.count}`;
    }
  },
  methods: {
    fromSubmit () {
      this.$axios.get('http://localhost:9090/coronamap/all?startCreateDt=20201204&endCreateDt=20201205')
      .then(res => {
        console.log(res.data)
      })

    },
  onLoad(vue){
    this.map = vue;
    },
  onWindowLoad(that) {
    },
  onMarkerClicked(event) {
    this.info = !this.info;
    },
  onMarkerLoaded(vue) {
    this.marker = vue.marker;
    }
  }

}

</script>

<style scoped>
  .info-window-container {
    padding: 10px;
    width: 300px;
    height: 100px;
  }
</style>