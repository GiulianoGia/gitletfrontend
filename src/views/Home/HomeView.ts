import { defineComponent, getCurrentInstance } from 'vue';
import { getCookie } from '@/Helper/cookie'
import router from '@/router';
import { redirectIfAuth } from '@/Helper/auth';
import store from '@/store/user';
import { User } from '@/types/User'
import { getCurrentUser } from '@/Helper/user';
import Lernsets from '@/components/Lernsets/Lernsets.vue';
import { Lernset } from '@/types/Lernset';
import { getLernsetFromUser } from '@/Helper/lernsets';
 
export default defineComponent({
  name: 'Home',
  data() {
    return {
      user: {} as User,
    }
  },
  components: {
    Lernsets
  },
  methods: {
  },
  computed: { 
  },
  async created() {
    (await this).user = await getCurrentUser() as User
  },
});