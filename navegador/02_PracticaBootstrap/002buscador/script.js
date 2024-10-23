document.getElementById('input').addEventListener('input', () => {
    const input = document.getElementById('input').value

    const list = document.querySelectorAll('.list-group-item')

    list.forEach(item => {
        if(item.textContent.toLowerCase().includes(input.toLowerCase())){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
})
