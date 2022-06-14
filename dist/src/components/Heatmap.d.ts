export interface Value {
    date: Date | string;
    count: number;
}
export interface Activity {
    count: number;
    colorIndex: number;
}
export declare type Activities = Map<string, Activity>;
export interface CalendarItem {
    date: Date;
    count?: number;
    colorIndex: number;
}
export declare type Calendar = CalendarItem[][];
export interface Month {
    value: number;
    index: number;
}
export interface Locale {
    months: string[];
    days: string[];
    on: string;
    less: string;
    more: string;
}
export declare type TooltipFormatter = (item: CalendarItem, unit: string) => string;
export declare class Heatmap {
    static readonly DEFAULT_RANGE_COLOR_LIGHT: string[];
    static readonly DEFAULT_RANGE_COLOR_DARK: string[];
    static readonly DEFAULT_LOCALE: Locale;
    static readonly DEFAULT_TOOLTIP_UNIT = "contributions";
    static readonly DAYS_IN_ONE_YEAR = 365;
    static readonly DAYS_IN_WEEK = 7;
    static readonly SQUARE_SIZE = 10;
    startDate: Date;
    endDate: Date;
    max: number;
    private _values;
    private _firstFullWeekOfMonths?;
    private _activities?;
    private _calendar?;
    constructor(endDate: Date | string, values: Value[], max?: number);
    set values(v: Value[]);
    get values(): Value[];
    get activities(): Activities;
    get weekCount(): number;
    get calendar(): Calendar;
    get firstFullWeekOfMonths(): Month[];
    getColorIndex(count?: number): number;
    getCountEmptyDaysAtStart(): number;
    getCountEmptyDaysAtEnd(): number;
    getDaysCount(): number;
    private shiftDate;
    private parseDate;
    private keyDayParser;
}
