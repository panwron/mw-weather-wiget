// kelvin to celsius
export const kToC = (val, showUnit = true, decimals = 1) =>
  `${(val - 273.15).toFixed(decimals)}\xB0${showUnit ? "C" : ""}`;
