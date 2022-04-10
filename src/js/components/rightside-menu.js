const rightside = document.querySelector('.rightside');


if (rightside) {
  const rightsideBtnClose = document.querySelector('.rightside__btn');
  const rightsideBtnOpen = document.querySelector('.header__btn');

  rightsideBtnOpen.addEventListener('click', () => {
    rightside.classList.remove('rightside--close');
  });

  rightsideBtnClose.addEventListener('click', () => {
    rightside.classList.add('rightside--close');
  });
}


