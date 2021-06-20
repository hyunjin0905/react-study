import React, {
    Children,
    ReactElement,
    useCallback,
    useMemo,
    useState,
    useImperativeHandle,
    ReactNode
} from "react";

export type FlowProps = {
    currentStep?: number;
    handlePrev?: () => void;
    onClose?: () => void;
    initialStep?: number;
    children: ReactNode;
};

export const Flow = React.forwardRef((props: FlowProps, ref) => {
    const { children, onClose, initialStep, currentStep } = props;
    const length = Children.count(children);
    const [ step, setStep ] = useState<number>(initialStep ?? 0);
    const next = useCallback(() => {
        setStep((prev) => {
            return prev + 1 >= length ? prev : prev + 1;
        });
    }, [ setStep, length ]);

    const prev = useCallback(() => {
        setStep((prev) => {
            if (prev === 0) {
                onClose && onClose();
            }
            return prev - 1 < 0 ? prev : prev - 1;

        });
    }, [ setStep ]);

    useImperativeHandle(ref, () => {
        return {
            handlePrev: prev
        };
    }, []);

    const childList = useMemo(() => {
        return (Children.toArray(children)).map((screen, index) => {
            if (!screen) return screen;
            return React.cloneElement(screen, { ...screen.props, next: next, prev: prev, step: index });
        })
    }, [ children, next, prev ]);

    return childList[step];
});

