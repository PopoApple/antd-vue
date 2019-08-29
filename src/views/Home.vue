<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <a-button type="primary" v-on:click="testCount()">按钮sees</a-button>
      <a-button v-on:click="add2()">按钮seesxx</a-button>
      <a-button v-on:click="testGet()">testGet</a-button>
      <div class="test">
          <div class="green page-box">{{count}}</div>
          <div>{{test}}</div>
          <img v-bind:src="im" />
      </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'
  import sy from '../testCss.css'
  import im from '../baidu.png';
  import HelloWorld from '@/components/HelloWorld.vue'
  console.log(sy, im)
  export default {
    data: function() {
      return {
        test: 11,
        im,
      }
    },
    computed: {

      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState({
        // 箭头函数可使代码更简练
        count: state => state.count,

        // 传字符串参数 'count' 等同于 `state => state.count`
        countAlias: 'count',

        // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        countPlusLocalState (state) {
          return state.count + this.localCount
        }
      })
    },
    methods: {
      testCount () {
        this.test += this.count
      },
      ...mapActions({
        add: 'increment' ,// 将 `this.add()` 映射为 `this.$store.dispatch('increment')`,
        testGet: 'getTest'
      })
    },
    components: {
      HelloWorld
    }
  }
</script>
