Package.describe({
    name: 'hellotech:meteor-momentjs-business',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'MomentJS extension for business days calculations (without iteration loops)',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');
    api.use([
        'ecmascript',
        'momentjs:moment'
    ]);
    api.addFiles('meteor-momentjs-business.js');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('hellotech:meteor-momentjs-business');
    api.addFiles('meteor-momentjs-business-tests.js');
});
