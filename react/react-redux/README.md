##### react-cli
npm install create-react-app -g

进入项目目录
create-react-app   项目名字

环境的配置依赖在react-scripts 大礼包
将内部的配置文件迁移到外部
npm run eject

npm install  less less-loader --save-dev
在  config文件夹下 webpack。config。js 配置less 参考 sass

##### 模拟事件总线
在react 没有事件总线概念
可以通过 node events模块进行模拟

#### Flux Redux react-redux vuex
store
import { createStore } from 'redux';
const store = createStore(reducter);
store.getState() 获取全局状态值

actionCreator
action 本质是一个对象 里面有一个必须值 type

dispatch
通过dispatch 来触发修改
reducer
本质就是一个函数
let reducer=(state,action)=>{
   //state 全局状态值
   //action  用户进行触发
   //修改状态值 不能再原值上进行修改
   //将新的状态值进行返回
}
#### redux 使用
文件配置
全局的state值相关
1.获取 store.getState()
2.通过store.dispatch(action)来通知reducer进行数据的处理
3..监听全局状态值发生变化 执行回调函数
state.subscrib(()=>{
})

#### redux 复习
store.js
redux 的初始配置  

reducer.js
本质是一个函数 state action
dispatch 触发 将action 传递到reducer里边  数据处理 返回

state.js
管理的全局状态  变量

actionCreator.js
触发dispacth

使用 引入store.js

获取全局的状态值  store.getState()
修改状态值 通过actionCreate 触发dispatch方法
监听全局状态的变化 触发修改函数
store.subscribe(()=>{

})

####redux 的模块划分
目的是防止在一个文件中处理多个全局状态值 
将一个全局状态值作为一个模块进行拆分
拆分之后 获取数据要加上拆分的模块名
combineReducers


##### 遇到的问题
只要获取全局状态 
引入store  store.getState（）
只要我们要做修改 
引入actionCeator 
做监听处理

能不能获取一次 其他的组件都可用 ，ok

#### react-redux
将redux 一些处理代码进行优化。

#### 安装react-redux

### 核心概念

容器组件（智能组件）、UI组件（木偶组件）

react-redux觉得如果一个组件想要使用到store中的数据或者是actionCreator的方法，我们都应该将其变化为容器组件包裹UI组件的样子

其中，容器组件负责连接store，将状态、方法传递给UI组件，UI组件从属性上取得这些api后进行使用

而且，不需要担心是容器组件可以根据UI组件来生成


### 核心API

Provider 、 connect（mapStateToProps，mapDistpatchToProps）

Provider负责将store相关的api，传入到内部所有的容器组件中

connect负责根据UI组件来生成容器组件

### 使用方法与细节

1. 需要安装react-redux工具 

2. 需要在组件的最外层套上Provider组件，并为其传入store

3. 利用connect将需要使用store相关api的组件变成容器组件嵌套UI组件的模式

    connect方法的返回值是一个函数，这个函数接收到UI组件之后会返回一个容器组件，容器内部已经嵌套了UI组件

    Provider组件会利用context上下文将自己属性中store传递给自己的子级组件，而容器组件会取得context上面的store相关的api

    我们可以在connect函数中传入mapStateToProps/mapDispatchToProps参数来掌控容器组件给UI组件传递属性的过程

    mapStateToProps的作用：
    
    将store中的state传递到UI组件的属性上
    值为一个函数，接收到的就是store中的state
    返回上面，UI组件的属性上就有什么
    并且，因为容器组件中已经做好了store.subscribe的处理，所以一旦store中的状态变化，容器组件就马上能得知，就会重新给UI组件传入新的数据

    mapDispatchToProps的作用：

    可以将能使用到dispatch的一些方法传递到UI组件上
    值为一个函数，接收到的就是store中的dispatch
    返回上面，UI组件的属性上就有什么
    这个时候actionCreator就变得很纯粹，只需要创建action，dispatch action的动作可以放到mapDispatchToProps的方法中，也就说，在mapDispatchToProps给UI组件传递的函数中将actionCreator创造好的action给dispatch走

    但是这样的写法优点不舒服，因为actionCreator里有一个方法，还需要在mapDispatchToProps里再写一个方法

    所以可以利用redux中的bindActionCreators将actionCreator中的方法直接放入到UI组件中并且将其返回的action给直接dispatch走


    因为在组件中既要用到store中的状态，也要用到actionCreator的方法，导致这个组件引入了很多东西，其实我们可以将这些逻辑封装取出

    group-todolist.js:
    
    import actionCreator from '../store/todolist/actionCreator'
    import { connect } from 'react-redux'
    import { bindActionCreators } from 'redux'

    let GroupTodolist = connect(state => state.todolist, dispatch => {
        return bindActionCreators(actionCreator, dispatch)
    })

    export default GroupTodolist
---
    TodoContent:

    import GroupTodolist from '../../modules/group-todolist'

    ....

    export default GroupTodolist(TodoContent)




### redux-thunk

我们上面的使用方法很简单，也很舒服

但是有一点小问题，如果我们有了异步操作，比如我们会先执行一个ajax调用之后再去更改状态的话，这个异步动作，没有地方放了

1. 我们不能把异步动作放到组件中，因为UI组件只负责使用数据，如果有其他的异步代码，让UI组件组件不纯粹

2. 理论上来说放到actionCreator的方法中最合适，但是,因为actionCreator目前只是专注于创建action和返回action，无法放入异步操作


所以，我们需要用到redux的中间件工具：redux-thunk、redux-promise、redux-saga....

在这里我们研究一下redux-thunk

它的使用方法及其简单：

1. 安装redux-thunk

2. 在创建store的时候使用中间件

    import { createStore, applyMiddleware } from 'redux'

    import thunk from 'redux-thunk'

    import reducer from './reducer'

    const store = createStore(reducer, applyMiddleware(thunk) )

3. 这个时候，actionCreator的方法就可以返回一个能接收到dispatch的一个函数，我们可以在这个函数中进行异步操作之后，将actionCreator创建好的action给发送走
