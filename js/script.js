document.addEventListener("DOMContentLoaded", ()=>{
    let btn = document.querySelector("#btn")
    btn.addEventListener("click", ()=>{
        let tr = document.querySelectorAll('tr')
        tr.forEach(i => {
            i.classList.toggle('tr')
        })
    })
})