import React from 'react'
import SalesStatisticOne from './child/SalesStatisticOne';
import UsersOverviewOne from './child/UsersOverviewOne';
import TopCountries from './child/TopCountries';
import GeneratedContent from './child/GeneratedContent';
import UnitCountOne from './child/UnitCountOne';
import CalendarMainLayer from './CalendarMainLayer';

const DashBoardLayerOne = () => {

    return (
        <>
            {/* UnitCountOne */}
            <UnitCountOne />

            <section className="row gy-4 mt-1">

                {/* SalesStatisticOne */}
                <SalesStatisticOne />

                {/* UsersOverviewOne */}
                <UsersOverviewOne />

                <CalendarMainLayer />
                
                <TopCountries />

            </section>
        </>


    )
}

export default DashBoardLayerOne