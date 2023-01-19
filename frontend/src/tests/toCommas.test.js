import { toCommas } from '../utils/utils';

describe('toCommas', () => {
    it('formats numbers with commas', () => {
        expect(toCommas(1000)).toBe('1,000');
        expect(toCommas(12345678)).toBe('12,345,678');
        expect(toCommas(0)).toBe('0');
    });
});
