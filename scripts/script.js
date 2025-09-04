// console.log("hello !");

// time function
function getTime(time){
    const hours = parseInt(time / 3600);
    let remainHours = time % 3600;
    const minute = parseInt(remainHours / 60);
    return `${hours} hr ${minute} min`;
}

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
        .then(data => displayVideo(data.videos))
        .catch(err => console.log(err));
}

// display categories
const displayCategories = (data) => {
    const categoriesBtn = document.getElementById('categories');
    for (let categories of data) {
        // console.log(categories.category);
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = categories.category;

        categoriesBtn.append(button);
    }
}

// display video
const displayVideo = (data) => {
    const videoSection = document.getElementById('video');
    for (let video of data) {
        console.log(video);

        const div = document.createElement('div');
        div.innerHTML = `
             <figure class="h-[200px] relative">
                <img class="h-full w-full object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                ${video.others.posted_date === "" ? "" : `<p class="absolute bottom-2 right-2 bg-black text-white p-2 rounded-lg">${getTime(video.others.posted_date)}</p>`}
            </figure>
            <div class="card-body">
                <div class="flex gap-4 py-2">
                    <div>
                        <figure>
                            <img class="w-10 h-10 object-cover rounded-full"
                            src="${video.authors[0].profile_picture}"
                            alt="profile Picture" />
                        </figure>
                    </div>
                    <div>
                        <h2 class="card-title">
                        ${video.title}
                        </h2>
                        <div class="">
                            <div>
                                <p class="flex gap-2">
                                    ${video.authors[0].profile_name}
                                    ${video.authors[0].verified === true ? `<img class="w-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"` : ''}
                                </p>
                            </div>
                            <div class="">${video.others.views}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        div.classList = "card bg-base-100 shadow-sm";

        videoSection.append(div);
    }
}

loadCategories();
loadVideo();