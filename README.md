# live-front

[![npm version](https://badge.fury.io/js/live-front.svg)](http://badge.fury.io/js/live-front)
[![Dependency Status](https://david-dm.org/Makay11/live-front.svg)](https://david-dm.org/Makay11/live-front)

**live-front** is inspired by [front-matter](https://www.npmjs.com/package/front-matter) and works in a similar fashion, except it uses LSON as the object format, which allows much more complex data structures (i.e. nested objects, arrays, strings, numbers and **functions**).

This module uses [lson](https://www.npmjs.com/package/lson) to parse the objects. This means that it should be able to parse any LSON, CSON and well formatted JSON (without random newlines).

This also works fine with any file type (e.g. .html, .jade, .js, .css).

# Install

With [npm](https://www.npmjs.com) do:

    npm install live-front

# Methods

    var lf = require("live-front");

## lf(data [, encoding])

Using this method is the same as using `lf.parse`.

## lf.parse(data [, encoding])

* `data` - a `string` or a `Buffer` object representing the file's content
* `encoding` (optional) - a `string` representing the data encoding (default is "utf-8")

Returns a [bluebird](https://www.npmjs.com/package/bluebird) `Promise` that will resolve with a `result` object containing two properties:

* `result.object` - an `object` with the parsed properties or `null` if the file has no **live-front** header
* `result.body` - a `string` representing the file's content without the **live-front** header

## lf.parseFile(path [, encoding])

* `path` - a `string` representing the file's path
* `encoding` (optional) - a `string` representing the file encoding (default is "utf-8")

This method returns the same as `lf.parse`.

# Example

So you have a file `example.html`:

    ---
    title: "Just hack'n"
    description: "Nothing to see here"
    ---
    <p>This is some text about some stuff that happened sometime ago</p>

Then you can do this:

    var lf = require("live-front");

    lf.parseFile("example.html").then(function (result) {
      var object = result.object;
      console.log(object.title);       // => "Just hack'n"
      console.log(object.description); // => "Nothing to see here"

      console.log(result.body); // => "<p>This is some text about some stuff that happened sometime ago</p>"
    }).catch(function (error) { // Never forget to catch!
      console.log("Something went wrong:", error.toString());
    });

# Contributing

Feel free to [report bugs](https://github.com/Makay11/live-front/issues) or [fork](https://github.com/Makay11/live-front/fork) and open pull requests when possible.

Please make sure that `npm run checks` doesn't report any issues before opening a pull request.

### Contributors

* [Diogo Pais](https://github.com/Makay11) - [@Makay11](https://twitter.com/Makay11)

# LICENSE (ISC)

Copyright (c) 2015, Diogo Pais <dpais11@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
