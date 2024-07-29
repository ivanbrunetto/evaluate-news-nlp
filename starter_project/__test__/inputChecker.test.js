/**
 * @jest-environment jsdom
 */
import { isValidUrl } from '../src/client/js/inputChecker';

describe("Testing the inputChecker functionality", () => {
    test("Testing the isValidUrl function", () => {
          expect(isValidUrl('')).toBeFalsy();
          expect(isValidUrl('text')).toBeFalsy();
          expect(isValidUrl('mailto:email@server.com')).toBeFalsy();
          expect(isValidUrl('http://ok')).toBeTruthy();
          expect(isValidUrl('http://ok.com')).toBeTruthy();
          expect(isValidUrl('https://ok')).toBeTruthy();
          expect(isValidUrl('https://www.ok.com')).toBeTruthy();
    })
});