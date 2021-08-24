# pravosleva-blog-2021 (CRA based)

Для самого дешевого тарифа firstvds

_`deploy-app-config.json` sample_
```json
{
  "prod:demo": {
    "user": "root",
    "host": "pravosleva.ru",
    "port": "22",
    "files": "./build/*",
    "path": "/home/projects/pravosleva-blog/backend/public/cra",
    "pre-deploy-local": "yarn build && yarn analyze"
  },
  "dev": {},
  "staging": {}
}
```

_`.env.development.local` sample_
```bash
REACT_APP_API_ENDPOINT=http://localhost:1337
```

_`.env.production.local` sample_
```bash
REACT_APP_API_ENDPOINT=http://pravosleva.ru/api
```
