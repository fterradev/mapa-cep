import React, { PureComponent } from 'react';

class LoadingImage extends PureComponent {
  state = {
    loadedSrc: undefined
  };

  render() {
    const { src, onLoad, loadingElement, ...restProps } = this.props;
    const { loadedSrc } = this.state;
    return (
      <div>
        {loadedSrc !== src && loadingElement}
        <img
          alt="map"
          src={src}
          {...restProps}
          onLoad={() =>
            this.setState({
              loadedSrc: src
            })
          }
          style={{ display: loadedSrc === src ? 'inline' : 'none' }}
        />
      </div>
    );
  }
}

export default LoadingImage;
