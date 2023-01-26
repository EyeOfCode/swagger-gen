// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateApi } = require('swagger-typescript-api');
// eslint-disable-next-line @typescript-eslint/typedef,@typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/typedef
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/typedef
const rimraf = require('rimraf');
require('dotenv').config();

// eslint-disable-next-line @typescript-eslint/typedef
const folderPath = path.join(
  __dirname,
  `${process.env.NX_DIRECTORY_GENERATE_API || '../libs/generators-api'}`
);
rimraf.sync(folderPath);

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}
const swaggerJsonUrl = `${process.env.NX_URI_SERVICE_API}/api-json`;
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
  // eslint-disable-next-line @typescript-eslint/typedef]
  files.forEach(({ content, name }) => {
    // eslint-disable-next-line @typescript-eslint/typedef
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
