import { motion } from "framer-motion";
import { styled } from "styled-components";

const Style = styled.div`
  * {
    box-sizing: border-box;
  }

  .switch {
    width: 80px;
    height: 50px;
    border-radius: 25px;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
  }

  .switch[data-ison="true"] {
    justify-content: flex-end;
  }

  .handle {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.16);
  }
`;
interface SwitchProps {
  isOn: any;
  onClick: any;
}

const Switch: React.FC<SwitchProps> = ({ isOn, onClick }) => {
  return (
    <Style className="overlay-container">
      <motion.div
        className="switch"
        data-ison={isOn}
        initial={false}
        animate={{ backgroundColor: isOn ? "#34C759" : "#E5E5EA" }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
      >
        <motion.div
          className="handle"
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </motion.div>
    </Style>
  );
};

export default Switch;
