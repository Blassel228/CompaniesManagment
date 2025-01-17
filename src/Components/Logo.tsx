import {SiNetlify} from "react-icons/si";
import * as React from "react";

export default function Logo(props: { size?: number}){
   const size = props.size || 40;
    return(
      <SiNetlify size={size}/>
    )
}