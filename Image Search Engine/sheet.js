//  (29/09/23) In this session we will create a search engine by using the html,css & javascript.
const accessKey =  "UJ89O3DFEGHTCm8rfD6rLWwE1EpExRXzxjRxoembEeg";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = " ";
let page = 1;

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=15`;

    const response = await fetch(url);  //taking the response of the url
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const  results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})