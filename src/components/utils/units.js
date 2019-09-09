// kelvin to celsius
export const kToC = (val, showUnit = true) =>
  `${(val - 273.15).toFixed(1)}\xB0${showUnit ? "C" : ""}`;
