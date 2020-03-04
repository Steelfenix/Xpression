import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css';

Vue.config.productionTip = false;

let handleOutsideClick;

Vue.directive('closable', {
  bind(el, binding, vnode) {
    handleOutsideClick = e => {
      e.stopPropagation();
      const { handler, exclude } = binding.value;

      let clickedOnExcludedEl = false;
      if (exclude) {
        exclude.forEach(refName => {
          if (!clickedOnExcludedEl) {
            const excludedEl = vnode.context.$refs[refName];
            clickedOnExcludedEl = excludedEl.contains(e.target);
          }
        });
      }
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        vnode.context[handler]();
      }
    };
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
  },

  unbind() {
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideClick);
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// https://hqq.tv/player/embed_player.php?dl=0029q3gtuttkzzbongo1qjnh&#iss=MTg3LjE5MC4xNzEuMTg0
