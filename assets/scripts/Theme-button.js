const whiteThemeClass = 'whiteTheme';
const blackThemeClass = 'blackTheme';

const blackThemeButtonId = 'blackThemeButton';
const whiteThemeButtonId = 'whiteThemeButton';

const blackThemeButton = document.getElementById(blackThemeButtonId);
const whiteThemeButton = document.getElementById(whiteThemeButtonId);

blackThemeButton.addEventListener('mouseenter', mouseEnterBlack);
blackThemeButton.addEventListener('mouseout', mouseOutBlack);
blackThemeButton.addEventListener('click', onClickBlack);

whiteThemeButton.addEventListener('mouseenter', mouseEnterWhite);
whiteThemeButton.addEventListener('mouseout', mouseOutWhite);
whiteThemeButton.addEventListener('click', onClickWhite);

const whiteTheme = 'white';
const blackTheme = 'black';
const darkBlueTheme = 'darkblue';

let activeTheme = whiteTheme;

const activeClassName = 'active'

function mouseEnterBlack() {
  if (activeTheme === whiteTheme) {
    document.body.classList.remove(whiteThemeClass);
    document.body.classList.add(blackThemeClass);
  }
}

function mouseOutBlack() {
  if (activeTheme === whiteTheme) {
    document.body.classList.remove(blackThemeClass);
    document.body.classList.add(whiteThemeClass);
  }
}

function onClickBlack() {
  if (activeTheme === whiteTheme) {
    activeTheme = blackTheme;
    blackThemeButton.classList.add(activeClassName);
  } else {
    whiteThemeButton.classList.remove(activeClassName);
  }
}

function mouseEnterWhite() {
  if (activeTheme === blackTheme) {
    document.body.classList.remove(blackThemeClass);
    document.body.classList.add(whiteThemeClass);
  }
}

function mouseOutWhite() {
  if (activeTheme === blackTheme) {
    document.body.classList.remove(whiteThemeClass);
    document.body.classList.add(blackThemeClass);
  }
}

function onClickWhite() {
  if (activeTheme === blackTheme) {
    activeTheme = whiteTheme;
    whiteThemeButton.classList.add(activeClassName);
  } else {
    blackThemeButton.classList.remove(activeClassName); 
  }
}

