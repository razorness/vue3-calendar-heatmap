import { PropType } from 'vue';
import { CalendarItem, Locale, Month, TooltipFormatter, Value } from '../components/Heatmap';
declare const _default: import("vue").DefineComponent<{
    endDate: {
        required: true;
    };
    max: {
        type: NumberConstructor;
    };
    rangeColor: {
        type: PropType<string[]>;
    };
    values: {
        type: PropType<Value[]>;
        required: true;
    };
    locale: {
        type: PropType<Partial<Locale>>;
    };
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltipUnit: {
        type: StringConstructor;
        default: string;
    };
    tooltipFormatter: {
        type: PropType<TooltipFormatter>;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    noDataText: {
        type: (BooleanConstructor | StringConstructor)[];
        default: null;
    };
    round: {
        type: NumberConstructor;
        default: number;
    };
    darkMode: BooleanConstructor;
}, {
    SQUARE_BORDER_SIZE: number;
    SQUARE_SIZE: number;
    LEFT_SECTION_WIDTH: number;
    RIGHT_SECTION_WIDTH: number;
    TOP_SECTION_HEIGHT: number;
    BOTTOM_SECTION_HEIGHT: number;
    svg: import("vue").Ref<SVGElement | null>;
    heatmap: import("vue").Ref<{
        startDate: {
            toString: () => string;
            toDateString: () => string;
            toTimeString: () => string;
            toLocaleString: {
                (): string;
                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            };
            toLocaleDateString: {
                (): string;
                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            };
            toLocaleTimeString: {
                (): string;
                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            };
            valueOf: () => number;
            getTime: () => number;
            getFullYear: () => number;
            getUTCFullYear: () => number;
            getMonth: () => number;
            getUTCMonth: () => number;
            getDate: () => number;
            getUTCDate: () => number;
            getDay: () => number;
            getUTCDay: () => number;
            getHours: () => number;
            getUTCHours: () => number;
            getMinutes: () => number;
            getUTCMinutes: () => number;
            getSeconds: () => number;
            getUTCSeconds: () => number;
            getMilliseconds: () => number;
            getUTCMilliseconds: () => number;
            getTimezoneOffset: () => number;
            setTime: (time: number) => number;
            setMilliseconds: (ms: number) => number;
            setUTCMilliseconds: (ms: number) => number;
            setSeconds: (sec: number, ms?: number | undefined) => number;
            setUTCSeconds: (sec: number, ms?: number | undefined) => number;
            setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
            setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
            setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
            setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
            setDate: (date: number) => number;
            setUTCDate: (date: number) => number;
            setMonth: (month: number, date?: number | undefined) => number;
            setUTCMonth: (month: number, date?: number | undefined) => number;
            setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
            setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
            toUTCString: () => string;
            toISOString: () => string;
            toJSON: (key?: any) => string;
            [Symbol.toPrimitive]: {
                (hint: "default"): string;
                (hint: "string"): string;
                (hint: "number"): number;
                (hint: string): string | number;
            };
        };
        endDate: {
            toString: () => string;
            toDateString: () => string;
            toTimeString: () => string;
            toLocaleString: {
                (): string;
                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            };
            toLocaleDateString: {
                (): string;
                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            };
            toLocaleTimeString: {
                (): string;
                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            };
            valueOf: () => number;
            getTime: () => number;
            getFullYear: () => number;
            getUTCFullYear: () => number;
            getMonth: () => number;
            getUTCMonth: () => number;
            getDate: () => number;
            getUTCDate: () => number;
            getDay: () => number;
            getUTCDay: () => number;
            getHours: () => number;
            getUTCHours: () => number;
            getMinutes: () => number;
            getUTCMinutes: () => number;
            getSeconds: () => number;
            getUTCSeconds: () => number;
            getMilliseconds: () => number;
            getUTCMilliseconds: () => number;
            getTimezoneOffset: () => number;
            setTime: (time: number) => number;
            setMilliseconds: (ms: number) => number;
            setUTCMilliseconds: (ms: number) => number;
            setSeconds: (sec: number, ms?: number | undefined) => number;
            setUTCSeconds: (sec: number, ms?: number | undefined) => number;
            setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
            setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
            setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
            setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
            setDate: (date: number) => number;
            setUTCDate: (date: number) => number;
            setMonth: (month: number, date?: number | undefined) => number;
            setUTCMonth: (month: number, date?: number | undefined) => number;
            setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
            setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
            toUTCString: () => string;
            toISOString: () => string;
            toJSON: (key?: any) => string;
            [Symbol.toPrimitive]: {
                (hint: "default"): string;
                (hint: "string"): string;
                (hint: "number"): number;
                (hint: string): string | number;
            };
        };
        max: number;
        values: {
            date: string | {
                toString: () => string;
                toDateString: () => string;
                toTimeString: () => string;
                toLocaleString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                toLocaleDateString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                toLocaleTimeString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                valueOf: () => number;
                getTime: () => number;
                getFullYear: () => number;
                getUTCFullYear: () => number;
                getMonth: () => number;
                getUTCMonth: () => number;
                getDate: () => number;
                getUTCDate: () => number;
                getDay: () => number;
                getUTCDay: () => number;
                getHours: () => number;
                getUTCHours: () => number;
                getMinutes: () => number;
                getUTCMinutes: () => number;
                getSeconds: () => number;
                getUTCSeconds: () => number;
                getMilliseconds: () => number;
                getUTCMilliseconds: () => number;
                getTimezoneOffset: () => number;
                setTime: (time: number) => number;
                setMilliseconds: (ms: number) => number;
                setUTCMilliseconds: (ms: number) => number;
                setSeconds: (sec: number, ms?: number | undefined) => number;
                setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                setDate: (date: number) => number;
                setUTCDate: (date: number) => number;
                setMonth: (month: number, date?: number | undefined) => number;
                setUTCMonth: (month: number, date?: number | undefined) => number;
                setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                toUTCString: () => string;
                toISOString: () => string;
                toJSON: (key?: any) => string;
                [Symbol.toPrimitive]: {
                    (hint: "default"): string;
                    (hint: "string"): string;
                    (hint: "number"): number;
                    (hint: string): string | number;
                };
            };
            count: number;
        }[];
        readonly activities: import('../components/Heatmap').Activities;
        readonly weekCount: number;
        readonly calendar: {
            date: {
                toString: () => string;
                toDateString: () => string;
                toTimeString: () => string;
                toLocaleString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                toLocaleDateString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                toLocaleTimeString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                valueOf: () => number;
                getTime: () => number;
                getFullYear: () => number;
                getUTCFullYear: () => number;
                getMonth: () => number;
                getUTCMonth: () => number;
                getDate: () => number;
                getUTCDate: () => number;
                getDay: () => number;
                getUTCDay: () => number;
                getHours: () => number;
                getUTCHours: () => number;
                getMinutes: () => number;
                getUTCMinutes: () => number;
                getSeconds: () => number;
                getUTCSeconds: () => number;
                getMilliseconds: () => number;
                getUTCMilliseconds: () => number;
                getTimezoneOffset: () => number;
                setTime: (time: number) => number;
                setMilliseconds: (ms: number) => number;
                setUTCMilliseconds: (ms: number) => number;
                setSeconds: (sec: number, ms?: number | undefined) => number;
                setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                setDate: (date: number) => number;
                setUTCDate: (date: number) => number;
                setMonth: (month: number, date?: number | undefined) => number;
                setUTCMonth: (month: number, date?: number | undefined) => number;
                setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                toUTCString: () => string;
                toISOString: () => string;
                toJSON: (key?: any) => string;
                [Symbol.toPrimitive]: {
                    (hint: "default"): string;
                    (hint: "string"): string;
                    (hint: "number"): number;
                    (hint: string): string | number;
                };
            };
            count?: number | undefined;
            colorIndex: number;
        }[][];
        readonly firstFullWeekOfMonths: {
            value: number;
            index: number;
        }[];
        getColorIndex: (count?: number | undefined) => number;
        getCountEmptyDaysAtStart: () => number;
        getCountEmptyDaysAtEnd: () => number;
        getDaysCount: () => number;
    }>;
    now: import("vue").Ref<{
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number | undefined) => number;
        setUTCSeconds: (sec: number, ms?: number | undefined) => number;
        setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number | undefined) => number;
        setUTCMonth: (month: number, date?: number | undefined) => number;
        setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    }>;
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    viewbox: import("vue").Ref<string>;
    daysLabelWrapperTransform: import("vue").Ref<string>;
    monthsLabelWrapperTransform: import("vue").Ref<string>;
    yearWrapperTransform: string;
    legendWrapperTransform: import("vue").Ref<string>;
    lo: import("vue").Ref<{
        months: string[];
        days: string[];
        on: string;
        less: string;
        more: string;
    }>;
    legendViewbox: import("vue").Ref<string>;
    curRangeColor: import("vue").Ref<string[]>;
    tooltipOptions: (day: CalendarItem) => string | undefined;
    getWeekPosition: (index: number) => string;
    getDayPosition: (index: number) => string;
    getMonthLabelPosition: (month: Month) => {
        x: number;
        y: number;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "dayClick"[], "dayClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    endDate: {
        required: true;
    };
    max: {
        type: NumberConstructor;
    };
    rangeColor: {
        type: PropType<string[]>;
    };
    values: {
        type: PropType<Value[]>;
        required: true;
    };
    locale: {
        type: PropType<Partial<Locale>>;
    };
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltipUnit: {
        type: StringConstructor;
        default: string;
    };
    tooltipFormatter: {
        type: PropType<TooltipFormatter>;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    noDataText: {
        type: (BooleanConstructor | StringConstructor)[];
        default: null;
    };
    round: {
        type: NumberConstructor;
        default: number;
    };
    darkMode: BooleanConstructor;
}>> & {
    onDayClick?: ((...args: any[]) => any) | undefined;
}, {
    tooltip: boolean;
    tooltipUnit: string;
    vertical: boolean;
    noDataText: string | boolean;
    round: number;
    darkMode: boolean;
}>;
export default _default;
