import React, { PureComponent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { lookupLocation } from '../helper';

class LocationLookup extends PureComponent {
  state = {
    location: null,
    cep: '13480686'
  };

  findLocation = () => {
    lookupLocation(this.state.cep).then(location =>
      this.setState({ location })
    );
  };

  componentDidMount() {
    this.findLocation();
  }

  render() {
    const { cep, location } = this.state;
    const { render } = this.props;
    return (
      <div>
        <Segment>
          <Form onSubmit={this.findLocation}>
            <Form.Group>
              <Form.Input
                inline
                label="CEP"
                type="text"
                onChange={e =>
                  this.setState({
                    cep: e.target.value
                  })
                }
                value={cep}
              />
              <Button type="submit">Buscar</Button>
            </Form.Group>
          </Form>
        </Segment>
        {location && render(location)}
      </div>
    );
  }
}

export default LocationLookup;
