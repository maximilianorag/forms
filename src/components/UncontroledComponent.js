import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const UnForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 100px;
`;

class UncontroledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.input = React.createRef();
  }
  submit(event) {
    event.preventDefault();
    console.log(this.input);
    console.log(this.input.current.value);
    alert("submited! check the console");
  }
  render() {
    return (
      <Container>
        <UnForm onSubmit={this.submit}>
          <input type="text" ref={this.input} />
          <input type="submit" value="Submit" />
        </UnForm>
      </Container>
    );
  }
}

export default UncontroledComponent;
