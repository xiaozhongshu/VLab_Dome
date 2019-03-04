<template>
  <div>
    <!-- 头部 -->
    <Header :index="3"
            :isShowCategoryLeft="true"></Header>
    <div class="main">
      <b-breadcrumb :items="items"/>
      <div class="content">
        <Sidebar :items="3"></Sidebar>
        <div class="member-info">
          <h1 class="member-info-title">我的资料</h1>
          <div class="form-group">
            <span class="form-group-text">名称:</span>
            <b-form-input  class="form-group-input"
                           type="text"
                           placeholder="Mr.Li"></b-form-input>
          </div>
          <div class="form-group">
            <span class="form-group-text">性别:</span>
            <b-form-select id="gender"
                           class="form-group-input"
                           :options="options"
                           v-model="memberGender" />
          </div>
          <div class="form-group">
            <span class="form-group-text">生日:</span>
            <b-form-input class="form-group-input"
                          type="date" ></b-form-input>
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

<style src="./data.css" scoped></style>

<script>
  import BFormInput from 'bootstrap-vue/es/components/form-input/form-input'
  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';
  import Sidebar from '../../component/member/sidebar';

  export default {
    components: {
      Header,
      Footer,
      Sidebar,
      BFormInput
    },
    mixins: [mixins],
    data: () => ({
      bannerList: [],
      memberGender: null,
      options: [
        { text: '男', value: 0 },
        { text: '女', value: null },
        { text: '请选择', value: 2 },
      ],
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

