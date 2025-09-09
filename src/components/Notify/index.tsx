import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Container, Message } from "./style";
import type AlertState from "../../types/alertState";

interface Props {
  text: string;
  isError: boolean;
  setAlert: (state: AlertState) => void;
}

export default function Notify({ text, isError, setAlert }: Props) {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, transition: { duration: 3 } });
      await controls.start({ opacity: 0, transition: { duration: 3 } });
      setAlert({
        message: "",
        isVisible: false,
        isError: false,
      });
    };
    sequence();
  }, [controls]);

  return (
    <Container
      as={motion.div}
      animate={controls}
      initial={{ opacity: 0 }}
      isError={isError}
    >
      <Message>{text}</Message>
    </Container>
  );
}