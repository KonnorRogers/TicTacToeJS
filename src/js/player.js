const Player = ({name, marker} = {}) => ({
  name,
  marker,
  setName(name) {
    this.name = name;
    return this;
  },
  setMarker(marker) {
    this.marker = marker;
    return this;
  },
});

module.exports = Player;
