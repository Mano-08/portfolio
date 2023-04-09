import { useEffect } from "react";

const useHitEscape = (nav: boolean, callBack: () => void) => {
  useEffect(() => {
    const handleEscape = (e: any) => {
      if (e.keyCode === 27) callBack();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  });
};
export default useHitEscape;
