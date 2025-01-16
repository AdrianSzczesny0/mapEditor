

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
            name: document.getElementById("")
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
            console.log('minimize clicked');
        })
        this.detailsCloseBtn.addEventListener("click", (e)=>{
            console.log('close clicked');
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




