// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    articleOfFun(response.data);
  })
  .catch(err => {
    console.log(err);
  });

function articleOfFun(Obj) {
  const divCard = document.createElement('div');
  const divHeadline = document.createElement('div')
  const divAuthor = document.createElement('div');
  const divImg = document.createElement('div');
  const imgAuthor = document.createElement('img');
  const spanName = document.createElement('span');

  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImg);
  divImg.appendChild(imgAuthor);
  divAuthor.appendChild(spanName);

  divCard.classList.add('card');
  divHeadline.classList.add('headline');
  divAuthor.classList.add('author');
  divImg.classList.add('img-container');

  divHeadline.innerHTML = Obj.headline;
  imgAuthor.src = Obj.authorPhoto;
  spanName.innerHTML = `By ${Obj.authorName}`;

  console.log(divCard);
  let authors = document.querySelector('cards-container');
  authors.appendChild(divCard);
}
