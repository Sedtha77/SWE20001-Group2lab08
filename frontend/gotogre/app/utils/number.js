export function makeImageCaption({ prefix, index, lastIndex }) {
  const totalLength = `${lastIndex}`.length;
  const digits = `${index}`.padStart(totalLength, "0");
  return prefix + digits;
}

export function parseDollar(number, minimumFractionDigits = 2) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits,
  }).format(number);
}

export function calculateArea(a, b) {
  return a * b;
}
