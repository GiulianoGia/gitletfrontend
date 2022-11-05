import { validatePassword } from '@/Helper/valid';
import { computed, defineComponent } from 'vue';

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
            active: false
        }
    },
    methods: {
        /*
        validate():void {
            if (this.dataType.toString() == 'password') {
                if (!validatePassword(this.text)) {
                    this.hasError = true;
                }
            }
        }
        */
    },
    watch: {
        'text': function() {
            this.maxNumber = this.count - this.text.length;
            if (this.text.length > 0) {
                this.active = true;
            } else {
                this.active = false;
            }
        }
    },
})