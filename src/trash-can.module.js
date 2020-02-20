const TrashCan = () => {
  let items = [];

  const throwAway = item => {
    items = [...items, item];
  }

  const clean = () => {
    items = [];
  }

  const isEmpty = () => {
    return items.length === 0;
  }

  return {
    throwAway,
    clean,
    isEmpty,
  }
}

module.exports = TrashCan;

