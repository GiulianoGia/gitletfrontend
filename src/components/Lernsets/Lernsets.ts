import { defineComponent } from 'vue';
import { Lernset } from '@/types/Lernset';
import { getLernsetFromUser } from '@/Helper/lernsets';
import { Word } from '@/types/Word';
import { getAllWordsFromLernset } from '@/Helper/Words'

export default defineComponent({
    name: 'Lernsets',
    data() {
        return {
            lernsets: {} as Array<Lernset>,
        }
    },
    methods: {
        async getWordsFromLernset(name: string) {
            const words = await getAllWordsFromLernset(name);
            console.log(words);
        }
    },
    async created() {
        this.lernsets = (await this).lernsets = await getLernsetFromUser() as Array<Lernset>
    }
})