import Vue from 'vue';
import reqwest from 'reqwest';
import md5 from 'blueimp-md5';
import storage from '../common/storage';

export default {
  data() {
    return {
      host: 'https://api.vpluslab.com',
      // host: 'http://192.168.3.86:8088',
      imageHost: 'https://api.vpluslab.com',
      appId: '999557245638234113',
      wechatAppId: "wx8f76b3c84685b77c",
      alipayAppId: "2018052960326248",
      version: '1.0.0',
      platform: 'V+Lab_website',
      payReturnUrl: 'https://www.vpluslab.com/#/pay/success/'
    }
  },
  created() {

  },
  mounted() {
    window.scrollTo(0, 0);
    this.isMobile();
  },
  methods: {
    request(config) {
      config.data.appId = this.appId;
      config.data.token = storage.getToken();
      config.data.platform = this.platform;
      config.data.version = this.version;
      config.data.timestamp = Math.round(new Date().getTime() / 1000);

      let data = {};
      let sign = '';
      var sdic = Object.keys(config.data).sort();
      for (let ki in sdic) {
        sign += sdic[ki];
        sign += config.data[sdic[ki]];

        data[sdic[ki]] = config.data[sdic[ki]];
      }
      // console.log(sign);

      data.sign = md5(sign);

      if (!config.url.startsWith('http')) {
        config.url = this.host + config.url;
      }

      reqwest({
        url: config.url,
        type: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        crossOrigin: true,
        data: JSON.stringify(data),
        success: function (response) {
          if (response.code === 200) {
            if (response.result) {
              if (response.data) {
                config.success(response.data);
              } else {
                config.success(response.result);
              }
            } else {
              // Vue.toasted.show(response.message);
              config.error();
            }
          } else {
            Vue.toasted.show(response.message);
            config.error();
          }
        },
        error: function () {
          config.error();
        },
        complete: function () {

        }
      });
    },
    isMobile: function (){
      var ua = navigator.userAgent;

      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

        isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

        isAndroid = ua.match(/(Android)\s+([\d.]+)/),

        isMobile = isIphone || isAndroid;

      if(isMobile){
        window.location.href = 'http://m.vpluslab.com/#/';
      }
    }
  }
}
