export default const Easy = () =>
  ({
    div() {
      const div = document.createElement('div');
      div.id = 'test';
      return div;
    },
  }());

