<template>
  <div>
    <!-- 头部 -->
    <Header :index="4"
            :isShowCategoryLeft="true"></Header>

    <div class="banner-bg-100">
      <div class="banner"></div>
    </div>

    <div class="business">
      <div class="container" style="position: relative">
        <div class="block-title">
          <span class="block-title-line"></span>通过微信简单创业<span class="block-title-line"></span>
          <div class="block-title-sub">Simply start a business with WeChat</div>
        </div>
        <div class="business-brief">
          我们认为微信打通了信息流，现金流以及物流，在此基础上，每个人都可以通过微信开启一份自己的美丽事业！
        </div>
      </div>
    </div>

    <div class="middle-banner"></div>

    <div class="server">
      <div class="container">
        <div class="block-title">
          <span class="block-title-line"></span>创业支持服务<span class="block-title-line"></span>
          <div class="block-title-sub">Entrepreneurial support services</div>
        </div>
        <div class="server-title">V+Lab为每一位希望创业的人士提供全面的创业支持服务</div>
        <div class="server-bg"></div>
      </div>
    </div>

    <div class="case">
      <div class="container">
        <div class="block-title">
          <span class="block-title-line"></span>代理案例<span class="block-title-line"></span>
          <div class="block-title-sub">Agency case</div>
        </div>
        <div class="case-carousel">
          <swiper :options="swiperOption">
            <swiper-slide class="case-item"
                          v-bind:style="{'opacity':isShowAgencyCaseList ? '1':'0'}"
                          v-for="(item, index) in AgencyCaseList"
                          :key="index">
              <b-img class="case-item-image"
                     width="240"
                     height="240"
                     style="margin-bottom: 20px;
                            -webkit-border-radius: 50%;
                            -moz-border-radius: 50%;
                            border-radius: 50%;"
                     @click="handleSelectAgrncyList(item.index)"
                     :src="item.image"
                     alt=""/>
              <p class="case-item-text">{{item.brief}}</p>
              <p class="case-item-text">{{item.name}}</p>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev"
               @click="handleSelectAgrncy"
               slot="button-prev"></div>
          <div class="swiper-button-next"
               @click="handleSelectAgrncy"
               slot="button-next"></div>
          <div class="case-carousel-agency"
               v-if="!isShowAgencyCaseList">
            <b-img class="case-carousel-agency-image"
                   width="800"
                   height="436"
                   @click="handleSelectAgrncy"
                   :src="agrncyMaxImage"
                   alt=""/>
          </div>
        </div>
      </div>
    </div>

    <div class="join"></div>

    <div class="container nav-slide-body-content">
      <div class="nav-slide-body-content-point">
        <span @click="handleScrool(1)"
              class="nav-slide-body-content-point-item"
              :class="scrollIndex===1?'nav-slide-body-content-point-active' : '' ">
        </span>
        <span @click="handleScrool(2)"
              class="nav-slide-body-content-point-item"
              :class="scrollIndex===2?'nav-slide-body-content-point-active' : '' ">
        </span>
        <span @click="handleScrool(3)"
              class="nav-slide-body-content-point-item"
              :class="scrollIndex===3?'nav-slide-body-content-point-active' : '' ">
        </span>
        <span @click="handleScrool(4)"
              class="nav-slide-body-content-point-item"
              :class="scrollIndex===4?'nav-slide-body-content-point-active' : '' ">
        </span>
        <span @click="handleScrool(5)"
              class="nav-slide-body-content-point-item"
              :class="scrollIndex===5?'nav-slide-body-content-point-active' : '' ">
        </span>
        <span @click="handleScrool(6)"
              class="nav-slide-body-content-point-item"
              :class="scrollIndex===6?'nav-slide-body-content-point-active' : '' ">
        </span>
        <span @click="handleScrool(7)"
              class="nav-slide-body-content-point-arr">
        </span>
      </div>
    </div>

    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import bImg from 'bootstrap-vue/es/components/image/img';
  import bMedia from 'bootstrap-vue/es/components/media/media';

  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  import 'swiper/dist/css/swiper.css'

  export default {
    components: {
      swiper,
      swiperSlide,
      bImg,
      bMedia,
      Header,
      Footer
    },
    mixins: [mixins],
    data: () => ({
      scrollIndex: 1,
      AgencyCaseList: [
        {
          index: '01',
          brief: '资深个人创业者',
          image: '../../../static/image/agent09.png',
          name: '林嘉莉'
        }, {
          index: '02',
          brief: '资深个人创业者',
          image: '../../../static/image/agent01.jpg',
          name: '张驰'
        }, {
          index: '03',
          brief: '资深个人创业者',
          image: '../../../static/image/agent02.png',
          name: '辣妈小娟子'
        }, {
          index: '04',
          brief: '资深个人创业者',
          image: '../../../static/image/agent03.png',
          name: '唐君'
        }, {
          index: '05',
          brief: '资深个人创业者',
          image: '../../../static/image/agent04.png',
          name: '彭子文'
        }, {
          index: '06',
          brief: '资深个人创业者',
          image: '../../../static/image/agent05.png',
          name: '阿Ken'
        }, {
          index: '07',
          brief: '资深个人创业者',
          image: '../../../static/image/agent08.png',
          name: '黄倩昕'
        }, {
          index: '08',
          brief: '资深个人创业者',
          image: '../../../static/image/agent10.png',
          name: '邱千缘'
        }, {
          index: '09',
          brief: '资深个人创业者',
          image: '../../../static/image/agent11.png',
          name: '曾文娟'
        }],
      AgencyCase: [
        {
          index: '01',
          image: '../../../static/image/agent-09.png',
        }, {
          index: '02',
          image: '../../../static/image/agent-01.jpg',
        }, {
          index: '03',
          image: '../../../static/image/agent-02.png',
        }, {
          index: '04',
          image: '../../../static/image/agent-03.png',
        }, {
          index: '05',
          image: '../../../static/image/agent-04.png',
        }, {
          index: '06',
          image: '../../../static/image/agent-05.png',
        }, {
          index: '07',
          image: '../../../static/image/agent-08.png',
        }, {
          index: '08',
          image: '../../../static/image/agent-10.png',
        }, {
          index: '09',
          image: '../../../static/image/agent-11.png',
        }],
      isShowAgencyCaseList: true,
      isShowAgencyCase: false,
      agrncyMaxImage: '',
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 45,
        autoplay: 3000,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }),
    created() {
      this.windowScrool();    // 先布局、写滚动函数事件、页面加载完检测浏览器滚动
    },
    mounted() {

    },
    methods: {
      handleSelectAgrncyList: function (index) {
        this.isShowAgencyCaseList = false;
        this.isShowAgencyCase = true;
        for (var i = 0; i < this.AgencyCase.length; i++) {
          if (index == this.AgencyCase[i].index) {
            this.agrncyMaxImage = this.AgencyCase[i].image;
          }
        }
        return;
      },
      handleSelectAgrncy: function () {
        this.isShowAgencyCaseList = true;
        this.isShowAgencyCase = false;
      },
      windowScrool: function () {
        window.onscroll = () => {
          var scrollTop =
            document.documentElement.scrollTop ||
            document.body.scrollTop;
          console.log(scrollTop);
          if (scrollTop <= 654) {
            this.scrollIndex = 1;
          } else if (scrollTop > 654 && scrollTop < 1442) {
            this.scrollIndex = 2;
          } else if (scrollTop > 1442 && scrollTop < 2276) {
            this.scrollIndex = 3;
          } else if (scrollTop > 2276 && scrollTop < 3178) {
            this.scrollIndex = 4;
          } else if (scrollTop > 3178 && scrollTop < 3878) {
            this.scrollIndex = 5;
          } else if (scrollTop > 3878) {
            this.scrollIndex = 6;
          }
        }
      },
      handleScrool: function (id) {
        console.log("1111111111111111111111111")
        if (id === 1) {
          window.scrollTo(0, 0);
          this.scrollIndex = id;
        }
        if (id === 2) {
          window.scrollTo(0, 656);
          this.scrollIndex = id;
          console.log(this.scrollIndex)
        }
        if (id === 3) {
          window.scrollTo(0, 1442);
          this.scrollIndex = id;
        }
        if (id === 4) {
          window.scrollTo(0, 2276);
          this.scrollIndex = id;
        }
        if (id === 5) {
          window.scrollTo(0, 3178);
          this.scrollIndex = id;
        }
        if (id === 6) {
          window.scrollTo(0, 3878);
          this.scrollIndex = id;
        }
        if (id === 7) {
          window.scrollTo(0, 0);
          this.scrollIndex = 1;
        }
      },
    }
  }
</script>

<style src="./index.css" scoped></style>
