# vue-azure-translator

Simple web-app translator using [Azure Translator](https://azure.microsoft.com/en-us/services/cognitive-services/translator/ "An AI service for real-time text translation")

## Development
### Project setup
```sh
yarn install
```

### Add your Azure Translator subscription key
1. Create `.env` file, in root project folder
2. Put your key in variable name `VUE_APP_KEY`
   ```
   VUE_APP_KEY=YourKey1-or-Key2
   ```
3. You may need to read [Environment Variables | Vue CLI](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables)

### Compiles and hot-reloads for development
```sh
yarn serve
```

### Lints and fixes files
```sh
yarn lint
```

### Compiles and minifies for production
```sh
yarn build
```

## Further development
- [Azure Translator Service Documentation](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/translator-info-overview "Azure Translator Service Documentation")