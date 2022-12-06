import { getLernsetById } from '@/Helper/lernsets';
import { Lernset } from '@/types/Lernset';
import { defineComponent } from 'vue';
import options from '@/mocks/options.json';
import Carousel from '@/components/ Carousel/Carousel.vue';
import words from '@/mocks/words.json'

export default defineComponent({
    name: 'lernset-view',
    data() {
        return {
            lernset: {} as Lernset,
            options: options,
            words: words
        }
    },
    components: {
        Carousel
    },
    async created() {
        let id = this.$route.params.id;
        if (typeof id == 'string') (await this).lernset = await getLernsetById(parseInt(id));
    }
})