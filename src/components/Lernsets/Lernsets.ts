import { defineComponent } from 'vue';
import { Lernset } from '@/types/Lernset';
import { getLernsetFromUser } from '@/Helper/lernsets';
import { Word } from '@/types/Word';
import { getAllWordsFromLernset } from '@/Helper/words'
import router from '@/router';

export default defineComponent({
    name: 'Lernsets',
    data() {
        return {
            lernsets: {} as Array<Lernset>,
        }
    },
    methods: {
        navigateToLernset(id: number) {
            router.push(`/lernset/${id}`);
        }
    },
    async created() {
        (await this).lernsets = await getLernsetFromUser() as Array<Lernset>
    }
});