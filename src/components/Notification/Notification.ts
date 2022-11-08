import store from '@/store';
import { computed, defineComponent } from 'vue';
import notification from '@/store/notification';

export default defineComponent({
    name: 'notification',
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        isActive() {
            return notification.getters('getIsActive');
        }
    }
});