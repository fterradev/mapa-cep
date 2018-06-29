import React, { PureComponent } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import { lookupLocation } from '../helper';

class LocationLookup extends PureComponent {
  state = {
    location: null,
    cep: '13480686',
    resultPanelIsOpen: false,
    errorMsg: null
  };

  findLocation = () => {
    lookupLocation(this.state.cep)
      .then(location =>
        this.setState({
          location,
          resultPanelIsOpen: true,
          errorMsg: null
        })
      )
      .catch(reason =>
        this.setState({
          errorMsg: reason,
          location: null,
          resultPanelIsOpen: true
        })
      );
  };

  componentDidMount() {
    this.findLocation();
  }

  render() {
    const { cep, location, errorMsg, resultPanelIsOpen } = this.state;
    const { renderResult } = this.props;
    return (
      <div>
        <Segment>
          <Header as="h3">Consultar</Header>
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
        {(resultPanelIsOpen && (
          <Segment>
            <Button
              icon="close"
              floated="right"
              onClick={() =>
                this.setState({
                  resultPanelIsOpen: false
                })
              }
            />
            {location && renderResult(location)}
            {errorMsg ? errorMsg : ''}
          </Segment>
        )) ||
          null}
      </div>
    );
  }
}

export default LocationLookup;
