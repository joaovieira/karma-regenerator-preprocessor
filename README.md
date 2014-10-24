# karma-regenerator-preprocessor

> Preprocessor to compile regenerator code

## Installation

The easiest way is to keep `karma-regenerator-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-regenerator-preprocessor": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-regenerator-preprocessor --save-dev
```

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.js': ['regenerator']
    },

    regeneratorPreprocessor: {
      // options passed to regenerator
      options: {
        includeRuntime: true,
      },
    }
  });
};
```

----

- For more information on Karma see the [homepage].
- For more information on Regenerator see the [regenerator homepage].


[homepage]: http://karma-runner.github.com
[regenerator homepage]: https://github.com/facebook/regenerator

## Authors

- Nate Murray <nate@fieldday.ag>
- Forked from `karma-coffee-preprocessor`
