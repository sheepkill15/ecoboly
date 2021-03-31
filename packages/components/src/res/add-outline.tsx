import * as React from "react"
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}
    >
      <Path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <Path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 176v160m80-80H176"
      />
    </Svg>
  )
}

export default SvgComponent
