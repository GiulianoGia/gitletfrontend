import { defineComponent } from 'vue';
import Button from '@/components/Button/Button.vue';
import InputField from '@/components/InputField/InputField.vue';

export default defineComponent({
    name: 'InteractionLernsetView',
    data() {
        return {
            wordsSet: {
                firstWord: '',
                secondWord: ''
            },
            lernsetWords: [] as any,
            lernsetName: '',
            numberOfWords: 1,
            languages: {} as Array<String>
        }
    },
    components: {
        Button,
        InputField
    },
    mounted() {
        window.addEventListener("keypress", e => {
            if (e.code === 'Enter') {
                this.addWord();
            }
        });
    },
    methods: {
        addWord() {
            console.log(this.wordsSet.firstWord, this.wordsSet.secondWord);
            if (this.wordsSet.firstWord !== '' && this.wordsSet.secondWord !== '') {
                const words = {
                    firstWord: this.wordsSet.firstWord,
                    secondWord: this.wordsSet.secondWord
                }
                this.resetWordSet();
                this.lernsetWords.push(words);
                this.numberOfWords++
            }
        },
        resetWordSet() {
            this.wordsSet.firstWord = '';
            this.wordsSet.secondWord = '';
        },
        addFirstWordToList(evt: Event) {
            this.wordsSet.firstWord = (evt.target as HTMLInputElement).value;
        },
        addSecondWordToList(evt: Event) {
            this.wordsSet.secondWord = (evt.target as HTMLInputElement).value;
        }
    }
})