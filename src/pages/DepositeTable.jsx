import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TableBasicLayer from "../components/TableBasicLayer";
import DepositTableBasicLayer from "../components/DepositeTableLayer";

const DepositTablePage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Basic Table" />

        {/* TableBasicLayer */}
        <DepositTableBasicLayer />

      </MasterLayout>

    </>
  );
};

export default DepositTablePage; 
