import epicFactory from '../dist/redux-most-factory.cjs';

describe('import-bundle-esm', () => {
    it('should export properly', () => {
        expect(typeof epicFactory).toBe('function');
    });
});
