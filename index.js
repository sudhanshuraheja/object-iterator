class Iterator {
  constructor(obj) {
    this.obj = obj;
    return this;
  }

  $(key, returnValue = false) {
    if (Iterator.isArray(this.obj) || Iterator.isObject(this.obj)) {
      const value = Iterator.hasKey(this.obj, key) ? this.obj[key] : undefined;
      const object = new Iterator(value);
      return returnValue ? object.value() : object;
    }
    const value = undefined;
    const object = new Iterator(value);
    return returnValue ? object.value() : object;
  }

  keys() {
    if (Iterator.isArray(this.obj)) {
      return this.obj;
    }
    if (Iterator.isObject(this.obj)) {
      return Object.keys(this.obj);
    }
    return [];
  }

  string() {
    return Iterator.isString(this.obj) ? this.obj.toString() : "";
  }

  value() {
    return this.obj;
  }

  length() {
    if (Iterator.isArray(this.obj)) {
      return this.obj.length;
    }
    if (Iterator.isObject(this.obj)) {
      return this.keys().length;
    }
    return 0;
  }

  static isArray(obj) {
    return Array.isArray(obj);
  }

  static isObject(obj) {
    return typeof obj === "object" && !Iterator.isArray(obj) && obj !== null;
  }

  static isNumber(obj) {
    return typeof obj === "number";
  }

  static isString(obj) {
    return typeof obj === "string";
  }

  static isBoolean(obj) {
    return typeof obj === "boolean";
  }

  static isNull(obj) {
    return obj === null;
  }

  static isUndefined(obj) {
    return obj === undefined;
  }

  static hasKey(obj, key) {
    if (Iterator.isArray(obj)) {
      return Iterator.isNumber(key) && obj.length > key;
    }
    if (Iterator.isObject(obj)) {
      const keys = Object.keys(obj);
      return keys.includes(key);
    }
    return false;
  }
}

module.exports = Iterator;
