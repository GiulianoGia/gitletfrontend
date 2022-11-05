import { defineComponent } from 'vue';
import { getCookie } from '@/Helper/cookie'
import router from '@/router';

export default defineComponent({
  name: 'Home',
  data() {
    return {

    }
  },
  created() {
      if (getCookie('user') !== undefined) {
        window.alert(getCookie('user'));
      } else {
        router.push("login");
      }
  },
});