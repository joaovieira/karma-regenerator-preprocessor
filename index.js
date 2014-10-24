var regenerator = require('regenerator');
var path = require('path');

var createRegeneratorPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.regenerator');
  var defaultOptions = { 
    includeRuntime: true
  };
  var options = helper.merge(defaultOptions, args.options || {}, config.options || {});

  return function(content, file, done) {
    var result = null;
    var map;
    var datauri;

    log.debug('Processing "%s".', file.originalPath);

    // Clone the options so we can mutate them
    var opts = helper._.clone(options)

    try {
      result = regenerator.compile(content, opts);
    } catch (e) {
      log.error('%s\n  at %s:%d', e.message, file.originalPath, e.location.first_line);
      return done(e, null);
    }

    done(null, result.code || result);
  };
};

createRegeneratorPreprocessor.$inject = ['args', 'config.regeneratorPreprocessor', 'logger', 'helper'];

module.exports = {
  'preprocessor:regenerator': ['factory', createRegeneratorPreprocessor]
};
