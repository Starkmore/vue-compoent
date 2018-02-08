<template>
  <transition name="message-fade">
    <div v-if="show" :class="['message', type? `message-${ type }` : '']">
      <i v-if="type === 'warning'" class="iconfont icon-warning"></i>
      <i v-if="type === 'error'" class="iconfont icon-error"></i>
      <i v-if="type === 'success'" class="iconfont icon-success"></i>
      <i v-if="type === 'info'" class="iconfont icon-info"></i>
      <img v-if="type === 'loading'" style="position:relative;top: 3px" src="./style/oval.svg" width="15" alt="">
      <span class="message-con">{{text}}</span>
    </div>
  </transition>
</template>
<script type="text/babel">
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
  };
  export default {
    data() {
      return {
        show:false,
        text:'',
        type:''
      };
    },
  };
</script>
<style scoped="">
   @import "./style/icon/iconfont.css";
   @import "./style/message.css";
</style>
