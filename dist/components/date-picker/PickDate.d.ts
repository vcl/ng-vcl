/// <reference types="core-js" />
/**
 * this is a helper-class so that the Date-logic
 * is not mashed with the components logic
 */
export declare class PickDate {
    static monthNames: string[];
    static weekDays: string[];
    date: Date;
    constructor(date?: Date);
    getMonthString(): string;
    getYearString(): string;
    /**
     * gets the first day of the month for the given date's month.
     */
    getFirstDateOfMonth(date: Date): Date;
    moveToYear(year: number): PickDate;
    addYears(amount?: number): PickDate;
    addDays(date: Date, amount?: number): Date;
    moveDays(amount: any): void;
    /**
     * returns true if this is greater than that
     */
    gt(date: Date): boolean;
    /**
     * returns true if this is lower than that
     */
    lt(date: Date): boolean;
    /**
     * Gets a new date incremented by the given number of months. Number of months can be negative.
     * If the date of the given month does not match the target month, the date will be set to the
     * last day of the month.
     */
    incrementMonths(numberOfMonths: number): PickDate;
    /**
      * Gets the number of days in the month for the given date's month
      */
    getNumberOfDaysInMonth(date: Date): number;
    getLastDateOfMonth(date: Date): Date;
    /**
      * Gets whether two dates have the same month and year
      */
    isSameMonthAndYear(date?: PickDate): boolean;
    /**
     * Gets whether two dates are the same day (not not necesarily the same time)
     */
    isSameDay(date: PickDate): boolean;
    isToday(): boolean;
    isInYear(year: number): boolean;
    /**
     * returns a set of days which are in the given month or
     * are in the same weekNumber as a day in the given month
     */
    getMonthBlock(): PickDate[][];
    getYearsBlock(): any[];
    getWeekDays(): string[];
    getWeekNumber(): number;
    /**
     * returns true if this is between the given dates
     */
    inRange(from: PickDate, to: PickDate): boolean;
    daysInRange(to: PickDate): number;
    dir(): string;
}
export declare function PickDateCreate(date?: Date): PickDate;
