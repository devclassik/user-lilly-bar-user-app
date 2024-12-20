import React from "react";
import DefaultTable from "./child/DefaultTable";
import BorderedTables from "./child/BorderedTables";
import StripedRows from "./child/StripedRows";
import StripedRowsTwo from "./child/StripedRowsTwo";
import TablesBorderColors from "./child/TablesBorderColors";
import TablesBorderColorsTwo from "./child/TablesBorderColorsTwo";
import TablesBorderColorsThree from "./child/TablesBorderColorsThree";

const DepositTableBasicLayer = () => {
  return (
    <div className="row gy-4">
      {/* StripedRows */}
      <StripedRows />
    </div>
  );
};

export default DepositTableBasicLayer;
