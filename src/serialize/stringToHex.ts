interface IOptions {
  noPrefix?: boolean;
  padStart?: number;
}

const stringToHex = (str: string, options?: IOptions): string => {
  let prefix = "0x";
  if (options && options.noPrefix) {
    prefix = "";
  }
  let padStart = 0;
  if (options && options.padStart) {
    padStart = options.padStart;
  }
  return prefix + new Buffer(str, "utf-8").toString("hex").padStart(padStart, "0");
};

export default stringToHex;
