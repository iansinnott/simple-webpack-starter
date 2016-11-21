# Simple Webpack Starter

An aggressively simple Webpack 2 starter project

## Usage

* `npm run build`: Runs the Webpack build
* `npm run start`: Runs the Webpack build in watch mode

## Troubleshooting

### Minifacation / UglifyJS

UglifyJS is itself not necessarily compatible with your `.babelrc` config. To ensure it's compatibility you may need to use a less modern compile target. For example, if you're getting Uglify errors when you run the build try including older browsers in the supported target list:

Instead of just Chrome...

```json
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": "last 2 Chrome versions"
      },
      "modules": false,
      "loose": true
    }]
  ]
}
```

Try supporting all browsers...

```
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": "last 2 versions"
      },
      "modules": false,
      "loose": true
    }]
  ]
}
```
