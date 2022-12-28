import { validateEmail, validateNumber, validatePassword, validateText } from '@/Helper/valid';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'inputField',
    props: {
        label: {
            type: String,
            default: 'type something'
        },
        withMaxNumber: {
            type: Boolean,
            default: false
        },
        modelValue: {},
        type: {
            type: String,
            required: true,
            validator(value: string) {
                return ['email', 'password', 'text', 'number'].includes(value)
            }
        },
        disableValidation: {
            type: Boolean,
            required: false,
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            text: '',
            count: 30,
            maxNumber: 0,
            content: this.value,
            hasError: false,
            active: false,
            disableValidations: this.disableValidation
        }
    }, methods: {
        validate(text: string, type: string): boolean {
            if (text !== '' && !this.disableValidations) {
                if (type === 'password') return validatePassword(text);
                else if (type === 'email') return validateEmail(text);
                else if (type === 'text') return validateText(text);
                else if (type === 'number') return validateNumber(text);
            }
            return true;
        }
    },
    watch: {
        'text': function () {
            this.maxNumber = this.count - this.text.length;
            if (this.text.length > 0) {
                this.active = true;
            } else {
                this.active = false;
            }
        }
    },
})