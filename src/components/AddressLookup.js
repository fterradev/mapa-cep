import React, { PureComponent } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import { lookupAddress } from '../helper';

class AddressLookup extends PureComponent {
  state = {
    address: null,
    cep: '13480686',
    resultPanelIsOpen: false,
    errorMsg: null
  };

  findLocation = () => {
    lookupAddress(this.state.cep)
      .then(address =>
        this.setState({
          address,
          resultPanelIsOpen: true,
          errorMsg: null
        })
      )
      .catch(reason =>
        this.setState({
          errorMsg: reason,
          address: null,
          resultPanelIsOpen: true
        })
      );
  };

  componentDidMount() {
    this.findLocation();
  }

  render() {
    const { cep, address, errorMsg, resultPanelIsOpen } = this.state;
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
            {address && renderResult(address)}
            {errorMsg ? errorMsg : ''}
          </Segment>
        )) ||
          null}
      </div>
    );
  }
}

export default AddressLookup;
