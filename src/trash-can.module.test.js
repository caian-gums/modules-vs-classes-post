const TrashCan = require('./trash-can.module');

describe('TrashCan Module', () => {
  test('create not null/undefined TrashCan', () => {
    expect(TrashCan()).toBeDefined();
  });
});

describe('TrashCan values and functions', () => {
  let trashCan;

  beforeEach(() => {
    trashCan = TrashCan();
  });

  test('isEmpty() returns true with recent created TrashCan', () => {
    expect(trashCan.isEmpty()).toBeTruthy();
  });

  test('items is unaccessible in TrashCan', () => {
    expect(trashCan.items).toBeUndefined();
  });

  test('throwAway() adds an item to TrashCan', () => {
    trashCan.throwAway('paper');

    expect(trashCan.isEmpty()).toBeFalsy();
  });

  test('clean() cleans all items into the TrashCan', () => {
    trashCan.throwAway('paper');
    trashCan.throwAway('newspaper');
    trashCan.throwAway('journal');

    trashCan.clean();

    expect(trashCan.isEmpty()).toBeTruthy();
  });
});

