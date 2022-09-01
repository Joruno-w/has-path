# has-path

> Check if a path exists

Never use this before handling a file though:

> In particular, checking if a file exists before opening it is an anti-pattern that leaves you vulnerable to race conditions: another process may remove the file between the calls to `fs.exists()` and `fs.open()`. Just open the file and handle the error when it's not there.

## Install

```
$ npm install has-path
```

## Usage

```js
// index.js
import { hasPathSync, hasPath } from "has-path";

console.log(hasPathSync("index.js"));
//=> true
(async () => {
  console.log(await hasPath("index.js"));
})();
//=> true
```

## API

### hasPath(path | path[])

Returns a `Promise<boolean>` of whether can find the path.

### hasPathSync(path | path[])

Returns a `boolean` of whether can find the path.
