import React, { PureComponent } from 'react';

class LocationMap extends PureComponent {
  render() {
    const { description } = this.props;
    return (
      <div>
        {description}
      </div>
    );
  }
}

export default LocationMap;
