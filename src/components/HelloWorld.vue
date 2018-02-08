<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <i-modal :modal-show="isShow"
             width="30%"
             @handleClose="isShow=false"
             @onOk="isShow=false"
             @onCancel="isShow=false"
             @maskClosable="isShow=false">
          <div slot="body">
              <div>身体部分</div>
              <div>身体部分</div>
          </div>
    </i-modal>


    <div style="margin-bottom: 40px">
      <button @click="clickMe()">modal点击我</button>
    </div>

    <div style="margin-bottom: 40px">
      <button @click="messageClick()">message测试</button>
    </div>

    <div style="margin-bottom: 40px">
      <button @click="show=!show">transition测试</button>
      <transition name="fade">
        <p v-show="show">hello</p>
      </transition>
    </div>

    <div style="margin-bottom: 40px">
      <button @click="loadingClick()">loading测试</button>
    </div>

    <div style="margin-bottom: 40px">
      <button @click="messageLoadingClick()">messageloading测试</button>
    </div>


    <loading
      load-name="spinning"
      loading-title="加载中"
      :loading="loadingShow">
    </loading>




  </div>
</template>
<script>
import iModal from '../components/modal/modal.vue'
import loading from './loading/loading.vue'
export default {
  components:{iModal,loading},
  name: 'HelloWorld',
  data () {
    return {
      msg: 'vue 组件实验室',
      isShow:false,
      show:false,
      footerShow:false,
      loadingShow:false,
      messageLoadingShow:false
    }
  },
  created () {
  },
  methods: {
    clickMe () {
      this.isShow=true
    },
    messageClick () {
      this.$message ({
        type:'info',
        text:'温馨提示：消息有点长，耐心等待',
      });
    },
    loadingClick () {
      this.loadingShow = true
    },
    messageLoadingClick () {

        this.$messageLoding({show:false})

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fade-enter-active,.fade-leave-active{
  animation: bounce-in .5s;

 }
@keyframes bounce-in {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fade-leave,.fade-leave-active{
  animation: bounce-out .5s;
}
@keyframes bounce-out {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);

  }
}


</style>
