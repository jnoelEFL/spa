# Configuration Brunch
# ====================

exports.config =
  # See https://github.com/brunch/brunch/blob/stable/docs/config.md for documentation.
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
      order:
        before: [
          'vendor/scripts/console-polyfill.js',
          'vendor/scripts/jquery.js',
          'vendor/scripts/underscore.js',
          'vendor/scripts/moment-2.6.0.js',
          'vendor/scripts/moment-2.6.0-fr.js',
          'vendor/scripts/accounting.js',
          'vendor/scripts/bootstrap/tooltip.js',
          'vendor/scripts/backbone.js',
          'vendor/scripts/chaplin.js',
        ]

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^app|bootstrap\.less/

    templates:
      joinTo: 'javascripts/app.js'


  watcher:
    # If on Windows and you don't see new files / modified files, make this true
    # and restart Brunch. Slower detects, but more reliable.
    usePolling: true

  keyword:
    # file filter
    filePattern: /\.(js|css|html)$/

    # Extra files to process which `filePattern` wouldn't match
    # extraFiles:

    # By default keyword-brunch has these keywords:
    #     {!version!}, {!name!}, {!date!}, {!timestamp!}
    # using information from package.json
    map:
      test: "12"

  plugins:
    gzip:
      paths:
        javascript: 'javascripts'
        stylesheet: 'stylesheets'
      removeOriginalFiles: false
      renameGzipFilesToOriginalFiles: false

    uglify:
      mangle: false
      compress:
        global_defs:
          DEBUG: false
