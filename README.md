# eserialize

This goal if this module is to provide easy functions to serialize and deserialize data for the Ethereum Stack.


## Usage

```
npm install @etclabscore/eserialize --save
```


### Examples

#### Serialize

```javascript
import { stringToHex, dateToHex, numberToHex } from "@etclabscore/eserialize";

stringToHex("foo");
// "0x666F6F"

dateToHex(new Date("2019-09-28T22:47:08.000Z"));
// "0x5d8fe2ec"

numberToHex(0);
// "0x0"
```

#### Deserialize

```javascript
import { hexToString, hexToDate, hexToNumber } from "@etclabscore/eserialize";

hexToString("0x666F6F");
// "foo"

hexToDate("0x5d8fe2ec").toISOString();
// "2019-09-28T22:47:08.000Z"

hexToNumber("0x0");
// 0

hexToNumber("0x1");
// 1

hexToNumber("0x878328");
// 8880936
```

### Contributing

How to contribute, build and release are outlined in [CONTRIBUTING.md](CONTRIBUTING.md), [BUILDING.md](BUILDING.md) and [RELEASING.md](RELEASING.md) respectively. Commits in this repository follow the [CONVENTIONAL_COMMITS.md](CONVENTIONAL_COMMITS.md) specification.
