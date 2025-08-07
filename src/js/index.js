let botao = document.getElementById('btn');
let camposDeInput = document.querySelectorAll('.input');
let campo = document.querySelectorAll('.campo');



botao.addEventListener("click", () => {

    camposDeInput.forEach((item) => {
        if (item.value === "") {
            item.parentElement.classList.add("ativo")
        }
    })
})



camposDeInput.forEach((item) => {
    item.addEventListener("change", () => {
        if (item.value !== "") {
            item.style.border = "1px solid green";
        } else {
            item.style.border = "";

        }
    })
})


