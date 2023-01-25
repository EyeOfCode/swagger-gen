

# SwaggerGenApi

generate api from swagger

## step
1. create service
2. create schema
3. create dto
4. install lib `axios`
5. set root env nx (set base url service)
6. run generate script
7. set nx export lib on `tasconfig.basse.json (paths)`
8. get function api on client by directory `(libs/generators-api)`
9. use `subscribe` response data

*** if error a babel you can use config nx babel.config.json `"presets": ["@nrwl/web/babel"]`
## cmd
```
$npm run gen:api
```