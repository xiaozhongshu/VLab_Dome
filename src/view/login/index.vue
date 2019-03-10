<template>
  <div>
    <!--头部-->
    <Header :index="1"></Header>
    <div class="content main">
      <div class="login">
        <div class="login-title">
          会员登录
        </div>
        <div class="login-description">
          如果您已经是本站会员，请直接登录。
        </div>
        <div class="form-group">
          <span class="form-group-text">登录账号</span>
          <b-form-input class="form-group-input"
                        type="text"
                        placeholder="请输入手机号码"></b-form-input>
        </div>
        <div class="form-group">
          <span class="form-group-text">密码</span>
          <b-form-input class="form-group-input"
                        type="text"
                        placeholder="请输入密码"></b-form-input>
        </div>
        <dib class="clearfix">
          <div class="login-submit">登录</div>
        </dib>
      </div>
      <div class="register">
        <div class="login-title">
          快速登录
        </div>
        <div class="register-description">
          <div class="register-description-item">
            <img src="../../../static/image/wechat-icon.png" alt="">
          </div>
          <div class="register-description-logo-name">微信</div>
        </div>
        <div class="register-submit float-left">微信登录</div>
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

