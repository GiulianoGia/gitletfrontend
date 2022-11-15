import store from "@/store/notification";

export function showNotification(): void {
    store.state.isActive = true;
    setTimeout(() => {store.state.isActive = false}, 2000)
}