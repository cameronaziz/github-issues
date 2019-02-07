const stateKey = 'persisted-state'

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(stateKey);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch(error) {
        return undefined
    }
} 

export const persistState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(stateKey, serializedState)
    } catch(error) {
        console.log(error);
    }
}