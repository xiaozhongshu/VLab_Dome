<template>
  <div>
    <!--头部-->
    <Header :index="5"></Header>
    <div class="body-title">
      购买 爆水丸
    </div>
    <div class="content main">
      <div class="content-left">
        <img src="../../../static/image/product.jpg" alt="">
      </div>
      <div class="content-right">
        <div class="content-right-title">
          选购爆水丸 立即开启肌肤改变之旅
        </div>
        <div class="content-right-comment">
          HA-800道尔顿补水精华啫喱（爆水丸）是一款全新的美容零食糖果，其富含小分子透明质酸和纳米胶原蛋白。
          爆水丸通过食用的方式，提供肌肤深层需要的补水成分，从而改善肌肤品质。
        </div>
        <div class="content-right-sku">
          <div class="content-right-sku-title">
            购买配置
          </div>
          <div class="content-right-sku-item">
            1包（初次尝试，甜甜哒）
            <span class="content-right-sku-item-price">+RMB 68</span>
          </div>

          <div class="content-right-sku-item-2">
            21包（爱上补水新姿势）
            <span class="content-right-sku-item-price">+RMB 1008</span>
          </div>

          <div class="content-right-sku-item-2">
            100包（全身补水，皮肤透亮）
            <span class="content-right-sku-item-price">+RMB 3500</span>
          </div>
          <div class="content-right-purchase">
            <div class="content-right-purchase-title">
              自定义购买数量：
            </div>
            <div class="content-right-sku-number">
              <div class="content-right-sku-number-pull">-</div>
              <input type="number" class="content-right-sku-number-input" placeholder="数量" value="8" />
              <div class="content-right-sku-number-push">+</div>
          </div>
          </div>
          <div class="content-right-pricr-rmb">
            RMB  68.00
          </div>
          <div class="content-right-pricr" @click="handleShopping()">
            <span class="content-right-pricr-purchase">立即购买</span>
          </div>
        </div>
      </div>
    </div>
    <!--脚部-->
    <Footer></Footer>
  </div>
</template>

<style src="./details.css" scoped></style>

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
      },
      handleShopping: function () {
        this.$router.push({path: '/product/order'});
      }
    }
  }
</script>

