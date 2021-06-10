function createAnalytics(params) {
    let counter = [];
    let isDestroy = false;
    const listener = () => { counter.push(document) }
    document.addEventListener('click', listener);
    console.log(counter);
    return {


    
    }
}

window.analytics = createAnalytics()