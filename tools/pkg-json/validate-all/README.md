# Validate

> Find and validate `package.json` files.


<section class="usage">

## Usage

``` javascript
var validate = require( '@stdlib/tools/pkg-json/validate-all' );
```

#### validate( \[options,\] clbk )

Asynchronously find and validate `package.json` files.

``` javascript
validate( done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}
```

The function accepts the following `options`:

* __dir__: root directory from which to search for packages. May be either an absolute file path or a path relative to the current working directory. Default: current working directory.
* __pattern__: glob pattern used to find packages. Default: `'**/package.json'` (note: pattern __must__ end with `package.json`).
* __ignore__: list of glob patterns used to exclude matches.

To search from an alternative directory, set the `dir` option.

``` javascript
var opts = {
    'dir': '/foo/bar/baz'
};

validate( opts, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}
```

To provide an alternative include filter, set the `pattern` option.

``` javascript
var opts = {
    'pattern': '**/foo/**/package.json'
};

validate( opts, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}
```

To exclude matches, set the `ignore` option.

``` javascript
var opts = {
    'ignore': [
        'node_modules/**',
        'build/**',
        'reports/**'
    ]
};

validate( opts, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}
```


#### validate.sync( \[options\] )

Synchronously find and validate `package.json` files.

``` javascript
var err = validate.sync();
if ( err ) {
    throw err;
}
```

The function accepts the same `options` as `validate()` above.

</section>

<!-- /.usage -->


<section class="notes">

</section>

<!-- /.notes -->


<section class="examples">

## Examples

``` javascript
var validate = require( '@stdlib/tools/pkg-json/validate-all' );

validate( done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}
```

</section>

<!-- /.examples -->


---

<section class="cli">

## CLI

<section class="usage">

### Usage

``` bash
Usage: validate-all-pkg-json [options] [dir]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --pattern pattern     Inclusion glob pattern.
         --ignore pattern      Exclusion glob pattern.
```

</section>

<!-- /.usage -->


<section class="notes">

### Notes

* If not provided a `dir` argument, the current working directory is the search directory.
* To provide multiple exclusion glob patterns, set multiple `--ignore` option arguments.

  ``` bash
  $ validate-all-pkg-json --ignore=node_modules/** --ignore=build/** --ignore=reports/**
  ```

</section>

<!-- /.notes -->


<section class="examples">

### Examples

``` bash
$ validate-all-pkg-json
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

</section>

<!-- /.links -->