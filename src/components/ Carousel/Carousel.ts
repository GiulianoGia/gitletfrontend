import { defineComponent } from 'vue';
import { getAllWordsFromLernset } from '@/Helper/words';
import { WordList } from '@/types/WordList';

export default defineComponent({
    name: 'Carousel',
    props: {
        lernsetName: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            words: {} as Array<WordList>,
            currentWordNumber: 0,
            active: false,
        }
    },
    async created() {
        (await this).words = await getAllWordsFromLernset(this.lernsetName) as Array<WordList>
    },
    methods: {
        flipCard() {
            this.active = !this.active;
        },
        nextCard() {
            if (this.currentWordNumber < this.words.length - 1) {
                this.currentWordNumber += 1;
                this.active = false;
            }
        },
        previousCard() {
            if (this.currentWordNumber > 0) {
                this.currentWordNumber -= 1;
                this.active = false;
            }
        }
    }
})