const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skill = document.getElementById('Skills') as HTMLElement

toggleButton.addEventListener('click', ()=> {
    if(skill.style.display === 'none') {
        skill.style.display = 'block'
    } else {
        skill.style.display = 'none'
    }
});


  