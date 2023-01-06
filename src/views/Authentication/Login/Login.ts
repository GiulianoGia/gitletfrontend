import { defineComponent } from "vue";
import { User } from '@/types/User'
import InputField from "@/components/InputField/InputField.vue";
import Button from "@/components/Button/Button.vue";
import { isObjectEmpty } from "@/Helper/object";
import { loginUser as login } from "@/Helper/user";
import { showNotification } from "@/Helper/notification";

export default defineComponent({
    name: 'login',
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
        };
    },
    components: {
        InputField,
        Button
    },
    mounted() {
        window.addEventListener("keypress", e => {
            if (e.code === 'Enter') {
                this.loginUser();
            }
        });
    },
    methods: {
        async loginUser() {
            if (isObjectEmpty(this.user)) {
                login(this.user as User);
            } else showNotification();
        },
    }
}); 