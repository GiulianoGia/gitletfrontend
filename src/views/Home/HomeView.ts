import { defineComponent, getCurrentInstance } from 'vue';
import { User } from '@/types/User'
import { getCurrentUser } from '@/Helper/user';
import Lernsets from '@/components/Lernsets/Lernsets.vue';
import Features from '@/components/Features/Features.vue';
import SearchField from '@/components/SearchField/SearchField.vue';
 
export default defineComponent({
  name: 'Home',
  data() {
    return {
      user: {} as User,
    }
  },
  components: {
    Lernsets,
    Features,
    SearchField
  },
  methods: {
  },
  computed: { 
  },
  async created() {
    (await this).user = await getCurrentUser() as User
  },
});