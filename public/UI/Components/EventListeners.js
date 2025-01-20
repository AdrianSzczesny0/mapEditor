


export function draggable(eventTrigger, parent){
    eventTrigger.addEventListener('mouseDown')
}
export const EVENTS = {
    WINDOW_HOVER: "WINDOW_HOVER",
    WINDOW_CLICK: "WINDOW_CLICK"
}

export function createEvent(name, data){
    dispatchEvent(new CustomEvent(name, {detail: data}));
}