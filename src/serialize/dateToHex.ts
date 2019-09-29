import numberToHex from "./numberToHex";

const dateToHex = (d: Date): string => {
  return numberToHex(d.getTime() / 1000);
};

export default dateToHex;
