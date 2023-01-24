// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateApi } = require('swagger-typescript-api');
// eslint-disable-next-line @typescript-eslint/typedef,@typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/typedef
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/typedef
const rimraf = require('rimraf');

// eslint-disable-next-line @typescript-eslint/typedef
const folderPath = path.join(__dirname, '../libs/generators-api');
rimraf.sync(folderPath);

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}
const swaggerJsonUrl = 'http://0.0.0.0:3333/api-json';
generateApi({
  url: swaggerJsonUrl,
  generateRouteTypes: false,
  generateClient: true,
  generateResponses: true,
  extractRequestParams: true,
  modular: true,
  enumNamesAsValues: false,
  templates: path.join(__dirname, './templates/modular'),
  // eslint-disable-next-line @typescript-eslint/typedef
}).then(({ files }) => {
  // eslint-disable-next-line @typescript-eslint/typedef
  files.forEach(({ content, name }) => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const kebabCase = name
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase();

    if (kebabCase === 'app-cart.ts') {
      content = content.replace(
        'delete = (id: string):',
        'deleteCart = (id: string):'
      );
    }

    fs.writeFileSync(
      path.join(__dirname, `../libs/generators-api/${kebabCase}`),
      content,
      () => console.log('√ Interfaces created!')
    );
  });
});
