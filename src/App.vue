<template>
  <div id="app">
    <template v-if="show">
      <Captcha appid="xxxxx" :options="options" @callback="captchaCallback">
        点我啊
      </Captcha>
    </template>
  </div>
</template>

<script>
import Captcha from './lib/Captcha.vue';

export default {
  name: 'app',
  data() {
    return {
      show: true,
      options: {
        bizState: '11111111111'
      },
    };
  },
  components: {
    Captcha,
  },
  mounted() {
    setTimeout(() => {
      // this.$root.captcha.show();
    }, 5000);
  },
  watch: {
    show(newVal) {
      if (!newVal) {
        this.$root.captcha.destroy();
      }
    },
  },
  methods: {
    captchaCallback(res) {
      console.log(res);
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

