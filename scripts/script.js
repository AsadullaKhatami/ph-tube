// console.log("hello !");

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategories(data.categories))
    .catch(err => console.log(err));
}

// fetch video 
const loadVideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideo(data))
    .catch(err => console.log(err));
}

// display categories
const displayCategories = (data) => {
    const categoriesBtn = document.getElementById('categories');
    for(let categories of data){
        // console.log(categories.category);
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = categories.category;

        categoriesBtn.append(button);
    }
}

const displayVideo = (data) => {
    console.log(data);
}

loadCategories();