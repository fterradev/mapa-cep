import React, { PureComponent } from 'react';
import { Segment, Header, Form, Button, Input } from 'semantic-ui-react';
import { lookupAddress } from '../helper';

class AddressLookup extends PureComponent {
  inputCep = React.createRef();
  
  state = {
    address: null,
    cep: '',
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
    //this.findLocation();
    this.inputCep.current.focus();
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
              <Form.Field inline>
                <label>CEP</label>
                <Input
                  type="text"
                  ref={this.inputCep}
                  onChange={e =>
                    this.setState({
                      cep: e.target.value
                    })
                  }
                  value={cep}
                />
              </Form.Field>
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
