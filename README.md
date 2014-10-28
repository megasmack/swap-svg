# Swap-SVG

Swap SVG/SVGZ files in IMG tags for PNG versions of the same name.

## Usage

Just save ```SVG``` or ```SVGZ``` files along with a fallback ```PNG``` images in the same directory and with file name. The script will swap out the file extension for browsers that do no support ```SVG``` files within ```IMG``` tags.

## Example

This:
```
<img src="path/to/cool.svg" alt="">

```

Becomes this in a browser like IE 8:
```
<img src="path/to/cool.png" alt="">

```

