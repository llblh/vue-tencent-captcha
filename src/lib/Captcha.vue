<template>
  <div
    ref="captcha"
    id="Captcha">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vueTencentCaptcha',
  props: {
    appid: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    if (typeof window.TencentCaptcha !== 'function') {
      const URL = 'https://ssl.captcha.qq.com/TCaptcha.js';
      const scriptHeat = document.createElement('script');
      scriptHeat.type = 'text/javascript';
      scriptHeat.src = URL;
      document.body.appendChild(scriptHeat);
      scriptHeat.onload = () => {
        this.init();
      };
    } else {
      this.init();
    }
  },
  methods: {
    init() {
      const captcha = new window.TencentCaptcha(this.$refs.captcha, this.appid, (res) => {
        this.$emit('callback', res);
      }, { ...this.options });
      this.$root.captcha = captcha;
    },
  },
};
</script>
