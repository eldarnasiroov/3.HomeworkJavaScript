const customJSON = {
  stringify: function (obj) {
    if (typeof obj === 'object' && !Array.isArray(obj) && obj) {
      let string = '{';
      for (keys in obj) {
        if (typeof obj[keys] === 'string') {
          string += `\"${keys}\":\"${obj[keys]}\",`;
        } else if (typeof obj[keys] === 'undefined' || typeof obj[keys] === 'function') {
          continue;
        } else if (isNaN(obj[keys]) || !isFinite(obj[keys])) {
          string += `\"${keys}\":null,`;
        } else {
          string += `\"${keys}\":${obj[keys]},`;
        }
      }
      return string.slice(0, -1) + "}";
    } else {
      console.log('Oops... Something went wrong.');
    }
  }
}
const obj = {
  name: 'Eldar',
  surname: 'Nasirov',
  age: 23,
  height: undefined,
  weight: NaN,
  foo: function () {
    console.log("Hello World!");
  }
}
console.log(customJSON.stringify(obj));
console.log(JSON.stringify(obj));