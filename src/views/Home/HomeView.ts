import { defineComponent } from 'vue';
import { User } from '@/types/User'
import { getCurrentUser } from '@/Helper/user';
import Lernsets from '@/components/Lernsets/Lernsets.vue';
import Features from '@/components/Features/Features.vue';
import SearchField from '@/components/SearchField/SearchField.vue';
import { Group } from '@/types/Group';
import Groups from '@/components/Groups/Groups.vue'

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
    (await this).user = await getCurrentUser() as User
  },
});