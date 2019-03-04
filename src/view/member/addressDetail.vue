<template>
  <div>
    <!-- 头部 -->
    <Header :index="2"
            :isShowCategoryLeft="true"></Header>
    <div class="main">
      <b-breadcrumb :items="items"/>
      <div class="content">
        <Sidebar :items="2"></Sidebar>
        <div class="member-info">
          <h1 class="member-info-title">地址编辑</h1>
          <div class="form-group">
            <span class="form-group-text">收货人名称:</span>
            <b-form-input class="form-group-input" type="text" placeholder="请输入收货人名称..."></b-form-input>
          </div>
          <div class="form-group">
            <span class="form-group-text">收货人手机号码:</span>
            <b-form-input class="form-group-input" type="text" placeholder="请输入手机号码..."></b-form-input>
          </div>
          <div class="form-group">
            <span class="form-group-text">省份:</span>
            <b-form-input class="form-group-input" type="text" placeholder="确认密码"></b-form-input>
          </div>
          <div class="form-group">
            <span class="form-group-text">城市:</span>
            <b-form-input class="form-group-input" type="text" placeholder="确认密码"></b-form-input>
          </div>
          <div class="form-group">
            <span class="form-group-text">行政区:</span>
            <b-form-input class="form-group-input" type="text" placeholder="确认密码"></b-form-input>
          </div>
          <div class="form-group">
            <span class="form-group-text">地址详情:</span>
            <b-form-input class="form-group-input" type="text" placeholder="请输入地址详情..."></b-form-input>
          </div>
          <div class="form-group">
            <span class="form-group-text">是否默认地址</span>
          </div>

          <div class="submission">
            <div class="submission-button">提交</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<style src="./addressDetail.css" scoped></style>

<script>
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';
  import Sidebar from '../../component/member/sidebar';
  import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';

  export default {
    components: {
      Header,
      Footer,
      Sidebar,
      bCarousel,
      bFormInput
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

