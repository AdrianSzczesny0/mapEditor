import { DetailsModal } from "../UI/Components/DetailModal/DetailsModal";
import { EVENTS } from "../UI/Components/EventListeners";


export class AppManager{
    constructor(){
        this.mousePosition= {
            x:0,
            y:0
        };
        this.grabbedOffest = {
            x:0,
            y:0
        }
        this.selectedSprite;
        this.selectedWindow;
        this.detailsModal={
            isVisible:true,
            isMinimized:false,
            data: undefined,
            object:undefined
        }
        this.chunkModal = {
            isVisible:true,
            isMinimized:false,
            data: undefined,
            object:undefined
        }
        this.init();
    }
    init(){
        this.mousePositionEventListener();
        this.initDetailsModal();
        this.addGlobalEventHandler();
    }
    mousePositionEventListener(){
        document.body.addEventListener('mousemove', (e)=>{
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;

            if(this.selectedWindow != undefined && this.selectedWindow !=null){
                this.updateWindowPosition();
            }
        })
    }
    getOffset(){
        let modalStyle = window.getComputedStyle(this.selectedWindow);
        let modalX = Math.floor(modalStyle.getPropertyValue('left').replace('px',''));
        let modalY = Math.floor(modalStyle.getPropertyValue('top').replace('px',''));
        this.grabbedOffest.x = this.mousePosition.x - modalX;
        this.grabbedOffest.y = this.mousePosition.y - modalY;
    }

    resetOffset(){
        this.grabbedOffest.x = 0;
        this.grabbedOffest.y = 0;
    }

    updateWindowPosition(){
        this.selectedWindow.style.left = `${this.mousePosition.x - this.grabbedOffest.x}px`;
        this.selectedWindow.style.top = `${this.mousePosition.y - this.grabbedOffest.y}px`;
    }

    initDetailsModal(){
        this.detailsModal = new DetailsModal(this);
    }

    addGlobalEventHandler(){
        window.addEventListener(EVENTS.WINDOW_CLICK, (e)=>{
            console.log('CLICKED');
            const window = e.detail.data;
            this.selectedWindow = window.modal;
            this.getOffset();
        })
    }
}
