import type { StyleVars } from '../../utils';
export declare function getLeft(element: HTMLElement): number;
export declare function getTop(element: HTMLElement): number;
export declare function getScrollTop(element: Element | Window): number;
export declare function getScrollLeft(element: Element | Window): number;
export declare function inViewport(element: HTMLElement): Promise<boolean>;
export declare function getTranslate(el: HTMLElement): number;
export declare function isHidden(el: HTMLElement): boolean;
export declare function getParentScroller(el: HTMLElement): HTMLElement | Window;
export declare function getAllParentScroller(el: HTMLElement): Array<HTMLElement | Window>;
export declare const isRem: (value: unknown) => boolean;
export declare const isPx: (value: unknown) => boolean;
export declare const isPercent: (value: unknown) => boolean;
export declare const isVw: (value: unknown) => boolean;
export declare const isVh: (value: unknown) => boolean;
export declare const toPxNum: (value: unknown) => number;
export declare const toSizeUnit: (value: unknown) => unknown;
export declare function requestAnimationFrame(fn: FrameRequestCallback): number;
export declare function cancelAnimationFrame(handle: number): void;
export declare function nextTickFrame(fn: FrameRequestCallback): void;
export declare function doubleRaf(): Promise<unknown>;
interface ScrollToOptions {
    top?: number;
    left?: number;
    duration?: number;
    animation: (progress: number) => number;
}
export declare function scrollTo(element: HTMLElement | Window, { top, left, duration, animation }: ScrollToOptions): Promise<void>;
export declare function formatStyleVars(styleVars: StyleVars): StyleVars;
export {};
