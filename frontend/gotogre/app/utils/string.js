
import array from "lodash/array";
import collection from "lodash/collection";
import string from "lodash/string";

export function makeTitle(str) {
  return string.startCase(string.kebabCase(str));
}


export function makeArray(str, separator = ", ") {
  return array.compact(collection.map(string.split(str, separator), (x) => string.trim(x)));
}

export function makeClassName(...classNames) {
  return array.compact(classNames.join(" ").split(" ")).join(" ");
}
