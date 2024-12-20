import React from "react";
import { Icon } from "@iconify/react";
import { useMemory } from "../../services/memoryServices";
const UnitCountOne = () => {
  const { getAllData } = useMemory();
  return (
    <div className="row row-cols-xxxl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
      <div className="col">
        <div className="card shadow-none border bg-gradient-start-1 h-100">
          <div className="card-body p-20">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div>
                <p className="fw-medium text-primary-light mb-1">Welcome !</p>
                <h6 className="mb-0">{getAllData("ud")?.user_first_name} {getAllData("ud")?.user_last_name}</h6>
              </div>
              <div className="w-50-px h-50-px bg-cyan rounded-circle d-flex justify-content-center align-items-center">
                <Icon
                  icon="gridicons:multiple-users"
                  className="text-white text-2xl mb-0"
                />
              </div>
            </div>
            <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
              <i style={{ fontStyle: "italic" }}>Our valued user</i>
            </p>
          </div>
        </div>
        {/* card end */}
      </div>
      <div className="col">
        <div className="card shadow-none border bg-gradient-start-2 h-100">
          <div className="card-body p-20">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div>
                <p className="fw-medium text-primary-light mb-1">
                  Total Balance
                </p>
                <h6 className="mb-0">&#8358; {getAllData("ud")?.user_account_balance
                }</h6>
              </div>
              <div className="w-50-px h-50-px bg-purple rounded-circle d-flex justify-content-center align-items-center">
                <Icon
                  icon="fluent:money-hand-24-filled"
                  className="text-white text-2xl mb-0"
                />
              </div>
            </div>
            <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
              <span className="d-inline-flex align-items-center gap-1 text-success-main">
                <Icon icon="bxs:up-arrow" className="text-xs" /> +0:00
              </span>
              <i style={{ fontStyle: "italic" }}>Current Balance</i>
              
            </p>
          </div>
        </div>
        {/* card end */}
      </div>
      <div className="col">
        <div className="card shadow-none border bg-gradient-start-3 h-100">
          <div className="card-body p-20">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div>
                <p className="fw-medium text-primary-light mb-1">Withdrawal</p>
                <h6 className="mb-0">&#8358; 0:00</h6>
              </div>
              <div className="w-50-px h-50-px bg-info rounded-circle d-flex justify-content-center align-items-center">
                <Icon
                  icon="fluent:money-hand-24-filled"
                  className="text-white text-2xl mb-0"
                />
              </div>
            </div>
            <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
              <span className="d-inline-flex align-items-center gap-1 text-danger-main">
                <Icon icon="bxs:down-arrow" className="text-xs" /> -0:00
              </span>
              Perform withdrawal
            </p>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
};

export default UnitCountOne;
