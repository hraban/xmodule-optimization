# Cross-module optimization

I'm playing around with optimization of Javascript programs across module boundaries.

Specifically:

A.js:
```js
export function foo() {
  return 4;
}
```

B.js:
```js
import { foo } from "./B";

var a = foo();
var b = foo();
console.log(a * b);
```

Should, ideally, become:
```js
console.log(16);
```

There is no theoretical reason for this not to work.
