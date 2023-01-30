const { generateApi } = require('swagger-typescript-api');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
require('dotenv').config();

const folderPath = path.join(
  __dirname,
  `${process.env.NX_DIRECTORY_GENERATE_API || '../libs/generators-api'}`
);
rimraf.sync(folderPath);

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}
const swaggerJsonUrl = `${
  process.env.NX_URI_SERVICE_API || 'http://localhost:8000'
}/api-json`;
generateApi({
  url: swaggerJsonUrl,
  generateRouteTypes: false,
  generateClient: true,
  generateResponses: true,
  extractRequestParams: true,
  modular: true,
  enumNamesAsValues: false,
  templates: path.join(__dirname, './templates/modular'),
}).then(({ files }) => {
  files.forEach(({ content, name }) => {
    const kebabCase = name
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase();

    fs.writeFileSync(
      path.join(__dirname, `../libs/generators-api/${kebabCase}`),
      content,
      () => console.log('√ Interfaces created!')
    );
  });
  fs.createReadStream(
    path.join(path.join(__dirname, `./templates/base/index.ts`))
  ).pipe(
    fs.createWriteStream(path.join(__dirname, `../libs/generators-api/base.ts`))
  );
});
