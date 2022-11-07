import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button',
    props: {
        label: {
            type: String,
            default: 'Click'
        },
        size: {
            type: String,
            default: 'medium',
            validator(value: string) {
                return ['small', 'medium', 'large', 'max'].includes(value)
            }
        }
    }
})