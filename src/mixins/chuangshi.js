import Vue from 'vue';
import reqwest from 'reqwest';
import md5 from 'blueimp-md5';
import storage from '../common/storage';

export default {
  data() {
    return {
      host: 'http://api.chuangshi.nowui.com',
      // host: 'http://localhost:8088',
      imageHost: 'https://api.vpluslab.com',
      appId: '999557245638234113',
      version: '1.0.0',
      platform: 'V+Lab_website',
      payReturnUrl: 'https://www.vpluslab.com/#/order/detail/'
    }
  },
  created() {

  },
  mounted() {
    window.scrollTo(0, 0);
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
              config.error(response);
            }
          } else {
            Vue.toasted.show(response.message);
            config.error(response);
          }
        },
        error: function (response) {
          config.error(response);
        },
        complete: function () {

        }
      });

    }
  }
}
