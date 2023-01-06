import { defineComponent } from 'vue';
import notification from '@/store/notification';

export default defineComponent({
    name: 'notification',
    computed: {
        isActive() {
            return notification.state.isActive;
        }
    }
});