import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
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
const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
margin-top:20px:
font-size:24px;
`;
const EmailField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const PassWordField = styled(Field)`
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
const RememberMeCheckboxField = styled(Field)`
  margin-top: 10px;
`;
const SubmitButton = styled.input`
height:40px;
width:100px;
display;flex;
justify-content:center;
align-items:center;
border; 2px solid #666666
border-radius:4px
cursor:pointer
`;
const ErrorLabel = styled.div`
  font-size: 26px;
  color: red;
`;

const SignUpSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("E-mail cannot be empty"),
});
//valida el email del usuario viendo que no este empty y que el parametro es requerido

const PasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .test("len", "Very weak", (val) => val.length > 5)
    .test("len", "Weak", (val) => val.length > 7),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

//en este shcema vemos el test method que establece que ning    un password este corto ni muy corto
class SignUpYupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleSubmit(values, actions, isSubmitting) {
    if (values.password !== values.confirmPassword) {
      return alert("password doesn't match"), (isSubmitting = false);
    } else
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
          alert(JSON.stringify(values));
        }, 2000);
      });
  }

  //retorna una promesa y aca lo hacemos para mostrar lo que seria async, una respuesta del servidor
  // a lo que despues se despliega un alert de todos los values
  // si es sync devolveria un objeto, sino una promesa
  handleValidation(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Email can't be empty";
    }

    return errors;
  }
  //handleValidation recibe todas las values actualizadas y las mapea estableciendo
  //que la que no se cumple se genere lo que establece la fncion
  //el value que retorna de handlevalidation es un JSON object
  //para indicar un error en cualq field tenemos q agregar un entry para el objeto .
  //si retorna un obj vacio implica q todo se cumplio

  //segunda validacion
  validatePassword(value) {
    if (!value) {
      return "Password can't be empty";
    } else if (value.length < 5) {
      return "password too weak";
    }

    //agregar las validaciones que se quieran
    // en el passowrd validation se encapsulan todas las validaciones necesarias por que recive el value input field y retorna un string
    return undefined;
    //debido a que si es null is validated no va a funcionar
  }

  //schema
  validatePasswordFromSchema(value) {
    let error = undefined;
    try {
      PasswordSchema.validateSync({ password: value });
    } catch (validationError) {
      error = validationError.errors[0];
    }
    return error;
  }
  //cuando se evoca runs the validateSync method asegurando que el input es validado con las propiedades que se le dieron
  // si el schema no se cumple, suelta un error q lo agarramos con catch, lo extraemos y lo retornamos asegurando que el error se va a mostrar
  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>Sign Up</Title>

          <Formik
            validateOnBlur={true}
            validateOnChange={true}
            validateOnMount={false}
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={this.handleSubmit}
            // validate={this.handleValidation}
            validationSchema={SignUpSchema}
          >
            {(props) => (
              <SignUpForm>
                <Label> email</Label>
                <EmailField
                  name="email"
                  type="email"
                  //name y type set, no tiene onchange o algun callback, para mostrar
                  // errores aca usamos errormesagge components con el mismo name attribute
                />
                <ErrorMessage name="email">
                  {(error) => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>
                <Label>Password</Label>
                <PassWordField
                  name="password"
                  validate={this.validatePasswordFromSchema}
                  type="password"
                />
                <ErrorMessage name="password">
                  {(error) => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>
                <Label>Confirm password</Label>
                <PassWordField
                  name="confirmPassword"
                  validate={this.validatePasswordFromSchema}
                  type="password"
                />
                <ErrorMessage name="confirmPassword">
                  {(error) => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>
                <input type="file" ref={this.fileInput} />
                <SubmitButton type="submit" disabled={props.isSubmitting} />
              </SignUpForm>
            )}
          </Formik>
        </ContentContainer>
      </Container>
    );
  }
  // no se maneja mas el state en el component, autoamtico con formik
  // se removieron los callback handlers como onChange
  // solo submit y validete, sin boiler plate ni logic.
  // los initial values del formik los establecemos pero que esten vacios
  // en el form vemos email pasword y fheckbox,  sin ningun on change directamente
  // el error mesage componente tiene le mismo name atributte que email y password para que macheen
  // renderizan el error en un div
  // en el submitbutton el props.isSubmitting es un helper de formik
  //
}

export default SignUpYupComponent;
