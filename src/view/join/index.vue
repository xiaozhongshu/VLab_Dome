<template>
  <div>
    <!--头部-->
    <Header :index="6"></Header>

    <div class="banner"></div>
    <div class="recruit-bg">
      <div class="recruit">
        <span class="recruit-title">开始招聘！加入美容零食行业，革新你的职业轨迹......</span>
        <a href="mailto:hr@vpluslab.com<">
          <p class="recruit-email">hr@vpluslab.com</p>
        </a>
      </div>
    </div>
    <div class="recruit-post">
      <div class="main">
        <p class="recruit-post-title"> 公司前台 </p>
        <p class="recruit-post-title-en">Company reception desk</p>
        <p class="post-information">职位信息</p>
        <p class="post-information">岗位职责</p>
        <p class="post-information">1、负责公司前台接待及电话接转</p>
        <p class="post-information">2、收发传真，复印文档，收发信件、报刊、文件等</p>
        <p class="post-information">3、及时更新和管理员工通讯地址和电话号码等联系信息；</p>
        <p class="post-information">4、受理会议室预约，协调会议时间，下发会议通知，布置会议室；</p>
        <p class="post-information">5、负责订水、订报，信件、包裹的安排及与快递公司的联系；</p>
        <p class="post-information">6、负责各级主管交办出差安排等各项工作；</p>
        <p class="post-information">7、完成上级交给的其它事务性工作。</p>
        <p class="post-qualifications">任职资格</p>
        <p class="post-information">1、文秘、行政管理及相关专业大专以上学历；</p>
        <p class="post-information">2、一年以上相关工作经验；</p>
        <p class="post-information">3、熟悉前台工作流程，熟练使用各种办公自动化设备；</p>
        <p class="post-information">4、工作热情积极、细致耐心，具有良好的沟通能力、协调能力，性格开朗，相貌端正，待人热诚；</p>
        <p class="post-information">5、熟练使用相关办公软件。</p>
        <p class="recruit-post-title"> 出纳 </p>
        <p class="recruit-post-title-en">Cashier</p>
        <p class="post-information">岗位职责：</p>
        <p class="post-information">1.按照公司报销制度和现金管理制度，依据经审核的原始凭证，准确、及时办理各项报销业务；对于不完整、不合法的凭证拒绝接收并及时反映；</p>
        <p class="post-information">2.完成现金收付工作，开具或收取现金收付的相关票据；</p>
        <p class="post-information">3.及时办理银行收款付款手续，办理支票、汇款、转账等方式的结算业务；</p>
        <p class="post-information">4.收取银行结算凭证，每月清查银行存款，定期进行银行账户对账，编制银行存款余额调节表，保证账账相符、账实相符；</p>
        <p class="post-information">5.保管票据(支票和发票)；</p>
        <p class="post-information">1）.按照规定程序使用票据，并设登记账簿负责登记，办理领用、注销手续；</p>
        <p class="post-information">2）.根据部门领导的安排，定期向部门领导提供资金收付月报表、季报表，并作相关分析说明，为公司资金运营提供管理依据；
          完成上级领导交办的其他事务。</p>
        <p class="post-information">任职要求：</p>
        <p class="post-information">1. 掌握企业财务会计工作的专业知识和技能，具有对本岗位工作中各项业务处理的能力；</p>
        <p class="post-information">2.懂得计算机应用基本知识，能熟练地操作电脑，进行电脑化处理；
          有很好的组织纪律观念，能严格遵守财会工作制度和财经纪律与原则，敢于抵制各种违章违纪、损害公司利益的行为。</p>
        <p class="post-information">任职资格：</p>
        <p class="post-information">1.从事1年以上工作经验。</p>
        <p class="recruit-post-title"> 销售助理 </p>
        <p class="recruit-post-title-en">Sales Assistant</p>
        <p class="post-information">岗位职责：</p>
        <p class="post-information">1.服从公司安排的各项销售任务，根据公司年度总目标规划市场，分析市场，完成售后服务。</p>
        <p class="post-information">2.认真维护客户关系，保持长期购买关系，分析客户心理，掌握客户采购总能量，分析公司产品所占采购比例，挖掘潜在购买力。
          积极完成后规定或承诺的销售量指标及月指标，年度指标，为客户提供主动热情满意周到的服务。</p>
        <p class="post-information">3.平日做好日报表，月计划，年计划以及可量化分解目标的实施方案。</p>
        <p class="post-information">能力要求：</p>
        <p class="post-information">较强的沟通协调能力，语言表达能力及亲和力，较强的工作责任心及事业心，具备良好的自我管理能力，团队合作精神，
          认同教育用品事业，能克服工作中遇到的困难，并可 以和上级领导及客户做好沟通，处理不良情绪的能力。</p>
        <p class="post-information">薪资：底薪 + 提成 + 奖金 上不封顶。</p>
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

