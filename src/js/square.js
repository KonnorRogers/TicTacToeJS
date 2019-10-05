// Factory function pattern
export default function Square({index, value} = {}) {
  const setText = square => {
    if (value !== null && value !== undefined) {
      square.innerText = value.toString();
    } else {
      square.innerText = '';
    }
  };

  const render = () => {
    const square = document.createElement('button');
    square.classList.add('square');
    square.id = `square-${index}`;

    setText(square);

    return square;
  };

  return {
    render,
  };
}
