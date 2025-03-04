//

const btnHeroesProject = document.getElementById('btnHeroesProject');
const btnViewCV = document.getElementById('btnViewCV');
const fileContainer = document.getElementById('file-container');
const closePDF = document.getElementById('closePDF');


btnViewCV.addEventListener('click', () => {
    fileContainer.classList.add('file-container-display');
});

closePDF.addEventListener('click', () => {
    fileContainer.classList.remove('file-container-display');
});