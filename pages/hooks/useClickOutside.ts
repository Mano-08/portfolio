/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const useClickOutside = (myref: any, callBack: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        myref.current &&
        !myref.current.contains(event.target) &&
        event.target.classList.length > 0 &&
        event.target.classList[0] !== "hamburger"
      ) {
        callBack();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
};

export default useClickOutside;
