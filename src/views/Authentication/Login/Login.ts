import { defineComponent } from "vue";
import { getUser } from "@/Helper/user";
import { isEmpty } from '@/Helper/auth';
import { validateEmail, validatePassword } from "@/Helper/valid";
import { User } from '@/types/User'
import router from "@/router";
import InputField from "@/components/InputField/InputField.vue";
import Button from "@/components/Button/Button.vue";

export default defineComponent({
    name: 'login',
    data() {
        return {
            user: {
                username: '',
                password: ''
            } as User,
            error: false
        };
      },
      components: {
        InputField,
        Button
      },
      methods: {
        async loginUser() {
            if (!isEmpty(this.user) && validateEmail(this.user.email) && validatePassword(this.user.password)) {
                router.push("/");
            } else this.showError()
        },
        showError() {
            this.error = true;
            setTimeout(() => {this.error = false}, 1500);
        }
      }
}); 