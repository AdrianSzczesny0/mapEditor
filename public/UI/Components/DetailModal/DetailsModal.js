

export class DetailsModal{
    constructor(app){
        this.app = app;
        this.detailsModal = document.getElementById("detailsModal");
        this.detailsHeader = document.getElementById("detailsHeader");
        this.detailsContent = document.getElementById("detailsContent");
        this.detailsMinBtn = document.getElementById("detailsMinBtn");
        this.detailsCloseBtn = document.getElementById("detailsCloseBtn");
        this.subWindows = document.querySelectorAll(".subwindow");

        //info
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
        //transform
        //piviot
        //chunk
        this.init();
    }
    init(){
        this.addEventListeners();
    }
    addEventListeners(){
        this.detailsMinBtn.addEventListener("click", (e)=>{
            this.detailsContent.classList.toggle('hidden');
        })
        this.detailsCloseBtn.addEventListener("click", (e)=>{
            this.detailsModal.classList.toggle('hidden');
        })
        this.detailsHeader.addEventListener("pointerdown", (e)=>{
            console.log('header clicked');
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




