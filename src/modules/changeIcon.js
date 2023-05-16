// change dot icons btn to type trash btn

export const changeIcon = () => {
  const theIcons = document.querySelectorAll('.remove-btn');

  theIcons.forEach((value) => {
    value.addEventListener('click', (e) => {
      e.preventDefault();
      value.classList.toggle('bi-trash');
    });
  });
};

export default changeIcon;