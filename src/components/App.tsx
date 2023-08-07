import React, { useEffect } from 'react';
import AppShell from './AppShell';
import MapComponent from './MapComponent';
import RegionInfo from './RegionInfo';

function App() {
  useEffect(() => {
    const resizeTimeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);

    return () => {
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <AppShell>
      <MapComponent />
      <RegionInfo />
    </AppShell>
  );
}

export default App;
