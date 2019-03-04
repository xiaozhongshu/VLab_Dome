<template>
  <div>
    <!-- 头部 -->
    <Header :index="0"
            :isShowCategoryLeft="true"></Header>
    <div class="main">
      <b-breadcrumb :items="items"/>
      <div class="content">
        <Sidebar :items="1"></Sidebar>
        <div class="content-description">
          <div>
            <h1 class="content-description-title">订单资讯</h1>
            <div class="content-description-list">
              <div class="content-description-list-left">
                <p>订单编号：1035456134904197121</p>
                <p>订单日期：2018-08-31</p>
                <p>状态：待付款</p>
                <p>是否开票: 否</p>
              </div>
              <div class="content-description-list-right">
                <p>支付方式：其他支付</p>
              </div>
            </div>
            <div class="content-description-list">
              <div class="content-description-list-left">
                <p>收货人：华小乐</p>
                <p>收货人电话：13088488889</p>
                <p>省份：北京市</p>
                <p>城市：北京市</p>
                <p>收货区：西城区</p>
                <p>收货街道：小黑大厦哈哈哈哈</p>
              </div>
              <div class="content-description-list-right">
                <p>运费：0</p>
              </div>
            </div>
          </div>
          <div class="product">
            <h1 class="content-description-title">商品详情</h1>
            <div class="product-list">
              <p class="product-list-image">图片</p>
              <p class="product-list-name">名称</p>
              <p class="product-list-number">数量</p>
              <p class="product-list-price">单价</p>
              <p class="product-list-total">总计</p>
            </div>
            <div class="product-list" v-for="item in 8">
              <p class="product-list-product-image"></p>
              <p class="product-list-name line-height-100">皛丸子</p>
              <p class="product-list-number line-height-100">123</p>
              <p class="product-list-price line-height-100">238.00</p>
              <p class="product-list-total line-height-100">238.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<style src="./orderDetail.css" scoped></style>

<script>
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';
  import Sidebar from '../../component/member/sidebar';

  export default {
    components: {
      Header,
      Footer,
      Sidebar,
      bCarousel
    },
    mixins: [mixins],
    data: () => ({
      bannerList: [],
      items: [{
        text: '首页',
        href: '/'
      }, {
        text: '账户概括',
        href: '#'
      }]
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

