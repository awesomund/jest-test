import {caesarCipher} from './crypto';

describe('Crypto', () => {
    describe('Caesar', () => {

        test('konverterer bokstaver til korresponderende tall i alfabetet', () => {
           expect(caesarCipher('a')).toEqual('1');
            expect(caesarCipher('b')).toEqual('2');
            expect(caesarCipher('c')).toEqual('3');
        });

        test('konkatenerer strenger riktig', () => {
            expect(caesarCipher('abc')).toEqual('123');
        });
    });
});
