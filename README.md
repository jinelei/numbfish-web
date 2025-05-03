# Numbfish 更好用的物联网平台


## 合并openapi.json
```bash
npx openapi-merge-cli --config ./openapi/openapi-merge.yaml
```

## 根据openapi.json自动生成请求业务代码
```bash
// 生成集成模块请求代码
npx swagger-typescript-api generate --modular --routeTypes --singleHttpClient --axios --module-name-index 0 --output ./src/apis/api --path ./openapi/integration.openapi.json


// 生成Authorization模块请求代码
npx swagger-typescript-api generate --modular --routeTypes --singleHttpClient --axios --module-name-index 0 --output ./src/apis/api --path ./openapi/modules/authorization.openapi.json
```

## 自动检查更新依赖关系
```bash
// 检查系统依赖是否应该更新
npx npm-check-updates
// 执行更新依赖
npx npm-check-updates -u
// 重新执行安装依赖
yarn install
```
