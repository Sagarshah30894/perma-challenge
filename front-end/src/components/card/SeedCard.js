import React from "react";


import { Sprout, StarFilled } from '@carbon/icons-react';

function SeedCard(props) {
  const seedDetails = props.seedInfo;
  console.log("seedDetails", seedDetails)

  return (
    <div className="seed-card-container" >
      {props.view === "seed" &&
        <div onClick={e=> {props.onOpenSeedModal(seedDetails)}}>
          <div className="seed-card-rank d-flex">{props.seedRanking}</div>
          <div className="seed-card-details">
            <div>Seed name</div>
            <div className="seed-card-details-container d-flex">
              <div className="seed-card-detail d-flex">
                <div className="seed-card-detail-icon">
                  {/* <Add size="24" /> */}
                  <Sprout />
                </div>
                <div className="seed-card-detail-description">xx%</div>
              </div>
              <div className="seed-card-detail d-flex">
                <div className="seed-card-detail-icon">
                  <StarFilled />
                </div>
                <div className="seed-card-detail-description">yy%</div>
              </div>
            </div>
          </div>
        </div>
      }
      {props.view === "seed details" &&
        <>
          <div className="seedDetails-card-details">
            <div className="seed-card-detail d-flex">
              <div className="seed-card-detail-icon">
                {/* <Add size="24" /> */}
                <Sprout />
              </div>
              <h4>{seedDetails[0].toUpperCase()}</h4>
            </div>
            <div className="seed-card-detail d-flex">
              <h4>
                {seedDetails[1]}
              </h4>
              <div className="seed-card-detail-description">
                {seedDetails[0] === "yield" &&
                  <p>description 1</p>
                }
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default SeedCard;