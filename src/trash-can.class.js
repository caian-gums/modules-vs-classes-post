class TrashCan {
  constructor() {
    this.items = [];
  }

  throwAway(item) {
    this.items = [...this.items, item];
  }

  clean() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = TrashCan;

