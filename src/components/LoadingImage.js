import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class LoadingImage extends PureComponent {
  state = {
    loadedSrc: undefined
  };

  render() {
    const { src, onLoad, loadingElement, style, ...restProps } = this.props;
    const { loadedSrc } = this.state;
    return (
      <div>
        {loadedSrc !== src && loadingElement}
        <img
          alt="map"
          src={src}
          {...restProps}
          onLoad={e => {
            this.setState({
              loadedSrc: src
            });
            if (onLoad) onLoad(e);
          }}
          style={{
            ...style,
            display: loadedSrc === src ? 'inline' : 'none'
          }}
        />
      </div>
    );
  }
}

LoadingImage.propTypes = {
  src: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
  loadingElement: PropTypes.element.isRequired
};

export default LoadingImage;
