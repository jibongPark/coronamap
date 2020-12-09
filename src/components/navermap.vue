<template>
  <div>
    {{getProps(nameOfChild)}}
    <naver-maps
      :height="height"
      :width="width"
      :mapOptions="mapOptions"
      :initLayers="initLayers"
    >
      <naver-info-window
        class="info-window"
        @load="onWindowLoad"
        :isOpen="info"
        :marker="marker"
      >
      <!-- {{isReload()}} -->
        <div class="info-window-container">
          <h1>{{ printData }}</h1>
        </div>
      </naver-info-window>
      <naver-marker id="seoul_marker" :lat="37.56662" :lng="126.97839" @click="onMarkerClicked(0)" @load="onMarkerLoaded" />
      <naver-marker id="busan_marker" :lat="35.17973" :lng="129.07504" @click="onMarkerClicked(1)" @load="onMarkerLoaded" />
      <naver-marker id="daegu_marker" :lat="35.87121" :lng="128.60173" @click="onMarkerClicked(2)" @load="onMarkerLoaded" />
      <naver-marker id="incheon_marker" :lat="37.456445" :lng="126.705873" @click="onMarkerClicked(3)" @load="onMarkerLoaded" />
      
      <naver-marker id="gwangju_marker" :lat="35.15998" :lng="126.85141" @click="onMarkerClicked(4)" @load="onMarkerLoaded" />
      <naver-marker id="daejeon_marker" :lat="36.35038" :lng="127.38482" @click="onMarkerClicked(5)" @load="onMarkerLoaded" />
      <naver-marker id="ulsan_marker" :lat="35.53913" :lng="129.31174" @click="onMarkerClicked(6)" @load="onMarkerLoaded" />
      <naver-marker id="sejong_marker" :lat="36.47993" :lng="127.28910" @click="onMarkerClicked(7)" @load="onMarkerLoaded" />

      <naver-marker id="gyeonggi_marker" :lat="37.27501" :lng="127.00961" @click="onMarkerClicked(8)" @load="onMarkerLoaded" />
      <naver-marker id="gangwon_marker" :lat="37.88529" :lng="127.72981" @click="onMarkerClicked(9)" @load="onMarkerLoaded" />
      <naver-marker id="chungbuk_marker" :lat="36.63569" :lng="127.49137" @click="onMarkerClicked(10)" @load="onMarkerLoaded" />
      <naver-marker id="chungnam_marker" :lat="36.65910" :lng="126.67308" @click="onMarkerClicked(11)" @load="onMarkerLoaded" />

      <naver-marker id="jeolbuk_marker" :lat="35.82028" :lng="127.10876" @click="onMarkerClicked(12)" @load="onMarkerLoaded" />
      <naver-marker id="jeolnam_marker" :lat="34.81612" :lng="126.46292" @click="onMarkerClicked(13)" @load="onMarkerLoaded" />
      <naver-marker id="gyeongbuk_marker" :lat="36.57595" :lng="128.50559" @click="onMarkerClicked(14)" @load="onMarkerLoaded" />
      <naver-marker id="gyeongnam_marker" :lat="35.23823" :lng="128.69246" @click="onMarkerClicked(15)" @load="onMarkerLoaded" />

      <naver-marker id="jeju_marker" :lat="33.48892" :lng="126.49855" @click="onMarkerClicked(16)" @load="onMarkerLoaded" />
      <naver-marker id="lazaretto_marker" :lat="37.93710" :lng="129.76062" @click="onMarkerClicked(17)" @load="onMarkerLoaded" />
      
    </naver-maps>
  </div>
</template>

<script>
export default {
  name: "navermap",
  data() {
    return {
      width: 500,
      height: 700,
      info: false,
      marker: null,
      count: 1,
      map: null,
      isCTT: false,
      mapOptions: {
        lat: 36.7,
        lng: 128.0,
        zoom: 7,
        zoomControl: false,
        zoomControlOptions: { position: "TOP_RIGHT" },
        mapTypeControl: true,
      },
      initLayers: [
        "BACKGROUND",
        "BACKGROUND_DETAIL",
        "POI_KOREAN",
        "TRANSIT",
        "ENGLISH",
        "CHINESE",
        "JAPANESE",
      ],
      markerList: [],
      covidDataList: [],
      reload: false,
      printData: ""
    };
  },
  computed: {
    hello() {
      return `Hello, World!`;
    },
  },
  props: ['nameOfChild'],
  mounted () {
  },
  methods: {
    onLoad(vue) {
      this.map = vue;
    },
    onWindowLoad(that) {
      this.info = false;
      console.log("onWindowLoad");
    },
    onMarkerClicked(argument) {
      //this.marker = vue.marker;
      if(this.marker == this.markerList[argument]) {
        console.log("Same marker");
        this.info = !this.info;
      }
      else
      {
        console.log("Different marker");
        this.info = !this.info;
        this.marker = this.markerList[argument];
        this.printData = "지역 : "+ this.covidDataList[argument].gubunEn + "확진 : " + this.covidDataList[argument].defCnt + "(" + this.covidDataList[argument].incDec + ")";//this.covidDataList[argument];
        this.reload = true;
      }
      
      console.log(argument);
      //this.info = !this.info;
    },
    onMarkerLoaded(vue) {
      //console.log(vue);
      this.markerList.push(vue.marker);
    },
    isReload() {
      if(this.reload) {
        this.info = true;
        this.reload = false;
        console.log("reload");
      }
      
      
    },
    getProps(argument) {

      if(this.covidDataList.length == 0) {
        var c;
        for(c = 17; c >=0 ; c-- ){
          this.covidDataList.push(argument.data.items.item[c]);
        }
      }
      
    },
    mounted() {
      //getProps(this.nameOfChild);
    },
  },
};
</script>

<style scoped>
.info-window-container {
  width: 100px;
  height: 20px;
}
h1 {
  text-align: center;
  font-size: 0.2em;
}
</style>

