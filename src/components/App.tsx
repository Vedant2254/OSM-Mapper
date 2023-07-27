import React from 'react';
import AppShell from './AppShell';
import MapComponent from './MapComponent';
import RegionInfo from './RegionInfo';

function App() {
  return (
    <>
      {/* <Button>120px to affix top</Button> */}
      <AppShell>
        <MapComponent />
        <RegionInfo />
      </AppShell>
    </>
  );
}

export default App;
