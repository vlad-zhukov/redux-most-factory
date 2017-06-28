const epicFactory = require('../dist/redux-most-factory.cjs');

describe('import-bundle-esm-as-cjs', () => {
    it('should export properly', () => {
        expect(typeof epicFactory).toBe('function');
    });
});
