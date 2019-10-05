// Factory function pattern
export default function Square({index, value} = {}) {
  const addClickHandler = () => {};
  const render = () => {
    const square = document.createElement('button');
    square.classList.add('square');
    square.id = `square-${index}`;

    square.onclick = () => {
      console.log(index);
      if (value !== null && value !== undefined) {
        square.innerText = value.toString();
      } else {
        square.innerText = '';
      }
    };

    return square;
  };

  return {
    render,
  };
}
