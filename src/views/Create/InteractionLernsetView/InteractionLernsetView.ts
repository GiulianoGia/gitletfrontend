import { defineComponent } from 'vue';
import Button from '@/components/Button/Button.vue';
import InputField from '@/components/InputField/InputField.vue';
import Selection from '@/components/Selection/Selection.vue';
import { redirectIfAuth } from '@/Helper/auth';
import { getCurrentUser } from '@/Helper/user';
import { User } from '@/types/User';

export default defineComponent({
    name: 'InteractionLernsetView',
    data() {
        return {
            wordsSet: {
                firstWord: '',
                secondWord: ''
            },
            createButton: true,
            addButton: true,
            lernsetWords: [] as any,
            lernsetName: '',
            lernsetDescription: '',
            firstWordLanguage: '',
            secondWordLanguage: '',
            languages: ['English', 'German', 'French', 'Spanish'] as Array<String>,
        }
    },
    components: {
        Button,
        InputField,
        Selection
    },
    mounted() {
        window.addEventListener("keypress", e => {
            if (e.code === 'Enter') {
                this.addWord();
            }
        });
    },
    watch: {
        wordsSet: {
            deep: true,
            handler() {
                if (this.wordsSet.firstWord !== '' && this.wordsSet.secondWord !== '') {
                    this.addButton = false;
                } else {
                    this.addButton = true;
                }
            }
        },
        lernsetWords: {
            deep: true,
            handler() {
                if (this.lernsetWords.length > 0) {
                    this.createButton = false;
                } else {
                    this.createButton = true;
                }
            }
        }
    },
    methods: {
        createNewLernset() {

        },
        deleteWord(id: number) {
            const index = this.lernsetWords.indexOf(id);
            this.lernsetWords.splice(index, 1);
        },
        addWord() {
            if (this.wordsSet.firstWord !== '' && this.wordsSet.secondWord !== '') {
                const words = {
                    firstWord: this.wordsSet.firstWord,
                    secondWord: this.wordsSet.secondWord
                }
                this.lernsetWords.push(words);
                this.resetWordSet();
            }
        },
        resetWordSet() {
            (<HTMLInputElement>document.getElementById("firstInput")).value = "";
            (<HTMLInputElement>document.getElementById("secondInput")).value = "";
            this.wordsSet.firstWord = '';
            this.wordsSet.secondWord = '';
        },
        addFirstWordToList(evt: Event) {
            this.wordsSet.firstWord = (evt.target as HTMLInputElement).value;
        },
        addSecondWordToList(evt: Event) {
            this.wordsSet.secondWord = (evt.target as HTMLInputElement).value;
        }
    },
    async created() {
        redirectIfAuth('interaction/lernset');
      },
})