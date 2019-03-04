<template>
  <div>
    <!-- 头部 -->
    <Header :index="1"
            :isShowCategoryLeft="true"></Header>
    <div class="main">
      <b-breadcrumb :items="items"/>
      <div class="content">
          <Sidebar :items="1"></Sidebar>
          <div class="content-description">
            <h1 class="content-description-title">我的订单</h1>
            <div class="content-description-list">
              <span class="content-description-list-order">订单编号</span>
              <span class="content-description-list-name">客户</span>
              <span class="content-description-list-number">数量</span>
              <span class="content-description-list-payment">状态</span>
              <span class="content-description-list-total">合计</span>
              <span class="content-description-list-time">创建时间</span>
            </div>
            <div class="content-description-list-product" v-for="item in 10" >
              <router-link to="/order/detail">
                <span class="content-description-list-order-color">1080799484427296769</span>
                <span class="content-description-list-name">华小乐</span>
                <span class="content-description-list-number">1</span>
                <span class="content-description-list-payment">待付款</span>
                <span class="content-description-list-total">¥0.01</span>
                <span class="content-description-list-time">2019-01-03</span>
                <span class="content-description-list-see">查看</span>
              </router-link>
            </div>
          </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<style src="./order.css" scoped></style>

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

