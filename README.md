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

### todo list项目结构

- App
    - TodolistHeader
    - TodolistList
        - TodolistItem
        - TodolistItem
        - ...
    - TodolistFooter
    

**App里的methods：**

- pushTodo：将一个todo添加到data里的todos
- switchTodo：将一个todo的isDone值取反，然后TodolistItem是通过v-model与todos绑定的，所以可以反映到todos里去
- deleteTodo：根据传递到每个TodolistItem里的index值删除todos里的对应项
- deleteAll：删除todos里的所有isDone值为真的项
- selectAll：根据传进来的type值来决定是全选还是取消全选，全选或取消全选都是通过操作每一项的isDone
    
    

**App里的computed：**

- todosAll：计算所有todo的数量
- todosDone：计算已完成的todo的数量

**App里的watch：**

- todos：todos发生改变则把todos存入localStorage里，一开始methods里的每个方法都要调用一次localStorage，优化过后直接写在watch里监视

**App里的生命周期：**

- created：
    - 读取localStorage数据