/**
 * Created by User on 2018/2/8.
 */
import Vue from 'vue';
import messageLoading from './messageLoading.vue';
const defaults = {
  show:false,
  text:'加载中，请稍等...',
  type:'info'
};
const messageVueConstructor = Vue.extend(messageLoading);
messageVueConstructor.prototype.close = function() {
  var vm=this;
  this.$on('after-leave', _ => {
    if (vm.$el && vm.$el.parentNode) {
      vm.$el.parentNode.removeChild(vm.$el);
    }
    this.$destroy();
  });
  vm.show = false;

};
const messageBox = (options = {}) => {
  console.log(Vue.prototype.$isServer)
  if (Vue.prototype.$isServer) return;
  options = Object.assign({}, defaults, options);
  let parent = document.body ;
  let instance = new messageVueConstructor({
    el: document.createElement('div'),
    data: options
  });
  parent.appendChild(instance.$el);
  Vue.nextTick(() => {
    // console.log(instance.show)
    if(instance.show ==true){
       console.log(1)
       instance.show=true
    }else{
      console.log(2)
       instance.show=false
    }

  });
  return instance;
};

export default messageBox;
