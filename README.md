# @carpenter/vue-tencent-captcha

### 安装
> npm i @carpenter/vue-tencent-captcha

### 引用
``` js
  import vueTencentCaptcha from '@carpenter/vue-tencent-captcha';
  
  Vue.use(vueTencentCaptcha);
```

### 属性
| 成员        | 说明            | 类型                | 默认值        |
|------------|-----------------|--------------------|--------------|
| appid      | appid           | String             | 无           |
| callback   | 验证成功的回调函数 | function           | 无           |
| options    | 配置参数         | object              | 无          |

### 示例
## 1. 配置node 环境变量 ```TENCENT_CAPTCHA_APPID``` 则组件使用时可以省略。
#### vue:
```
编辑env文件 添加：
process.env.TENCENT_CAPTCHA_APPID: 'xxxx'

```

#### nuxt:
```
export default {
  env: {
    TENCENT_CAPTCHA_APPID: 'xxxx'
  }
};
```

## 2. 配置组件 ```appid``` 默认覆盖 ```TENCENT_CAPTCHA_APPID```
``` html
<vueTencentCaptcha :options="options" @callback="captchaCallback">
  点我啊
</vueTencentCaptcha>

<vueTencentCaptcha appid="2028109764" @callback="captchaCallback" />
```

``` html
<vueTencentCaptcha appid="2028109764" :options="options" @callback="captchaCallback">
  点我啊
</vueTencentCaptcha>

<vueTencentCaptcha appid="2028109764" @callback="captchaCallback" />
```

``` js
options : {
  bizState: '123',
},

// 隐藏验证码
this.$root.captcha.destroy(); 
// 显示验证码
this.$root.captcha.show();

// 回调
captchaCallback(res) {
  console.log(res);
}
```

