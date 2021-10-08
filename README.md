# 70.todolist案例

Date: September 30, 2021 1:49 AM

### 组件化编码流程

1. 实现静态组件：抽取组件，使用组件实现静态页面效果
2. 展示动态数据：
    1. 数据的类型、名称是什么？
    2. 数据保存在哪个组件？
3. 交互——从绑定事件监听开始

### 过程中涉及到的知识点

- 两个组件的通信方式
- trim()是一个函数，也可以作为修饰符.trim
- v-model能修改props的对象里面的值，但不推荐使用
- line-height设置成高度一样，实现文字垂直居中
- props实现组件间通信
    - 父组件⇒子组件
    - 子组件⇒父组件 （数据定义在父组件中，父组件给子组件传递一个函数（状态提升））
- 全局事件总线进行通信
- 消息订阅与发布进行通信
- $nextTick函数

## todo list项目结构

- App
    - TodolistHeader
    - TodolistList
        - TodolistItem
        - TodolistItem
        - ...
    - TodolistFooter
    

## App结构

**methods：**

- pushTodo：将一个todo添加到data里的todos
- deleteAll：删除todos里的所有isDone值为真的项
- selectAll：根据传进来的type值来决定是全选还是取消全选，全选或取消全选都是通过操作每一项的isDone

**computed：**

- todosAll：计算所有todo的数量
- todosDone：计算已完成的todo的数量

**watch：**

- todos：todos发生改变则把todos存入localStorage里，一开始methods里的每个方法都要调用一次localStorage，优化过后直接写在watch里监视

**生命周期：**

- created：
    - 读取localStorage数据
    - 消息订阅：forbidClick
- mounted：
    - 全局事件总线 $todoBus
        - switchTodo：将一个todo的isDone值取反，然后TodolistItem是通过v-model与todos绑定的，所以可以反映到todos里去
        - deleteTodo：根据传递到每个TodolistItem里的index值删除todos里的对应项
- beforeDestroy：
    - 解绑全局事件总线$todoBus

## TodolistHeader结构

## TodolistList结构

- 作为框架，根据App传递的todos数组渲染TodolistItem

### TodolistItem结构

**methods：**

- deleteClick：触发全局事件总线$todoBus的deleteTodo事件
- switchClick：触发全局事件总线$todoBus的switchTodo事件
- editClick：
    - 添加isEdit属性
    - 发布禁止点击消息
    - 添加item的focus样式
    - 激活input的focus样式
- editComplete：
    - 更新todo的title为编辑后的内容
    - 设置todo的isEdit属性为false
    - 发布允许点击消息
    - 取消item的focus样式

## TodolistFooter结构