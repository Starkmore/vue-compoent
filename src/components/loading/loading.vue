<template>
<transition name="loading">
  <div class="loading-bg" v-show="loading">
    <div class="loading-center">
     <span v-if="loadName === 'oval' ">
         <img src="./svg/oval.svg" :width="loadWidth" alt="">
     </span>

      <span v-if="loadName === 'spinning'">
          <img src="./svg/spinning-circles.svg" :width="loadWidth" alt="">
     </span>

      <span v-if="loadName === 'ball'">
          <img src="./svg/ball-triangle.svg" :width="loadWidth" alt="">
     </span>

      <span v-if="loadName === 'three'">
          <img src="./svg/three-dots.svg" :width="loadWidth" alt="">
     </span>
      <span v-if="loadName === 'tail'">
          <img src="./svg/tail-spin.svg" :width="loadWidth" alt="">
     </span>

      <span v-if="loadName === 'puff'">
          <img src="./svg/puff.svg" :width="loadWidth" alt="">
     </span>

      <span v-if="loadName === 'bars'">
          <img src="./svg/bars.svg" :width="loadWidth" alt="">
     </span>
      <span class="loading-title">{{loadingTitle}}</span>
    </div>
  </div>
</transition>
</template>
<script>
  export default {
     props:{
       loading: {
         type: Boolean,
         default: false
       },
       loadName: {
         type: String,
         default:'oval'
       },
       loadWidth: {
         type: String,
         default: '35'
       },
       loadingTitle: {
         type: String,
         default: ''
       }
     }
  }
</script>
<style scoped>
  .loading-bg{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.31);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:1;
  }
  .loading-center{
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    width: 100%;
    height: 100px;
    color: #3eb6eb;
    text-align: center;
  }
  .loading-title{
    font-size: 12px;
    color:#3eb6eb ;
    display: block;
  }

  .loading-enter-active, .loading-leave-active{
    animation: bg-in  .8s;
  }
  @keyframes bg-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .loading-leave, .loading-leave-active{
    animation: bg-out  .8s;
  }
  @keyframes bg-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
</style>
