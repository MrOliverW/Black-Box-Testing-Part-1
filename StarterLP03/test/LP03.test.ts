import { numberOfNights } from './LP03';
import { numberOfGuests } from './LP03';
import { checkInCheckOutDates } from './LP03';
import { availability } from './LP03';

describe("Valid Reservation", () => {
    // TCO1, invalid, fewer than 1 night 
    test("TC01: 0 night (invalid range)", () => {
        expect(numberOfNights(0)).toBe(false);
    });
    // TCO2, valid, within range of 1-31 nights 
    test("TC02: 15 nights (valid range with additional fee)", () => {
        expect(numberOfNights(15)).toBe(true);
    });
    // TCO3, invalid, more than 31 nights 
    test("TC03: 32 nights (invalid range)", () => {
        expect(numberOfNights(32)).toBe(false);
    });
    // TCO4, invalid, more than 12 guests 
    test("TC04: 0 guest (invalid range)", () => {
        expect(numberOfGuests(0)).toBe(false);
    });
    // TCO5, valid, standard rate 
    test("TC05: 3 guests (valid range)", () => {
        expect(numberOfGuests(3)).toBe(true);
    });
    // TCO6, valid, additional fee 
    test("TC06: 6 guests (valid range with additional fee)", () => {
        expect(numberOfGuests(6)).toBe(true);
    });
    // TCO7, invalid, more than 12 guests 
    test("TC07: 13 guests (invalid range)", () => {
        expect(numberOfGuests(13)).toBe(false);
    });
    // TCO8, valid, check-in date is before checkout date 
    test("TC08: Oct 15 - Oct 16 (valid condition)", () => {
        expect(checkInCheckOutDates(15, 16)).toBe(true);
    });
    // TCO9, invalid, check-in date is the same as checkout date 
    test("TC09: Oct 15 - Oct 15 (invalid condition)", () => {
        expect(checkInCheckOutDates(15, 15)).toBe(false);
    });
    // TC10, invalid, check-in date is after checkout date 
    test("TC10: Oct 16 - Oct 15 (invalid condition)", () => {
        expect(checkInCheckOutDates(16, 15)).toBe(false);
    });
    // TC11, invalid, all nights are available
    test("TC11: All 3 nights are available (valid condition)", () => {
        expect(availability([true, true, true])).toBe(true);
    });
    // TC12, invalid, one night is unavailable 
    test("TC12: The second night of 3 is unavailable (invalid condition)", () => {
        expect(availability([true, false, true])).toBe(false);
    });
});