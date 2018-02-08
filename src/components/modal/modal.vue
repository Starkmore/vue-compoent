<template>
 <div>
   <transition name="background">
       <div  class="modal-bg" v-if="modalShow" @click="maskClosable"></div>
   </transition>
   <transition name="modal">
     <div class="modal-back" v-if="modalShow" :style="{width:width}">
       <div class="modal" >
         <div class="modal-header">
             <h5>{{title}}</h5>
             <i class="iconfont icon-close" @click="handleClose()"></i>
         </div>

         <div class="modal-body">
           <slot name="body"> 这是Modal弹框的主体 </slot>
         </div>
         <div class="modal-footer" v-if="footerShow">
           <slot name="footer">
             <button type="button" class="modal-cancel" @click="onCancel">取消</button>
             <button type="button" class="modal-ok" @click="onOk">关闭</button>
           </slot>
         </div>
       </div>
     </div>
   </transition>
 </div>

</template>
<script>
  export default {
    name: 'Modal',
    props:{
      modalShow:{
          type:Boolean,
          default:false,
      },
      footerShow:{
        type:Boolean,
        default:true,
      },
      title:{
        type:String,
        default:'标题',
      },
      width:{
        type:String,
        default:'30%'

      }

    },
    data () {
          return {
          }
    },
    methods: {
      handleClose: function () {
        this.$emit('handleClose');
      },
      onOk(){
        this.$emit('onOk');
      },
      onCancel(){
        this.$emit('onCancel');
        },
      maskClosable () {
        this.$emit('maskClosable');
      }
      },

  }
</script>
<style scoped>
   @import "./style/icon/iconfont.css";
   @import "./style/modal.css";

</style>
