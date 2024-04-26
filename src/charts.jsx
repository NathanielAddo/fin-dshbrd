import React from "react";
import {inputValue} from "./transactions";
export default function Chart({inputValue}) {
  return(
   <div className="flex flex-col-2 p-4">
   <div>
    value: {inputValue}
   </div>
   <div></div>
   <div></div>
   </div>
  );
}