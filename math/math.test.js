import {add} from './math.js';

describe('Math', () => {
    describe('add', () => {
        test('legger sammen to tall', () => {
            expect(add(1,1)).toEqual(2);
        });
    })
});