import { computed, defineComponent } from 'vue';
import { User } from '@/types/User'
import { getCurrentUser } from '@/Helper/user';
import Button from '../Button/Button.vue';
import { deleteCookie } from '@/Helper/cookie';

export default defineComponent({
    name: 'SideBar',
    data() {
        return {
            user: {} as User
        }
    },
    components: {
        Button
    },
    methods: {
        logout() {
            deleteCookie('session');
            deleteCookie('username');
            location.reload();
        }
    },
    async created() {
        (await this).user = await getCurrentUser() as User
    },
});