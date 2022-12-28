import { defineComponent } from "vue";
import { validateEmail, validatePassword } from "@/Helper/valid";
import { User } from '@/types/User'
import router from "@/router";
import InputField from "@/components/InputField/InputField.vue";
import Button from "@/components/Button/Button.vue";
import { isObjectEmpty } from "@/Helper/object";
import { loginUser as login} from "@/Helper/user";
import { redirectIfAuth } from "@/Helper/auth";

export default defineComponent({
    name: 'login',
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            error: false
        };
      },
      components: {
        InputField,
        Button
      },
      mounted() {
        window.addEventListener("keypress", e => {
            if (e.code === 'Enter') {
                document.getElementById("firstInput")!.focus();
            }
        });
    },
      methods: {
        async loginUser() {
            if (isObjectEmpty(this.user)) {
                login(this.user as User);
            } else this.showError()
        },
        showError() {
            this.error = true;
            setTimeout(() => {this.error = false}, 1500);
        }
    },
    created() {
        redirectIfAuth('login');
    }
}); 