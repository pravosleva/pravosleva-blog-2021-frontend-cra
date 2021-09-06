# pravosleva-blog-2021 (CRA based)

It's part of [fullstack](https://github.com/pravosleva/pravosleva-blog-2021-no-ssr)

> Для самого дешевого тарифа firstvds

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

## Development

1. _`package.json`_

Add `"proxy": "http://localhost:1337",`

2. _`.env.development.local` sample_

```bash
REACT_APP_API_ENDPOINT=http://localhost:1337
REACT_APP_SOCKET_ENDPOINT=http://localhost:1337
```

## Production

1. _`package.json`_

Remove `"proxy": "http://localhost:1337",`

2. _`.env.production.local` sample_

```bash
REACT_APP_API_ENDPOINT=http://pravosleva.ru/api
REACT_APP_SOCKET_ENDPOINT=http://pravosleva.ru
```
