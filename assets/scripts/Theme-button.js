const whiteThemeClass = 'whiteTheme';
const blackThemeClass = 'blackTheme';

const blackThemeButtonId = 'blackThemeButton';
const whiteThemeButtonId = 'whiteThemeButton';

const blackThemeButton = document.getElementById(blackThemeButtonId);
const whiteThemeButton = document.getElementById(whiteThemeButtonId);

const whiteFooterClass = 'whiteFooter';
const blackFooterClass = 'blackFooter';

const whiteFooterId = 'whiteThemeFooter';
const blackFooterId = 'blackThemeFooter';

const whiteThemeFooter = document.getElementById(whiteFooterId)
const blackThemeFooter = document.getElementById(blackFooterId)

blackThemeButton.addEventListener('mouseenter', mouseEnterBlack);
blackThemeButton.addEventListener('mouseout', mouseOutBlack);
blackThemeButton.addEventListener('click', onClickBlack);

whiteThemeButton.addEventListener('mouseenter', mouseEnterWhite);
whiteThemeButton.addEventListener('mouseout', mouseOutWhite);
whiteThemeButton.addEventListener('click', onClickWhite);

whiteThemeFooter.addEventListener('mouseenter', mouseEnterBlack);
whiteThemeFooter.addEventListener('mouseout', mouseOutBlack);
whiteThemeFooter.addEventListener('click', onClickBlack);

blackThemeFooter.addEventListener('mouseenter', mouseEnterWhite);
blackThemeFooter.addEventListener('mouseout', mouseOutWhite);
blackThemeFooter.addEventListener('click', onClickWhite);

const whiteTheme = 'white';
const blackTheme = 'black';
const darkBlueTheme = 'darkblue';

let activeTheme = whiteTheme;
let activeFooter = blackFooter;

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
    whiteThemeFooter.classList.add(activeClassName);
  } else {
    whiteThemeButton.classList.remove(activeClassName);
    blackThemeFooter.classList.remove(activeClassName);
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
    blackThemeFooter.classList.add(activeClassName);
  } else {
    blackThemeButton.classList.remove(activeClassName); 
    whiteThemeFooter.classList.remove(activeClassName);
  }
}
