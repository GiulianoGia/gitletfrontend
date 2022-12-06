import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SearchField',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            deafult: 'search'
        }
    },
    data() {
        return {
            input: '',
            label: this.label as String
        }
    }
})