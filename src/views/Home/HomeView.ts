import { defineComponent, getCurrentInstance } from 'vue';
import { User } from '@/types/User'
import { getCurrentUser } from '@/Helper/user';
import Lernsets from '@/components/Lernsets/Lernsets.vue';
import Features from '@/components/Features/Features.vue';
import SearchField from '@/components/SearchField/SearchField.vue';
import { redirectIfAuth } from '@/Helper/auth';
import { Group } from '@/types/Group';
import Groups from '@/components/Groups/Groups.vue'
import { isObjectEmpty } from '@/Helper/object';
import { deleteCookie } from '@/Helper/cookie';
 
export default defineComponent({
  name: 'Home',
  data() {
    return {
      user: {} as User,
      groups: {} as Array<Group>
    }
  },
  components: {
    Lernsets,
    Features,
    SearchField,
    Groups
  },
  methods: {
  },
  computed: { 
    
  },
  async created() {
    redirectIfAuth('/');
    (await this).user = await getCurrentUser() as User
  },
});