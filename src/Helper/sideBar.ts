import store from "@/store/sideBar";

export function showSidebar(): void {
    store.state.isActive = true;
}

export function hideSidebar(): void {
    store.state.isActive = false;
}