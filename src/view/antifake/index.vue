<template>
  <div>
    <!-- 头部 -->
    <Header :index="0"
            :isShowCategoryLeft="true"></Header>
    <div class="container main">
      <div class="body-title">
        真伪查询
      </div>
      <div class="content">
        <div>
          <b-form-input class="content-input" type="text" placeholder="请输入二维码ID"></b-form-input>
        </div>
        <div>
          <b-form-input class="content-input" type="text" placeholder="请输入验证码"></b-form-input>
        </div>
        <div class="sublime">查询</div>
      </div>
      <div class="body-box">
        <img src="../../../static/image/antifake.png" alt="">
      </div>
    </div>
    <!-- 底部 -->
    <Footer/>
  </div>
</template>

<style src="./index.css" scoped></style>

<script>
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  export default {
    components: {
      Header,
      Footer,
      bCarousel
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

