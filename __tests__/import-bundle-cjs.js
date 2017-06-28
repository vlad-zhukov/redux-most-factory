const epicFactory = require('../dist/redux-most-factory.cjs');

describe('import-bundle-cjs', () => {
    it('should export properly', () => {
        expect(typeof epicFactory).toBe('function');
    });
});
