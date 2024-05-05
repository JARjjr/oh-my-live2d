# 模型选项

模型选项接收一个有模型选项对象组成的数组, 您可以通过这个选项来配置模型地址来源以及缩放比例、舞台大小等

```ts
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  models: [
    // 在这里进行配置
    {
      path: 'https://model.oml2d.com/Senko_Normals/senko.model3.json',
      position: [-10, 20]
    }
  ]
});
```

## 选项

<!-- --- -->

### mobilePosition

- 类型: `[x: number, y:number]`

- 默认值: `[0,0]`

移动端时模型在舞台中的位置。x: 横坐标, y: 纵坐标

---

### mobileScale

- 类型: `number`

- 默认值: `0.1`

移动端时模型的缩放比例

---

### mobileStageStyle

- 类型: `object`

移动端时舞台的样式, 支持传入CSS对象, 传入的样式将通过内联样式作用于舞台元素, 舞台的默认宽高将自适应模型的宽高, 舞台内Canvas元素的宽高始终与舞台保持一致

---

### motionPreloadStrategy

- 类型: `ALL | IDLE | NONE`

- 默认值: `IDLE`

动作预加载策略

---

### name

- 类型: `string`

模型的唯一标识, 当您需要判断当前模型时会非常有用

---

### path

- 类型: `string | [string]`

模型的 json 文件 url 地址, 必填项。类型 [string] 可以切换衣服。

---

### position

- 类型: `[x: number, y:number]`

- 默认值: `[0,0]`

模型在舞台中的位置。x: 横坐标, y: 纵坐标

---

### scale

- 类型: `number`

- 默认值: `0.1`

模型的缩放比例

---

### showHitAreaFrames

- 类型: `boolean`

是否显示该模型的点击区域框, 该选项是为了方便您预览和调试模型的可点击区域, 当这个选项为true时,将显示该模型的所有可点击区域, 点击区域的大小与位置取决于模型本身

---

### stageStyle

- 类型: `object`

定义舞台样式, 支持传入CSS对象, 传入的样式将通过内联样式作用于舞台元素, 舞台的默认宽高将自适应模型的宽高, 舞台内Canvas元素的宽高始终与舞台保持一致

---

### volume

- 类型: `number`

- 默认值: `0.5`

模型播放声音的音量, 声音与动作一起播放, 如果模型存在声音资源的话, 值为 0-1 之间的number类型, 0为静音

---
