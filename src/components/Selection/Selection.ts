import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Selection',
    props: {
        selection: Array,
        label: String,
        modelValue: String,
    },
    emits: ['update:modelValue'],
    data() {
        return {
            arrayList: this.selection as Array<string>
        }
    },
    methods: {
        updateSelection(event: any) {
            this.$emit("update:modelValue", event.target.value);
        }
    }
})