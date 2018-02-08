<template>
  <transition name="message-fade">
    <div v-if="show" :class="['message', type? `message-${ type }` : '']">
      <img  style="position:relative;top: 3px" src="./svg/oval.svg" width="15" alt="">
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
        text:'加载中',
        type:''
      };
    },
  };
</script>
<style scoped="">
  .message{
    position: fixed;
    border-radius: 4px;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    transition: top .2s,transform .3s;
    overflow: hidden;
    color:#a6a6a6;
    display: inline-block;
    pointer-events: all;
    padding: 8px 16px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    background: #fff;
    text-align: center;
    z-index: 1000;

  }
  .message-con{
    /*margin-left:10px;*/
    font-size: 12px;
    color: #495060;
  }
  .message {
    transition: all 0.3s linear;
  }
  .message-fade-leave-active {
    transition: all 0.3s linear;
  }
  .message-fade-enter, .message-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    top: 0;
    opacity: 0;
  }

</style>

