import { defineComponent } from 'vue';
import { Lernset } from '@/types/Lernset';
import { getLernsetFromUser } from '@/Helper/lernsets';

export default defineComponent({
    name: 'Lernsets',
    data() {
        return {
            lernsets: {} as Array<Lernset>
        }
    },
    async created() {
        this.lernsets = (await this).lernsets = await getLernsetFromUser() as Array<Lernset>
        console.log(this.lernsets);
    }
})