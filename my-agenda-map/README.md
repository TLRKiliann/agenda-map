# FRONTEND AGENDA MAP

Agenda was made by CRA + TypeScript :

└─ $ ▶ npx create-react-app my-agenda-map --template typescript

---

## INSTALL

└─ $ ▶ npm install axios (to communicate with express in backend)

└─ $ ▶ npm install --save react-router-dom

└─ $ ▶ npm install --save-dev sass

---

## TESTING

- Create __tests__ folder in parallel as your script.
- Create file for testing `../Components/__tests__/Login.test.tsx` for
  `../Components/Login.tsx`
- Create file Login.spec.tsx in __tests__ folder.


└─ $ ▶ npm install --save-dev jest @types/jest @babel/preset-typescript

└─ $ ▶ npm install jest jest-styled-components react-test-renderer --save-dev

└─ $ ▶ npm install --save-dev react-test-renderer

└─ $ ▶ npm install --save-dev @testing-library/react


API .toMatchSnapshot()

```
it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

└─ $ ▶ npm run test

└─ $ ▶ npm run test --code--coverage

└─ $ ▶ npm install coverage

└─ $ ▶ CI=true npm test

└─ $ ▶ npm test -- --coverage

└─ $ ▶ npm test `-- --coverage --collectCoverageFrom="./src/**"`

---

## My favorites

└─ $ ▶ npm run test
└─ $ ▶ npm run test --code--coverage
└─ $ ▶ npm test -- --coverage