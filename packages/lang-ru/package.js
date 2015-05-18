Package.describe({
  name: 'orionjs:lang-ru',
  version: '1.1.0',
  summary: 'Orion - Russian language',
  git: 'https://github.com/orionjs/orion',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('orionjs:lang-en');
  api.imply('orionjs:lang-en');

  api.addFiles('ru.i18n.json');
});
