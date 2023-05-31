import React from 'react';

const MapComponent = () => {
  const mapContainerStyle = {
    position: 'relative',
    textAlign: 'right',
    width: '100%',
    height: '400px',
  };

  const mapCanvasStyle = {
    overflow: 'hidden',
    background: 'none',
    width: '100%',
    height: '400px',
  };

  const mapIframeStyle = {
    height: '400px',
  };

  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=lebanon,Tripoli,jabal mohsen&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={mapIframeStyle}
        ></iframe>
        <a href="https://capcuttemplate.org/">Capcut Templates</a>
      </div>
    </div>
  );
};

export default MapComponent;