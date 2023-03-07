const title = document.getElementById("title")


const container = document.getElementById("container")

container.addEventListener("click" , (eo) => {
    switch (eo.target.className) {
        case "btn btn-primary":
            title.innerText = "primary"
            break;
    
        case "btn btn-secondary":
            title.innerText = "secondary"
            break;
    
        case "btn btn-success":
            title.innerText = "success"
            break;
    
        case "btn btn-danger":
            title.innerText = "danger"
            break;
    
        case "btn btn-warning":
            title.innerText = "warning"
            break;
    
        case "btn btn-info":
            title.innerText = "info"
            title.style.marginTop = "150px"
            
            break;
    
        default:
            title.innerText = "Error"
            break;
    }
})

