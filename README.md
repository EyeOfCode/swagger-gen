

# SwaggerGenApi

generate api from swagger nx

*** This example is nestjs + react and library directory on folder name `generation`!!

## step
1. create service
2. create schema
3. create dto
4. install lib `axios`
5. set root env nx (set base url service)
6. implement api and add tag swagger `Generate` or `generate` on route
7. run generate script
8. set nx export lib on `tasconfig.basse.json (paths)`
9. get function api on client by directory `(libs/generators-api)`
10. use `subscribe` response data

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