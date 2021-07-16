import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
`;
const Title = styled.h1`
  white-space: pre-line;
`;

const Label = styled.label`
    margin-top:20px:
    font-size:24px;
    `;
const EmailInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const PassWordInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;
const CheckBoxLabel = styled(Label)`
  margin-top: 7px;
  margin-left: 10px;
`;
const RememberMeCheckbox = styled.input`
  margin-top: 10px;
`;
const SubmitButton = styled.input`
    height:40px;
    width:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    border; 2px solid #666666
    border-radius:4px
    cursor:pointer
    margin-top:40px;
    `;

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", rememberMe: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleRemembermeChange = this.handleRemembermeChange.bind(this);
  }

  handleEmailInputChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordInputChange(e) {
    this.setState({ password: e.target.value });
  }
  handleRemembermeChange(e) {
    this.setState({ rememberMe: !this.state.rememberMe });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>Sign in</Title>

          <Form onSubmit={this.handleSubmit}>
            <Label>Email</Label>
            <EmailInput
              type="email"
              value={this.state.email}
              onChange={this.handleEmailInputChange}
            />
            <Label>Password</Label>
            <PassWordInput
              type={"password"}
              value={this.state.password}
              onChange={this.handlePasswordInputChange}
            />
            <CheckboxContainer>
              <RememberMeCheckbox
                type="checkbox"
                checked={this.state.rememberMe}
                onChange={this.handleRemembermeChange}
              />
              <CheckBoxLabel>Remember me</CheckBoxLabel>
            </CheckboxContainer>
            <SubmitButton type={"Submit"} />
          </Form>
        </ContentContainer>
      </Container>
    );
  }
}

export default SignInComponent;
