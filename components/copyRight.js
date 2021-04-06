import {renderInformation} from "../data/displayData";
import React from "react";

const CopyRight = () => {
  return (
    <div className ="flex">
      <p>{renderInformation.copyRightData.description}</p>
    </div>
  )
}

export default CopyRight;