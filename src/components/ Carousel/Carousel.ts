import { defineComponent, initCustomFormatter } from 'vue';
import words from '@/mocks/words.json'
import { LernsetWord } from '@/types/LernsetWord';

export default defineComponent({
    name: 'Carousel',
    data() {
        return {
            words:  words,
            currentWordNumber: 0,
            currentWord: {} as LernsetWord,
            active: false
        }
    },
    created() {
        this.currentWord = this.words[this.currentWordNumber]
    },
    methods: {
        flipCard() {
            this.active = !this.active;
        },
        nextCard() {
            if (this.currentWordNumber < this.words.length - 1) {
                this.currentWordNumber += 1;
                this.active = false;
                this.currentWord = this.words[this.currentWordNumber]
            }
        },
        previousCard() {
            if (this.currentWordNumber > 0) {
                this.currentWordNumber -= 1;
                this.active = false;
                this.currentWord = this.words[this.currentWordNumber]
            }
        }
    }
})