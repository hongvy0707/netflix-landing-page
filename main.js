let faqTitleBtn = document.getElementsByClassName('faq-title')

for (let i=0; i< faqTitleBtn.length; i++){
    faqTitleBtn[i].addEventListener('click',function () {
        // console.log(this.childNodes)
        if(this.childNodes[1].classList.contains('bx-plus')){
            this.childNodes[1].classList.remove('bx-plus')
            this.childNodes[1].classList.add('bx-x')
        }else{
            this.childNodes[1].classList.remove('bx-x')
            this.childNodes[1].classList.add('bx-plus')
        }

        const faqAnswer = this.nextElementSibling
        if(faqAnswer.style.maxHeight){
            faqAnswer.style.maxHeight = null
        }else{
            faqAnswer.style.maxHeight = `${faqAnswer.scrollHeight}px`
        }
    })
}