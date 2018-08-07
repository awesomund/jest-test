import {caesarCipher} from './crypto';

describe('Crypto', () => {
    test('konverterer bokstaver til korresponderende tall i alfabetet', () => {
       expect(caesarCipher('a')).toEqual(1);
    });
});
