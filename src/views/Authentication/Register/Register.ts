import { defineComponent } from 'vue';
import { User } from '@/types/User'
import { createUser, setUserSession } from "@/Helper/user";
import { validateEmail, validatePassword } from '@/Helper/valid';
import InputField from '@/components/InputField/InputField.vue';
import Button from '@/components/Button/Button.vue';
import { isObjectEmpty } from '@/Helper/object';

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
            if (isObjectEmpty(this.user) && validateEmail(this.user.email) && validatePassword(this.user.password) && typeof parseInt(this.user.age.toString()) === 'number') {
                await createUser(this.user.username, this.user.password, this.user.age, this.user.email);
            } else this.showError();
        },
        showError() {
            this.error = true;
            setTimeout(() => {this.error = false}, 1500);
        }
    },
})