import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { actions } from '../store/regionSlice';
import regions from '../utils/regions';

export default function FormInput() {
  const dispatch = useDispatch();
  const [region, setRegion] = useState('india');

  function handleOnChange(event: any) {
    setRegion(event.target.value);
  }

  function handleSubmit(event: { [key: string]: any }) {
    event.preventDefault();
    dispatch(actions.setRegion(region));
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <select
          onChange={handleOnChange}
          value={region}
          className="region-input"
        >
          {Object.keys(regions).map((key) => (
            <option key={Math.random()} value={key}>
              {key.replace('_', ' ')}
            </option>
          ))}
        </select>
        <Button type="primary" htmlType="submit">Load</Button>
      </form>
    </div>
  );
}
