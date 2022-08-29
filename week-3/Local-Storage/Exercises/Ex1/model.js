function Model() {
  let _wisdom = [];
  let _idCounter = 0;

  function set(arr) {
    _wisdom = arr;
  }

  function add(text) {
    _wisdom.push({ id: _idCounter, text: text });
    _idCounter += 1;
  }

  function get() {
    return [..._wisdom];
  }

  function isEven() {
    return _wisdom.length % 2 === 0;
  }

  function clear() {
    _wisdom = [];
  }

  function remove(id) {
    _wisdom = _wisdom.filter(t => t.id !== id);
  }

  return {
    get,
    set,
    add,
    clear,
    isEven,
    remove,
  };
}
