npm install axios

npm install react-router-dom

npm install --save-dev sass




npm run test

npm install --save-dev jest @types/jest @babel/preset-typescript

npm install jest jest-styled-components react-test-renderer --save-dev

npm install --save-dev react-test-renderer

npm install --save-dev @testing-library/react


API

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

└─ $ ▶ npm run test

└─ $ ▶ npm run test --code--coverage

└─ $ ▶ npm install coverage

└─ $ ▶ CI=true npm test

└─ $ ▶ npm test -- --coverage

└─ $ ▶ npm test `-- --coverage --collectCoverageFrom="./src/**"`
