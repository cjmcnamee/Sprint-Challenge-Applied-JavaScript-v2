// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  const divHeader = document.createElement('div');
  const dateSpan = document.createElement('span');
  const title = document.createElement('h1');
  const tempSpan = document.createElement('span');

  divHeader.appendChild(dateSpan);
  divHeader.appendChild(title);
  divHeader.appendChild(tempSpan);

  divHeader.classList.add('header')
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp')

  dateSpan.innerHTML = "SMARCH 28, 2018";
  title.innerHTML = "Lambda Times";
  tempSpan.innerHTML = "98°";

  let head = document.querySelector('.header-container')
  head.appendChild(divHeader);
}

Header();
