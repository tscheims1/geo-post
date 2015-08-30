Package.describe({
  name: 'tscheims:geo-post',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Posts with Geo tags for e.g. travel diaries',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tscheims1/geo-post',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  
  //Client-Server Loading:
  api.addFiles(['lib/collections/post.js'],
      ['client','server']);

  //Server only
  api.addfiles(['lib/startup.js'],['server']);
  
  
  //client only
  api.addFiles(
      ['lib/templates/overview.html',
      'lib/templates/single.html'],
      ['client']
              );

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tscheims:geo-post');
  api.addFiles('geo-post-tests.js');
});
