import {renderInformation} from "../data/displayData";
import React from "react";

const CopyRight = () => {
  return (
    <div>
      <p>{renderInformation.copyRightData.description}</p>
    </div>
  )
}

export default CopyRight;