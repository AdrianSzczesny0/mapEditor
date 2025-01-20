import { EVENTS, createEvent } from "../EventListeners";


export class DetailsModal{
    constructor(app){
        this.app = app;
        this.modal = document.getElementById("detailsModal");
        this.detailsHeader = document.getElementById("detailsHeader");
        this.detailsContent = document.getElementById("detailsContent");
        this.detailsMinBtn = document.getElementById("detailsMinBtn");
        this.detailsCloseBtn = document.getElementById("detailsCloseBtn");
        this.subWindows = document.querySelectorAll(".subwindow");

        this.info ={
            name: document.getElementById("name"),
            id: document.getElementById('id'),
        }
        this.transform = {
            x:document.getElementById('posX'),
            y:document.getElementById('posY'),
            w:document.getElementById('width'),
            h: document.getElementById('height'),
        }
        this.init();
    }
    init(){
        this.modal.style.left=`${window.innerWidth-525}px`;
        this.modal.style.top=`${10}px`;
        this.addEventListeners();
    }
    addEventListeners(){
        this.detailsMinBtn.addEventListener("click", (e)=>{
            this.detailsContent.classList.toggle('hidden');
        })
        this.detailsCloseBtn.addEventListener("click", (e)=>{
            this.modal.classList.toggle('hidden');
        })
        this.detailsHeader.addEventListener("pointerdown", (e)=>{
            createEvent(EVENTS.WINDOW_CLICK,{data:this});
            this.detailsHeader.classList.toggle('grabbed');
        })
        this.detailsHeader.addEventListener("pointerup", (e)=>{
            this.app.selectedWindow = null;
            this.detailsHeader.classList.toggle('grabbed');
        })

        this.subWindows.forEach(window => {
            let subwindow = window.querySelector('.header');
            let contentSection = window.querySelector(".subContent");
            subwindow.addEventListener('click', (e)=>{
                contentSection.classList.toggle('hidden');
            })
        });
    }
}




