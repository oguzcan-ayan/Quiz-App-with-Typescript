
# Quiz App

Bu uygulama kullanıcıların farklı kategorilerden gelen sorularla bilgi düzeylerini ölçmek amacıyla oluşturulmuş bir uygulamadır.

This application was created to measure the knowledge levels of users with questions from different categories. 

## Kullanılan Teknolojiler - Used Technologies

[react@18.2.0](https://react.dev/)

[react-dom@18.2.0](https://legacy.reactjs.org/docs/react-dom.html)

[typescript@5.2.2](https://www.typescriptlang.org/)

[styled-components@6.1.11](https://styled-components.com/docs)

[@types/styled-components@5.1.34](https://styled-components.com/docs/faqs)

[vite@5.2.0](https://vitejs.dev/guide/)



Projeyi canlı olarak görmek istiyorsanız, [Projeye Git]()


If you want to see the project, [Go Live]()



## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
