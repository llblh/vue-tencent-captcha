# @carpenter/vue-tencent-captcha

### 安装
> npm i @carpenter/vue-tencent-captcha

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| appid | appid | String | 无 |
| callback | 验证成功的回调函数 | function | 无 |


```
// 隐藏验证码
this.$root.captcha.destroy(); 
// 显示验证码
this.$root.captcha.show(); 

<vueTencentCaptcha appid="2028109764" @callback="captchaCallback">
  点我啊
</vueTencentCaptcha>
// 回调
captchaCallback(res) {
  console.log(res);
}
```

