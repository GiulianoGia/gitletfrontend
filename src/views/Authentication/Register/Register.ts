import { defineComponent } from 'vue';
import { User } from '@/types/User'
import { createUser } from "@/Helper/user";
import InputField from '@/components/InputField/InputField.vue';
import Button from '@/components/Button/Button.vue';
import { isObjectEmpty } from '@/Helper/object';
import { showNotification } from '@/Helper/notification';

export default defineComponent({
    name: 'register',
    data() {
        return {
            user: {
                username: '',
                password: '',
                email: '',
                age: 0
            } as User,
            error: false
        }
    },
    components: {
        InputField,
        Button
    },
    mounted() {
        window.addEventListener("keypress", e => {
            if (e.code === 'Enter') {
                this.createNewUser();
            }
        });
    },
    methods: {
        createNewUser() {
            if (isObjectEmpty(this.user)) {
                createUser(this.user);
            } else showNotification();
        },
    },
})