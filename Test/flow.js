import React, { Children, ReactElement, useCallback, useMemo, useState, useImperativeHandle, ReactNode } from "react";
export const Flow = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    children,
    onClose,
    initialStep,
    currentStep
  } = props;
  console.log(children);
  console.log(Children);
  const length = Children.count(children);
  const [step, setStep] = useState(initialStep ?? 0);
  const next = useCallback(() => {
    setStep(prev => {
      return prev + 1 >= length ? prev : prev + 1;
    });
  }, [setStep, length]); // setStep 빼보기!!!!

  const prev = useCallback(() => {
    setStep(prev => {
      if (prev === 0) {
        onClose && onClose();
      }

      return prev - 1 < 0 ? prev : prev - 1;
    });
  }, [setStep]); // setStep 빼보기!!!!

  useImperativeHandle(ref, () => {
    return {
      handlePrev: prev
    };
  }, []);
  const childList = useMemo(() => {
    return Children.toArray(children).map((screen, index) => {
      if (!screen) return screen;
      return /*#__PURE__*/React.cloneElement(screen, { ...screen.props,
        next: next,
        prev: prev,
        step: index
      });
    });
  }, [children, next, prev]);
  return childList[step];
});