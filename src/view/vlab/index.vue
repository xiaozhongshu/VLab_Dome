<template>
  <div>
    <!--头部-->
    <Header :index="2"></Header>

    <div class="banner">
      <router-link to="/product/list">
        <span class="banner-shopping"></span>
      </router-link>
    </div>
    <div class="banner-01"></div>
    <div class="banner-02"></div>

    <div class="bg">
      <div class="container main">
        <div class="content-image-box">
          <img src="../../../static/image/V-lab04.png" alt="">
          <img src="../../../static/image/V-lab05.png" alt="">
          <img src="../../../static/image/V-lab06.png" alt="">
          <img src="../../../static/image/V-lab07.png" alt="">
          <img src="../../../static/image/V-lab08.png" alt="">
          <img src="../../../static/image/V-lab09.png" alt="">
          <img src="../../../static/image/V-lab10.png" alt="">
          <img src="../../../static/image/V-lab11.png" alt="">
          <img src="../../../static/image/V-lab12.png" alt="">
          <img src="../../../static/image/V-lab13.png" alt="">
          <img src="../../../static/image/V-lab14.png" alt="">
          <img src="../../../static/image/V-lab15.png" alt="">
          <img src="../../../static/image/V-lab16.png" alt="">
          <img src="../../../static/image/V-lab17.png" alt="">
          <img src="../../../static/image/V-lab18.png" alt="">
        </div>
      </div>
    </div>

    <!--脚部-->
    <Footer></Footer>
  </div>
</template>

<style src="./index.css" scoped></style>

<script>
  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  export default {
    components: {
      Header,
      Footer
    },
    mixins: [mixins],
    data: () => ({
      bannerList: [],
    }),
    created() {

    },
    mounted() {
      this.handleLoadBannerList();
    },
    methods: {
      handleLoadBannerList: function () {
        this.request({
          url: '/xingxiao/advertisement/desktop/v1/list',
          data: {
            advertisementCategoryCode: 'INDEX_BANNER'
          },
          success: (data) => {
            if (data.list && data.list.length > 0) {
              this.bannerList = data.list;
            }
          },
          error: () => {

          }
        });
      }
    }
  }
</script>

