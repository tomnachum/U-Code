function Model() {
  let _wisdom = [];

  function set(arr) {
    _wisdom = arr;
  }

  function add(text) {
    _wisdom.push({ id: _wisdom.length, text: text });
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
