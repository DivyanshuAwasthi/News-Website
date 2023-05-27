console.log("Welcome to Live News");

// 32c8410118414692a6741e13f880a1fa (API key ffrom newsapi)

// initialise the news api parameters
source = "bbc-news";
let apikey = "32c8410118414692a6741e13f880a1fa";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");
console.log("Welcome to Live News");
/// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `
https://newsapi.org/v2/top-headlines?country=in&apiKey=32c8410118414692a6741e13f880a1fa
`
);
console.log("Welcome to Live News");
// what to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    console.log(this.status);
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element, index){
      console.log(element, index);
      //console.log(articles[news]);

      let news = `<div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse${index}"
                            aria-expanded="true"
                            aria-controls="collapse${index}"
                          >
                          <b>Breaking News ${index + 1}:</b>  ${element["title"]}
                          </button>
                        </h2>
                        <div
                          id="collapse${index}"
                          class="accordion-collapse collapse "
                          data-bs-parent="#newsAccordion"
                        >
                          <div class="accordion-body">${element["content"]}. <a href="${element['url']}" target="_blank"> Read more at here</a> </div>
                        </div>
                      </div> </hr>`;
                newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
    //console.log(json);
    //console.log("Welcome to Live News");
  } else {
    console.log("Welcome to Live News");
    console.log("Some error occured");
  }
};

xhr.send();
