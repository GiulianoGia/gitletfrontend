import { defineComponent, getCurrentInstance } from 'vue';
import { getCookie } from '@/Helper/cookie'
import router from '@/router';
import { redirectIfAuth } from '@/Helper/auth';
import store from '@/store/user';
import { User } from '@/types/User'
import { getCurrentUser } from '@/Helper/user';
 
export default defineComponent({
  name: 'Home',
  data() {
    return {
      user: {} as User
    }
  },
  components: {
  },
  methods: {
  },
  computed: {
    
  },
  async created() {
    (await this).user = await getCurrentUser() as User
  },
});