import { defineComponent } from 'vue';
import { Group } from '@/types/Group'
import { getUsersGroup } from '@/Helper/group';

export default defineComponent({
    name: 'Groups',
    data() {
        return {
            groups: {} as Array<Group>
        }
    },
    async created() {
        (await this).groups = await getUsersGroup() as Array<Group>
    }
})