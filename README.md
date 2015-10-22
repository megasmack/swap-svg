# Swap-SVG

Fallback for SVG/SVGZ files in IMG tags to PNG files of the same name.

## Requirements

- jQuery 1.11.0 or higher
- Modernizr 2.8.0 or higher

## Usage

Just save `SVG` or `SVGZ` files along with a fallback `PNG` images in the same directory and with file name. The script will swap out the file extension for browsers that do no support `SVG` files within `img` tags.

Load the script before the end of `body` tag.
```html
<script src="swap-svg.js"></script>
```

Or install via bower
```
bower install swap-svg --save
```

## Example

This:
```html
<img src="path/to/cool.svg" alt="">

```

Becomes this in a browser like IE 8:
```html
<img src="path/to/cool.png" alt="">

```

