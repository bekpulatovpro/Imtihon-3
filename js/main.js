var elList = document.querySelector(".pakemon__list");
var elForm = document.querySelector(".form");
var elFirstInput = document.querySelector(".first__input");
var elSecondInput = document.querySelector(".second__input");
var elThirdInput = document.querySelector(".third__input");
var elFourthInput = document.querySelector(".fourth__input");


// Delete zero info
elList.textContent = null;

// Add all info
function rendePakimon(pakimon) {
  elList.innerHTML=null;
  for (var i = 0; i < pakimon.length; i++) {
    // createElements
    var newLi = document.createElement("li");
    var newImg = document.createElement("img");
    var newLine = document.createElement("span");
    var newHeading = document.createElement("h3");
    var newText = document.createElement("p");
    var newStrong = document.createElement("strong");
    var newText1 = document.createElement("span");
    var newText2 = document.createElement("span");

    // setAtributes

    newLi.setAttribute("class", "pakemon__item bg-white");
    newImg.setAttribute("class", "pakemon__img  d-block");
    newImg.setAttribute("src", pakimon[i].img);
    newImg.setAttribute("alt", pakimon[i].name + ", poster");
    newImg.setAttribute("width", 157);
    newImg.setAttribute("height", 157);
    newLine.setAttribute("class", "new__line");
    newStrong.setAttribute("class", "pakemon__strong");
    newHeading.setAttribute("class", "pakimon__title");
    newText.setAttribute("class", "pakimon__text");
    newText1.setAttribute("class", "pakimon__strong ms-3 ");
    newText2.setAttribute("class", "describ");

    newHeading.textContent = pakimon[i].name;
    newText.textContent = pakimon[i].type;
    newText1.textContent = pakimon[i].height;
    newText2.textContent = pakimon[i].weight;
    // Appendchild

    newLi.appendChild(newImg);
    newLi.appendChild(newLine);
    newLi.appendChild(newHeading);
    newLi.appendChild(newText);
    newLi.appendChild(newStrong);
    newStrong.appendChild(newText1);
    newStrong.appendChild(newText2);

    elList.appendChild(newLi);
  }
}

function addObject(image, name, genre, weight, example) {

  var newImage = image.value.trim();
  var newName = name.value.trim();
  var newGenre = genre.value.trim();
  var newWeight = weight.value.trim();

  var newPakemonObject = {
    name: newName,
    img: newImage,
    type: newGenre,
    weight: newWeight,
  };
  example.unshift(newPakemonObject);
}

var lastRender = function (evt) {
  evt.preventDefault();

  addObject(elFourthInput, elFirstInput,elSecondInput, elThirdInput, pokemons);
  rendePakimon(pokemons)
};
rendePakimon(pokemons);
elForm.addEventListener("submit", lastRender);
