const Square = ({index} = {}) => {
  const addClickHandler = () => {};
  const render = () => {
    const square = document.createElement('button');
    square.classList.add('square');
    square.id = index;

    // square.onclick =
    // if (value === null) {
    // square.innerText = value;
    // }

    return square;
  };

  return {
    render,
  };
};

export default Square;
