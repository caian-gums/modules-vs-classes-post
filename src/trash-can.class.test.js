const TrashCan = require('./trash-can.class');

describe('TrashCan Class', () => {
  test('create not null/undefined TrashCan', () => {
    expect(new TrashCan()).toBeDefined();
  });
});

describe('TrashCan attributes and methods', () => {
  let trashCan;

  beforeEach(() => {
    trashCan = new TrashCan();
  });

  test('isEmpty() returns true with recent created TrashCan', () => {
    expect(trashCan.isEmpty()).toBeTruthy();
  });

  test('throwAway() adds an item to TrashCan', () => {
    trashCan.throwAway('paper');

    expect(trashCan.isEmpty()).toBeFalsy();
    expect(trashCan.items.length).toEqual(1);
    expect(trashCan.items).toContain('paper');
  });

  test('clean() cleans all items into the TrashCan', () => {
    trashCan.throwAway('paper');
    trashCan.throwAway('newspaper');
    trashCan.throwAway('journal');

    trashCan.clean();

    expect(trashCan.isEmpty()).toBeTruthy();
    expect(trashCan.items.length).toEqual(0);
  });

  test('changes directly into items Array reflects in TrashCan', () => {
    const items = ['paper', 'newspaper', 'journal'];

    trashCan.items = items

    trashCan.items.pop();

    expect(trashCan.isEmpty()).toBeFalsy();
    expect(trashCan.items.length).toEqual(2);
    expect(trashCan.items).toContain('paper');
    expect(trashCan.items).toContain('newspaper');
    expect(trashCan.items).not.toContain('journal');
  });
});

