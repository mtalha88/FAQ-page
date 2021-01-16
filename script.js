const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('click', (g) => {
        inputs.forEach(input => {
            if(input.checked){
                input.checked = false;
                g.target.checked = true;

            }
        })
    })
})