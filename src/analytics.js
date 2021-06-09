function createAnalytics(params) {
    let counter = 0;
    let isDestroy = false;
    const listener = () => counter++
    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroy = true
        },

        getClicks() {
            if(isDestroy){
                return 'Analytics is destoyed'
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()