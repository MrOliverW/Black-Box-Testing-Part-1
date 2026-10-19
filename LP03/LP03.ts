export function numberOfNights(nights: number): boolean {
    return Number.isInteger(nights) && nights >= 1 && nights <= 31;
}

export function numberOfGuests(guests: number): boolean {
    return Number.isInteger(guests) && guests >= 1 && guests <= 12;
}

export function checkInCheckOutDates(checkInDate: number, checkOutDate: number): boolean {
    return Number.isInteger(checkOutDate - checkInDate) && checkOutDate - checkInDate > 0;
}

export function availability(nights: boolean[]): boolean {
    return nights.every(night => night === true);
}