export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ADD_MEMORY = "ADD_MEMORY";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return ({type: CHANGE_OPERATION, payload: operation})
}

export const addMemory = (total) => {
    return({type:ADD_MEMORY, payload:total})
}

export const memoryRecall = (memory) => {
    return ({type:MEMORY_RECALL, payload: memory})
}

export const clearMemory = () => {
    return ({type:CLEAR_MEMORY, payload: 0});
}