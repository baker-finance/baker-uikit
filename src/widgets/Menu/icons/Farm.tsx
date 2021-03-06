import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path
        d="M23.127 10.987l-6.122-6.125c-.51-.51-1.35-.51-1.871 0-.51.51-.51 1.35 0 1.872l1.279 1.28-3.197 3.21-1.22-1.22a2.222 2.222 0 00-3.138 0L6.37 12.492a6.46 6.46 0 000 9.135 6.451 6.451 0 009.13 0l2.487-2.488a2.225 2.225 0 000-3.14L16.78 14.79l3.209-3.21 1.279 1.28c.509.509 1.35.509 1.87 0 .51-.522.51-1.363-.011-1.873zm-9.568 4.526l-4.607 4.609a.751.751 0 01-.544.225.751.751 0 01-.545-.225.78.78 0 010-1.09l4.606-4.609a.779.779 0 011.09 0 .759.759 0 010 1.09z"
      />
    </Svg>
  );
};

export default Icon;
