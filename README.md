lazymap
===
which fastest loop for array

check
---
just run `npm run test`.

ex
---
node.js v8.1.2 on my linux:
```bash
$ npm run test

> lazymap@ test /home/prezzemolo/lazy-map
> echo '-- ranking --'; node run.js | sed -n -e 's/\(^.*\): \(.*$\)/\2 \(\1\)/gp' | sort

-- ranking --
0.346ms (psuedo array.prototype.map)
0.484ms (array.prototype.@@iterator)
0.733ms (array.entries iterator)
1.235ms (homemade iterator)
1.315ms (array.prototype.map)
1.426ms (generator with for loop)
2.685ms (generator with do ... while loop)
3.005ms (generator with while loop)
```
