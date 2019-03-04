<template>
  <div>
    <!-- 头部 -->
    <Header :index="0"
            :isShowCategoryLeft="true"></Header>

    <div class="banner">
      <b-carousel controls
                  indicators
                  :interval="4000"
                  img-width="1920"
                  img-height="653">
        <b-carousel-slide
          img-src="https://api.vpluslab.com/upload/999557245638234113/2a0b794de907840ded56a478d5d7fa3d/original/1011790853724049409.jpg"></b-carousel-slide>
        <b-carousel-slide
          img-src="https://api.vpluslab.com/upload/999557245638234113/d41d8cd98f00b204e9800998ecf8427e/original/1006094614596571138.jpg"></b-carousel-slide>
        <b-carousel-slide
          img-src="https://api.vpluslab.com/upload/999557245638234113/d41d8cd98f00b204e9800998ecf8427e/original/1006881234245525506.png"></b-carousel-slide>
      </b-carousel>
    </div>

    <div class="snacks">
      <div class="main snacks-box">
        <div class="snacks-content">
          <h2>全球独创的美容零食现已来临</h2>
          <p>薇嘉实验室通过大量的数据调研，发现护肤和零食是女性日常 生活中最喜爱的两个部分，于是我们灵机一动，
            为何不将女性 最需要的护肤与女性最爱的零食结合在一起呢？于是全球首款 美容零食——爆水丸诞生了！</p>
          <p>爆水丸通过添加小分子透明质酸、纳米胶原蛋白和维C，将皮 肤最需要的锁水营养物质透过口服实现补充，同时又用QQ软糖 的性状实现口感佳，无抗拒感！</p>
        </div>
      </div>
    </div>

    <div class="idea">
      <div class="main">
        <div class="idea-title">
          <span class="idea-title-line"></span>
          薇嘉实验室核心理念
          <span class="idea-title-line"></span>
          <p class="idea-text">Core Idea Of V+lab</p>
        </div>

        <div class="idea-body">
          <div class="idea-body-item">
            <img class="idea-body-item-image-box" src="../../..//static/image/idea01.png" alt="">
            <p class="idea-body-title">趣味</p>
            <p class="idea-body-text">INTEREST</p>
            <div class="idea-body-item-msg">
              <p class="idea-body-item-float-text">
                我们一直认为用最简单的方式即可完成的事情不需要做更复杂，就犹如我们的产品负责人提出的理念：用最简单且有趣的方式帮助每位女性改善皮肤。
                我们在研究了全球超过80%的护肤品后发现，大多护肤品都还停留在很原始的使用方式，但科学上来说却不是最有效的。
                通过结合女性最需要和最喜爱两个属性，我们将护肤做了CrossExperience（交叉式体验）式的升级，于是美容零食的概念由此而生。
              </p>
            </div>
          </div>
          <div class="idea-body-item">
            <img class="idea-body-item-image-box" src="../../..//static/image/idea03.png" alt="">
            <p class="idea-body-title">科技</p>
            <p class="idea-body-text">TECHNOLOGY</p>
            <div class="idea-body-item-msg">
              <p class="idea-body-item-float-text">
                有效是薇嘉实验室一直所坚持的品牌理念，为了做到真正有效，我们在所有产品研发上均使用了行业的最高科技。
                目前我们的HA-800小分子透明质酸材料只有韩国和日本可以研发出来。
                NANO 胶原蛋白等小分子可透过胃壁吸收的原材料相比其他胶原蛋白可达到超过80%以上的吸收率！
                在护肤品概念越来越多的市场行情下，我们坚持用最有效的高科技材料而不是去炒作概念，让用户的脸为我们做真正的背书。
              </p>
            </div>
          </div>
          <div class="idea-body-item">
            <img class="idea-body-item-image-box" src="../../..//static/image/idea02.png" alt="">
            <p class="idea-body-title">分享</p>
            <p class="idea-body-text">SHARE</p>
            <div class="idea-body-item-msg">
              <p class="idea-body-item-float-text">
                所有的营销最终需要的是用户口碑才能支撑，所以与其大笔宣传不如让每个用户成为我们的传播者。
                薇嘉在市场营销方面更注重于用户的口碑宣传，甚至在渠道的选择上也选择社会化分享式的营销渠道就是为了让有效的用户传播我们的产品功效和产品理念。
                我们相信只有用户的认可和有效背书才能让我们的品牌被更多的接受和体验，从而改变整个市场格局。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="case">
      <div class="case-title">
        <span class="case-title-line"></span>
        客户案例
        <span class="case-title-line"></span>
        <p class="case-text">Customer Case</p>
      </div>
      <div class="case-bg01"></div>
      <div class="case-bg02"></div>
    </div>

    <div class="country">
      <div class="country-title">
        <span class="country-title-line"></span>
        全球超过 <span class="block-title-pink">20</span> 个国家和地区有售
        <span class="country-title-line"></span>
        <p class="country-text">It has been sold in over 20 countries and</p>
        <p>regions all over the world.</p>
        <div class="country-bg"></div>
      </div>

    </div>
    <!-- 底部 -->
    <Footer/>
  </div>
</template>

<style src="./index.css" scoped></style>

<script>
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  export default {
    components: {
      Header,
      Footer,
      bCarousel
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

