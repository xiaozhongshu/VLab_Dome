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
          <div class="member-info-title">
            地址簿
            <span class="content-description-title-new-address">添加新地址</span>
            <!--<router-link to="/edit">编辑收货地址</router-link>-->
          </div>
          <div class="address">
            <div class="address-list">
              <div class="address-list-left">
                <p>小钟1234567890</p>
                <p>北京市</p>
                <p>广州市</p>
                <p>深圳市</p>
                <p>东莞市</p>
              </div>
              <div class="address-list-right">
                <router-link to="/address/detail">
                  <div class="address-list-right-edit">编辑</div>
                </router-link>
                <div class="address-list-right-edit">设为默认</div>
                <div class="address-list-right-edit">删除</div>
              </div>
            </div>
            <div class="address-list">
              <div class="address-list-left">
                <p>小钟1234567890</p>
                <p>北京市</p>
                <p>广州市</p>
                <p>深圳市</p>
                <p>东莞市</p>
              </div>
              <div class="address-list-right">
                <router-link to="/address/detail">
                  <div class="address-list-right-edit">编辑</div>
                </router-link>
                <div class="address-list-right-edit">设为默认</div>
                <div class="address-list-right-edit">删除</div>
              </div>
            </div>
            <div class="address-list">
              <div class="address-list-left">
                <p>小钟1234567890</p>
                <p>北京市</p>
                <p>广州市</p>
                <p>深圳市</p>
                <p>东莞市</p>
              </div>
              <div class="address-list-right">
                  <div class="address-list-right-edit">编辑</div>
                </router-link>
                <div class="address-list-right-edit">设为默认</div>
                <div class="address-list-right-edit">删除</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<style src="./address.css" scoped></style>

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

