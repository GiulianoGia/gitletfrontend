import { getLernsetById } from '@/Helper/lernsets';
import { Lernset } from '@/types/Lernset';
import { defineComponent } from 'vue';
import options from '@/mocks/options.json';
import Carousel from '@/components/ Carousel/Carousel.vue';
import { getAllWordsFromLernset } from '@/Helper/words';
import { WordList } from '@/types/WordList';

export default defineComponent({
    name: 'lernset-view',
    data() {
        return {
            lernset: {} as Lernset,
            options: options,
            words: {} as Array<WordList>
        }
    },
    components: {
        Carousel
    },
    async created() {
        let id = this.$route.params.id;
        if (typeof id == 'string') (await this).lernset = await getLernsetById(parseInt(id));
        (await this).words = await getAllWordsFromLernset(this.lernset.name);
    },
})