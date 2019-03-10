<template>
  <div>
    <!--头部-->
    <Header :index="5"></Header>
    <div class="container main">
      <div class="order-address">
        <div class="order-address-title">
          请选择收货地址
          <router-link to="/address/detail" class="order-address-manage">管理收货地址</router-link>
        </div>
        <div class="order-list"
             v-for="(item, index) in list"
             :key="index"
             @click="handleTabAddress(index)">
          <div class="suggest-address"
               :class="item.isSelect ? 'suggest-address-isSelect' : ''">
            <div class="suggest-address-title">
              {{item.name}}
            </div>
            <div class="suggest-address-street">
              {{item.pro}}
              {{item.city}}
              {{item.re}}
              {{item.detit}}
            </div>
            <router-link to="/address/detail"
                         class="suggest-address-edit"
                          v-if="item.isSelect">修改</router-link>
          </div>
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="select-pay">
        <div class="select-pay-title">
          请选择支付方式
        </div>
        <b-form-group>
          <b-form-radio value="A" name="some-radios"><img class="pay-icon" src="../../../static/image/wechat-icon.png"
                                                          alt="">支付宝支付
          </b-form-radio>
          <b-form-radio value="B" name="some-radios"><img class="pay-icon" src="../../../static/image/alipay-icon.png"
                                                          alt="">微信在支付
          </b-form-radio>
        </b-form-group>
      </div>
      <div class="product">
        <div class="product-title">
          确认订单信息
        </div>
        <div class="product-list">
          <div class="product-list-title">
            <div class="product-list-title-image">
              图片
            </div>
            <div class="product-list-title-name">
              品名
            </div>
            <div class="product-list-title-number">
              数量
            </div>
            <div class="product-list-title-price">
              单价
            </div>
            <div class="product-list-title-total">
              总计
            </div>
            <div style="clear:both"></div>
          </div>

          <div class="product-list-body">
            <div class="product-list-body-image">
              <img class="product-list-body-image-size" src="../../../static/image/product02.jpg" alt="">
            </div>
            <div class="product-list-body-name">
              皛丸子
            </div>
            <div class="product-list-body-number">
              1
            </div>
            <div class="product-list-body-price">
              ¥238
            </div>
            <div class="product-list-body-total">
              ￥238.00
            </div>
            <div style="clear:both"></div>
          </div>
          <div class="total">
            总计
            <span class="total-price">RMB 238.00</span>
          </div>
          <div class="cart-body-product-sublime">
            <span class="settlement">结账</span>
          </div>
        </div>
      </div>
    </div>
    <!--脚部-->
    <Footer></Footer>
  </div>
</template>

<style src="./order.css" scoped></style>

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
      list: [{
        addresId: '000000000000',
        isSelect: false,
        name: '小花花1',
        pro: '广东省',
        city: '广州市',
        re: '天河区',
        detit: '东方大道'
      }, {
        addresId: '000000000000',
        isSelect: true,
        name: '123',
        pro: '广东省',
        city: '广州市',
        re: '天河区',
        detit: '东方大道'
      }, {
        addresId: '000000000000',
        isSelect: false,
        name: '小花花3',
        pro: '广东省',
        city: '广州市',
        re: '天河区',
        detit: '东方大道'
      }],
      bannerList: []
    }),
    created() {

    },
    mounted() {
      this.handleLoadBannerList();
    },
    methods: {
      handleTabAddress: function (index){
        for (var i = 0; i < this.list.length; i++){
          this.list[i].isSelect = false;
          this.list[index].isSelect = true
        }
      },
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

