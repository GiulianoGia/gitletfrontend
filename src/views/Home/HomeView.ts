import { defineComponent } from 'vue';
import { getCookie } from '@/Helper/cookie'
import router from '@/router';
import { redirectIfAuth } from '@/Helper/auth';
 
export default defineComponent({
  name: 'Home',
  data() {
    return {

    }
  },
  created() {
      redirectIfAuth();
  },
});