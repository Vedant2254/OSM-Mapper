import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import { RegionalDatatype } from '../utils/regionalData';

export default function RegionInfo() {
  const regionalData = useSelector(
    (state: { [key: string]: any }): RegionalDatatype => state.regionalData,
  );

  console.log(regionalData);

  return (
    <div style={{
      position: 'absolute', top: '10px', right: '10px', zIndex: 999,
    }}
    >
      <Card title="Region Information" style={{ width: 300 }}>
        <p>
          <b>Currency: </b>
          {regionalData.currency}
        </p>
        <p>
          <b>Speed Unit: </b>
          {regionalData.speed_unit}

        </p>
        <p>
          <b>Distance Unit: </b>
          {regionalData.distance_unit}

        </p>
        <p>
          <b>Volume Unit: </b>
          {regionalData.volume_unit}

        </p>
        <p>
          <b>Timezones: </b>
          {regionalData.timezones}

        </p>
      </Card>
    </div>
  );
}
