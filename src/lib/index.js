import Captcha from './Captcha.vue';

const captcha = {
  install(Vue) {
    if (captcha.installed) return;
    Vue.component(Captcha.name, Captcha); // VueLsmcaptcha.name 组件的name属性
  },
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(captcha);
}
export default captcha; // 导出..
