# todolist案例 额外添加

Date: October 7, 2021 9:03 PM

- 根据视频添加了编辑功能
- 自己额外添加了编辑时不可点击别的按钮的功能
- 修改了一些css样式

### 实现

- 编辑功能：
    - 点击编辑按钮时，隐藏itme_text显示input框，隐藏编辑按钮显示完成按钮，执行editClick函数
    - 点击完成按钮时，显示itme_text隐藏input框，显示编辑按钮隐藏完成按钮，执行editComplete函数
- 禁止点击功能：
    - 在App组件里设置全局样式，然后操作各个组件的class是否添加该属性
        
        ```jsx
        .forbindClick{
          pointer-events: none;
        }
        ```
        
    - App的data里设置了一个isForbidClick的空数组，然后通过props方法传递给各个组件，组件里面绑定class为isForbidClick数组，这样就可以根据是否在isForbidClick数组里面添加“forbindClick”实现禁止点击
    - 操作isForbidClick的方法是通过消息订阅与发布，使用了pubsub-js库。在TodolistItem里的编辑按钮的点击事件来发布消息，App里的created钩子里订阅消息，根据传递的staus来决定是往isForbidClick里push还是pop
- item的focus样式：和实现禁止点击类似的方法，设置了一个isFocus空数组，绑定item的class样式为isFocus，根据按钮点击事件来posh或pop该数组

### 已知BUG

- 禁止按钮点击时，checkbox的勾选框还是可以点击，header的输入框有时候也可以点击，有时候不可点击
- 编辑后的input输入框和item_text的字体大小设置相同，但是显示的时候还是大小不一样，产生割裂感
    - 找到原因了，是font-family的问题
- 在某个item的编辑状态下，下一个item的hover的阴影效果会被覆盖

### 之后的计划

- 打算把header改成搜索功能，添加功能放在footer里，然后再实现一个弹窗的功能
- 考虑使用一下css动画库来优化一下动画效果