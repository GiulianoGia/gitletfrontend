import { defineComponent } from 'vue';
import { User } from '@/types/User'
import { createUser } from "@/Helper/user";
import { isEmpty } from '@/Helper/auth';
import { validateEmail, validatePassword } from '@/Helper/valid';
import InputField from '@/components/InputField/InputField.vue';
import Button from '@/components/Button/Button.vue';

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
    methods: {
        async createNewUser() {
            if (isEmpty(this.user) && validateEmail(this.user.email) && validatePassword(this.user.password) && typeof this.user.age === 'number') {
                await createUser(this.user.username, this.user.password, this.user.age, this.user.email);
            } else this.showError();
        },
        showError() {
            this.error = true;
            setTimeout(() => {this.error = false}, 1500);
        }
    }
})