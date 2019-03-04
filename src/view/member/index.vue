<template>
  <div>
    <!-- 头部 -->
    <Header :index="0"
            :isShowCategoryLeft="true"></Header>
    <div class="main">
      <b-breadcrumb :items="items"/>
      <div class="content">
        <Sidebar></Sidebar>
        <div class="member-info">
          <h1 class="member-info-title">账户概况</h1>
          <p class="member-info-title-text">欢迎回来，尊敬的 </p>
          <span class="member-info-title-name">Mr.Li</span>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<style src="./index.css" scoped></style>

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
        href: '/index'
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

