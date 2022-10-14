import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function useScrollAnimation() {
  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return [ref, control];
}
