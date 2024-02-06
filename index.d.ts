interface IAbortable {
    abort (): void;
}

interface IAnimateOptions {
    startDelay?: number;
    lineDelay?: number;
    letterDelay?: number;
    cursor?: HTMLElement;
}

export const animate: (parent: HTMLElement, options?: IAnimateOptions) => IAbortable;