/// <reference types="core-js" />
import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PickDate } from './PickDate';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class DatePickerComponent implements OnInit, ControlValueAccessor {
    closeOnSelect: boolean;
    highlightToday: boolean;
    highlightSelected: boolean;
    displayWeekNumbers: boolean;
    displayWeekdays: boolean;
    prevYearBtnIcon: string;
    nextYearBtnIcon: string;
    displayJumpToday: boolean;
    displayJumpSelected: boolean;
    selectedDate: Date;
    selectRange: boolean;
    selectedRangeEnd: Date;
    maxRangeLength: number;
    minDate: Date;
    maxDate: Date;
    pickedDate: PickDate;
    pickedRangeEnd: PickDate;
    viewDate: PickDate;
    today: PickDate;
    showYearPick: boolean;
    constructor();
    ngOnInit(): void;
    /**
     * activate the given date
     */
    select(date: PickDate): void;
    /**
     * ui-markers
     */
    isMarked(date: PickDate): boolean;
    isDisabled(day: PickDate): boolean;
    /**
     * functions to move viewDate
     */
    nextMonth(): void;
    prevMonth(): void;
    gotoToday(): void;
    gotoSelected(): void;
    yearPickSelect(year: number): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: Date): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
