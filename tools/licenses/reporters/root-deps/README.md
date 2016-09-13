# Root Package Dependencies

> Reporter which filters license results for packages directly depended on by the root package.


<!-- <intro> -->

<!-- </intro> -->


<!-- <usage> -->

## Usage

``` javascript
var reporter = require( '/path/to/stdlib/tools/licenses/reporters/deps' );
```

#### reporter( results, bool )

Reporter which filters license results for packages directly depended on by the root package. To include dev dependencies, set `bool` to `true`.

``` javascript
var licenses = require( '/path/to/stdlib/tools/licenses/licenses' );

licenses( onResults );

function onResults( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( reporter( results, true ) );
}
```

<!-- </usage> -->


<!-- <examples> -->

<!-- ## Examples

``` javascript

``` -->

<!-- </examples> -->


<!-- <cli> -->

---

## CLI

<!-- <usage> -->

### Usage

``` bash
Usage: licenses-deps [options]

Options:

  -h,    --help                      Print this message.
  -V,    --version                   Print the package version.
         --no-dev                    Exclude dev dependencies.
```

<!-- </usage> -->


<!-- <notes> -->

### Notes

* Use as part of a standard stream pipeline.

<!-- </notes> -->


<!-- <examples> -->

### Examples

To pretty print license results,

``` bash
$ licenses | licenses-deps
```

Example output:

``` text

Package license information:

fs.realpath@1.0.0
├── path: /path/to/node_modules/fs.realpath
├── repo: https://github.com/isaacs/fs.realpath
├── package.json: ISC
├── license: ISC
└── license: MIT

spdx-correct@1.0.2
├── path: /path/to/node_modules/spdx-correct
├── repo: https://github.com/kemitchell/spdx-correct.js
├── package.json: Apache-2.0
├── license: Apache-2.0
└── readme: MIT

spdx-expression-parse@1.0.3
├── path: /path/to/node_modules/spdx-expression-parse
├── repo: https://github.com/kemitchell/spdx-expression-parse.js
├── package.json: (MIT AND CC-BY-3.0)
├── readme: MIT
└── license: MIT
```

To use as part of a pipeline,

``` bash
$ licenses | licenses-deps | cat
# => {"id":"...","parents":["..."],...,"licenses":{...}}
# => {"id":"...","parents":["..."],...,"licenses":{...}}
# => ...
```


<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

<!-- </links> -->