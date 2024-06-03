// assert.equals(a, b, textLabel);

let Reset = "\x1b[0m",
  Bright = "\x1b[1m",
  Dim = "\x1b[2m",
  Underscore = "\x1b[4m",
  Blink = "\x1b[5m",
  Reverse = "\x1b[7m",
  Hidden = "\x1b[8m",
  FgBlack = "\x1b[30m",
  FgRed = "\x1b[31m",
  FgGreen = "\x1b[32m",
  FgYellow = "\x1b[33m",
  FgBlue = "\x1b[34m",
  FgMagenta = "\x1b[35m",
  FgCyan = "\x1b[36m",
  FgWhite = "\x1b[37m",
  BgBlack = "\x1b[40m",
  BgRed = "\x1b[41m",
  BgGreen = "\x1b[42m",
  BgYellow = "\x1b[43m",
  BgBlue = "\x1b[44m",
  BgMagenta = "\x1b[45m",
  BgCyan = "\x1b[46m",
  BgWhite = "\x1b[47m";

let logGreen = function (s) {
  console.log("\x1b[36m%s\x1b[0m", s);
};
let logYellow = function (s) {
  console.log("\x1b[33m%s\x1b[0m", s); //yellow
};

let logRed = function (s) {
  console.log("\x1b[31m%s\x1b[0m", s); //yellow
};

let equals = function (a, b, textLabel, suppressLog) {
  // simplistic check to save a little oops time
  if (Array.isArray(a)) {
    // throw new Error('use arrayEqual() for arrays instead');
    return logRed("use arrayEqual() for arrays instead");
  }
  if (isPlainObject(a)) {
    // throw new Error('use objEqual() for objets instead');
    return logRed("use objEqual() for objets instead");
  }
  if (a !== b) {
    let msg = `✖️  ${a} does not equal ${b}`;
    if (textLabel) {
      msg = `✖️  ${textLabel}: ${a} does not equal ${b}`;
    }
    // throw new Error(msg);
    return logRed(msg);
  }
  if (!suppressLog) {
    logGreen(`✔️  ${a} === ${b}`);
    // console.log(FgGreen, '✔️  ', Reset, a, '===', b);
  }
};

let arrayEqual = function (a, b, textLabel, suppressLog) {
  if (!Array.isArray(a)) {
    // throw new Error('use equal() for non-arrays');
    return logRed("use equal() for non-arrays");
  }
  if (!jsonStringEqual(a, b)) {
    let aStr = JSON.stringify(a);
    let bStr = JSON.stringify(b);
    let msg = `✖️  ${aStr} does not equal ${bStr}`;
    if (textLabel) {
      msg = `✖️  ${textLabel}: ${aStr} does not equal ${bStr}`;
    }
    // throw new Error(msg);
    return logRed(msg);
  }
  if (!suppressLog) {
    let aStr = JSON.stringify(a);
    let bStr = JSON.stringify(b);
    logGreen(`✔️  ${aStr} === ${bStr}`);
    // console.log(FgGreen, '✔️  ', Reset, aStr, '===', bStr);
  }
};

var isPlainObject = function (obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

function jsonStringEqual(a, b) {
  /* 
    WARNING: arrays must not contain {objects} or behavior may be undefined 
  */
  return JSON.stringify(a) == JSON.stringify(b);
}

module.exports = {
  equals: equals,
  // just use node.js
  strictEquals: null,
  deepEquals: null,
  arrayEqual: arrayEqual,
  objEqual: jsonStringEqual,
};
