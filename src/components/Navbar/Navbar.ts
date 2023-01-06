import { hideSidebar, showSidebar } from '@/Helper/sideBar';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navbar',
    data() {
        return {
            isSidebarActive: false
        }
    },
    methods: {
        showSidebar() {
            this.isSidebarActive = true;
            showSidebar();
        },
        hideSidebar() {
            this.isSidebarActive = false;
            hideSidebar();
        }
    }
})