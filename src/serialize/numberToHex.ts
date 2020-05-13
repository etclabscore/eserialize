export interface IOptions {
  noPrefix?: boolean;
  padStart?: number;
}

const numberToHex = (num: number, options?: IOptions): string => {
  let prefix = "0x";
  if (options && options.noPrefix) {
    prefix = "";
  }
  let padStart = 0;
  if (options && options.padStart) {
    padStart = options.padStart;
  }
  return prefix + num.toString(16).padStart(padStart,  "0");
};

export default numberToHex;
