import { defineComponent } from 'vue';
import Button from '@/components/Button/Button.vue';
import InputField from '@/components/InputField/InputField.vue';
import Selection from '@/components/Selection/Selection.vue';
import { WordList } from '@/types/WordList';
import { Language } from '@/types/enum/Language';

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
            lernsetWords: [] as Array<WordList>,
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
            this.lernsetWords.splice(id, 1);
        },
        addWord() {
            if (this.wordsSet.firstWord !== '' && this.wordsSet.secondWord !== '') {
                const words = {
                    firstWord: {word: this.wordsSet.firstWord, language: this.languageMapper(this.firstWordLanguage)},
                    secondWord: {word: this.wordsSet.secondWord, language: this.languageMapper(this.secondWordLanguage)}
                } as WordList
                this.lernsetWords.push(words);
                this.resetWordSet();
            }
        },
        languageMapper(language: string): Language {
            if (language.toLocaleUpperCase() === Language.ENGLISH.toString()) {
                return Language.ENGLISH;
            } else if (language.toLocaleUpperCase() === Language.FRENCH.toString()) {
                return Language.FRENCH;
            } else if (language.toLocaleUpperCase() === Language.GERMAN.toString()) {
                return Language.GERMAN;
            } else {
                return Language.SPANISH;
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
    }
})