import numberToHex, { IOptions } from "./numberToHex";

const dateToHex = (d: Date, options?: IOptions): string => {
  return numberToHex(d.getTime() / 1000, options);
};

export default dateToHex;
