### wechat-validator

> 微信小程序验证器

### 简单使用

```shell
npm i wechat-validator
```

安装完成，点击微信小程序菜单栏 `工具` 下的 `构建npm`

### 引入

```javascript
import validator from "wechat-validator";
```

### 验证规则集

- 给定字符串是否为空

```javascript
validator.isEmpty(name)
```

- 给定手机号是否合法

```javascript
validator.isPhone(phone)
```

- 给定字符串是否含有特殊字符

```javascript
validator.isName(name)
```

- 给定符串是否超出指定长度

```javascript
validator.validateLength(content, 150)
```

- 给定对象是否为空

```javascript
validator.objectEmpty(obj)
```

- 给定数组是否为空

```javascript
validator.isEmptyArray(arr)
```

- 数组是否包含某个元素

```javascript
validator.inArray(arr, needle)
```

- 给定身份证号是否合法

```javascript
validator.isIDCard(idCard)
```