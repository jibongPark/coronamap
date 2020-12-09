<template>
  <div>
    {{getProps(nameOfChild)}}
    {{setData()}}

    <b-carousel>
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`sido patient`">
          <div>
            <div class="columns" style="margin-bottom: 0.5rem">
              <div class="column">
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <h1>{{ carousel.sido_1 }}</h1>

                      <hr />
                      <h2>{{ carousel.patient_1 }}</h2>
                    </div>
                  </div>
                </article>
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <h1>{{ carousel.sido_2 }}</h1>
                      <hr />
                      <h2>{{ carousel.patient_2 }}</h2>
                    </div>
                  </div>
                </article>
              </div>
              <div class="column">
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <h1>{{ carousel.sido_3 }}</h1>
                      <hr />
                      <h2>{{ carousel.patient_3 }}</h2>
                    </div>
                  </div>
                </article>
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <h1>{{ carousel.sido_4 }}</h1>
                      <hr />
                      <h2>{{ carousel.patient_4 }}</h2>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoPlay: false,

      seoul: "",
      busan: "",
      daegu: "",
      incheon: "",
      gwanghu: "",
      daejeon: "",
      ulsan: "",
      sejong: "",
      gyeonggi: "",
      gangwon: "",
      chungbuk: "",
      chungnam: "",
      jeolbuk: "",
      jeolnam: "",
      gyeongbuk: "",
      gyeongnam: "",
      jeju: "",
      lazaretto: "",
      total: "",

      carousels: [
        {
          sido_1: "서울",
          sido_2: "부산",
          sido_3: "대구",
          sido_4: "인천",
          patient_1: " ",
          patient_2: this.busan,
          patient_3: this.daegu,
          patient_4: this.incheon,
        },

        {
          sido_1: "광주",
          sido_2: "대전",
          sido_3: "울산",
          sido_4: "세종",
          patient_1: this.gwanghu,
          patient_2: this.daejeon,
          patient_3: this.ulsan,
          patient_4: this.sejong,
        },

        {
          sido_1: "경기",
          sido_2: "강원",
          sido_3: "충북",
          sido_4: "충남",
          patient_1: this.gyeonggi,
          patient_2: this.gangwon,
          patient_3: this.chungbuk,
          patient_4: this.chungnam,
        },

        {
          sido_1: "전북",
          sido_2: "전남",
          sido_3: "경북",
          sido_4: "경남",
          patient_1: this.jeolbuk,
          patient_2: this.jeolnam,
          patient_3: this.gyeongbuk,
          patient_4: this.gyeongnam,
        },

        {
          sido_1: "제주",
          sido_2: "검역",
          sido_3: "통계",
          sido_4: "",
          patient_1: this.jeju,
          patient_2: this.lazaretto,
          patient_3: "",
          patient_4: "",
        },
      ],

      // list: [" ", " ", " ", " ",
      //        " ", " ", " ", " ",
      //        " ", " ", " ", " ",
      //        " ", " ", " ", " ",
      //        " ", " "
      //        ],

      // carousels: [
      //   { sido_1: "서울", sido_2: "부산", sido_3: "대구", sido_4: "인천",
      //     patient_1: list[0], patient_2: list[1],  patient_3: list[2], patient_4: list[3]},

      //   { sido_1: "광주", sido_2: "대전", sido_3: "울산", sido_4: "세종",
      //     patient_1: list[4], patient_2: list[4],  patient_3: list[6], patient_4: list[7]},

      //   { sido_1: "경기", sido_2: "강원", sido_3: "충북", sido_4: "충남",
      //     patient_1: list[8], patient_2: list[9],  patient_3: list[10], patient_4: list[11]},

      //   { sido_1: "전북", sido_2: "전남", sido_3: "경북", sido_4: "경남",
      //     patient_1: list[12], patient_2: list[13],  patient_3: list[14], patient_4: list[15]},

      //   { sido_1: "제주", sido_2: "검역", sido_3: "", sido_4: "",
      //     patient_1: list[16], patient_2: list[17],  patient_3: "", patient_4: "" },
      // ],
    };
  },

  methods: {
    getProps(propsData) {

      if(propsData.data!=null) {
        this.total = String(propsData.data.items.item[18].defCnt);
        this.seoul = String(propsData.data.items.item[17].defCnt);
        this.busan = String(propsData.data.items.item[16].defCnt);
        this.daegu = String(propsData.data.items.item[15].defCnt);
        this.incheon = String(propsData.data.items.item[14].defCnt);
        this.gwanghu = String(propsData.data.items.item[13].defCnt);
        this.daejeon = String(propsData.data.items.item[12].defCnt);
        this.ulsan = String(propsData.data.items.item[11].defCnt);
        this.sejong = String(propsData.data.items.item[10].defCnt);
        this.gyeonggi = String(propsData.data.items.item[9].defCnt);
        this.gangwon = String(propsData.data.items.item[8].defCnt);
        this.chungbuk = String(propsData.data.items.item[7].defCnt);
        this.chungnam = String(propsData.data.items.item[6].defCnt);
        this.jeolbuk = String(propsData.data.items.item[5].defCnt);
        this.jeolnam = String(propsData.data.items.item[4].defCnt);
        this.gyeongbuk = String(propsData.data.items.item[3].defCnt);
        this.gyeongnam = String(propsData.data.items.item[2].defCnt);
        this.jeju = String(propsData.data.items.item[1].defCnt);
        this.lazaretto = String(propsData.data.items.item[0].defCnt);
      }
    },
    setData() {
        this.carousels = [
          {
            sido_1: "서울",
            sido_2: "부산",
            sido_3: "대구",
            sido_4: "인천",
            patient_1: this.seoul,
            patient_2: this.busan,
            patient_3: this.daegu,
            patient_4: this.incheon,
          },

          {
            sido_1: "광주",
            sido_2: "대전",
            sido_3: "울산",
            sido_4: "세종",
            patient_1: this.gwanghu,
            patient_2: this.daejeon,
            patient_3: this.ulsan,
            patient_4: this.sejong,
          },

          {
            sido_1: "경기",
            sido_2: "강원",
            sido_3: "충북",
            sido_4: "충남",
            patient_1: this.gyeonggi,
            patient_2: this.gangwon,
            patient_3: this.chungbuk,
            patient_4: this.chungnam,
          },

          {
            sido_1: "전북",
            sido_2: "전남",
            sido_3: "경북",
            sido_4: "경남",
            patient_1: this.jeolbuk,
            patient_2: this.jeolnam,
            patient_3: this.gyeongbuk,
            patient_4: this.gyeongnam,
          },

          {
            sido_1: "제주",
            sido_2: "검역",
            sido_3: "통계",
            sido_4: "",
            patient_1: this.jeju,
            patient_2: this.lazaretto,
            patient_3: this.total,
            patient_4: "",
          },
        ];

      console.log("data changed");
    },
    printConsole() {
      console.log("test");
    },
  },
  props: ['nameOfChild'],
  created() {
  },
};
</script>


<style scoped>
hr {
  border: solid 1px black;
}

h1,
h2 {
  text-align: center;
}
</style>
