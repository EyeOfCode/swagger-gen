

# SwaggerGenApi

generate api from swagger nx

*** This example is nestjs + react and library directory on folder name `generation`!!

## step
1. create service
2. create schema
3. create dto
4. install lib `axios`
5. can you set base url service `NX_URI_SERVICE_API` (default `http://localhost:8000`)
6. can you set directory by key `NX_DIRECTORY_GENERATE_API` (default `libs/generators-api`)
7. implement api and add tag swagger `Generate` or set key env `NX_KEY_GENERATE` on route
8. run generate script
9. set nx export lib on `tasconfig.basse.json (paths)`
10. get function api on client by directory `(libs/generators-api)`
11. use `subscribe` response data

*** if error a babel you can use config nx babel.config.json `"presets": ["@nrwl/web/babel"]`. you can watch api json from `http://localhost/api-json` and you can watch all api from `http://localhost/api`
## cmd
```
$npm run gen:api
```

## lib generate
- axios
- swagger-typescript-api
- fs
- path
- rimraf
- dotenv
- swagger
- nx