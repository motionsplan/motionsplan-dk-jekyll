# [Motionsplan](http://motionsplan.dk)

Site created in Jekyll based on [Minimal Made Mistakes theme](https://github.com/mmistakes/minimal-mistakes).

## Ressources used

Icon from [www.getdrawings.com](http://getdrawings.com/weight-lifting-icon#weight-lifting-icon-67.png)

## `generate-image` scripts

`generate-image` is the base script that takes two arguments
 - `type`: Image type, will be passed into `<body>` as CSS class for style hooks
 - `path`: Relative path to asset(s). Will accept singular file of directory of files

The script will generate a `png` image `assets/images/generated/TYPE/FILE_NAME.png`
A directory for each `type` will need to exist at `assets/images/generated/TYPE` or the script will fail.
Running the script will overwrite any images that already exist.

To generate a singular image, run the appropriate abstracted script:
```bash
npm run og-image -- path:./_posts/FILE_NAME.EXTENSION
```

To generate a batch of images, run the plural script with no arguments
```bash
npm run og-images
```
