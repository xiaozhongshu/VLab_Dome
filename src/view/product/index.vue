<template>
  <div>
    <!--头部-->
    <Header :index="5"></Header>
    <!--<div class="01">-->
    <!--<router-link to="/product/details">商品详情</router-link>-->
    <!--</div>-->

    <div class="body-title">
      购买选择
    </div>
    <div class="content main">
      <div class="content-left">
        <router-link to="/product/details">
          <div class="content-left-product">
            <div class="content-left-product-box">
              <p class="content-left-product-box-text">爆水丸</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="content-right">
        <router-link to="/product/details">
          <div class="content-right-product">
            <div class="content-left-product-box">
              <p class="content-left-product-box-text">爆水丸</p>
            </div>
          </div>
        </router-link>
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

