import { useEffect, useRef } from "react";

export default function useOutsideClick(closingSetter, state) {
  const ref = useRef();
  useEffect(() => {
    if (state) {
      document.addEventListener(
        "click",
        (e) => {
          if (ref.current && !ref.current.contains(e.target)) {
            closingSetter(false);
          }
        },
        true
      );
    }
  }, [state]);
  return ref;
}
