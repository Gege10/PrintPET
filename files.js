var previewButtons = document.querySelectorAll(".previewButton");

const showText = "Montrer";
const hideText = "Cacher";

previewButtons.forEach(button => {
    button.textContent = showText;
    
    button.addEventListener("click", function(e){
        if (e.target.classList.contains("collapsed"))
            e.target.textContent = showText;
        else
            e.target.textContent = hideText;
    });
});