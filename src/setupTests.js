const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn()
};
global.localStorage = localStorageMock;
