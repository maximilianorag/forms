import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import EmailFieldComp from "./EmailFieldComp";
import RatingButtons from "./RatingButtons";
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
const InputField = styled.input``;

const reusableFormkSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("E-mail cannot be empty"),
  projectName: yup.string().required("project name is required"),
  rating: yup.string().required("project name is required"),
});
//valida el email del usuario viendo que no este empty y que el parametro es requerido

//en este shcema vemos el test method que establece que ningun password este corto ni muy corto
class ReusableForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, actions, isSubmitting) {
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

  //cuando se evoca runs the validateSync method asegurando que el input es validado con las propiedades que se le dieron
  // si el schema no se cumple, suelta un error q lo agarramos con catch, lo extraemos y lo retornamos asegurando que el error se va a mostrar
  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>{"Create Invoice"}</Title>

          <Formik
            validateOnBlur={true}
            validateOnChange={true}
            validateOnMount={false}
            initialValues={{
              email: "",
              projectName: "",
              billedAmount: "",
              rating: "",
            }}
            onSubmit={this.handleSubmit}
            // validate={this.handleValidation}
            validationSchema={reusableFormkSchema}
          >
            {(props) => (
              <SignUpForm>
                <EmailFieldComp
                  name="email"
                  type="email"
                  label="Client's Email"
                  //name y type set, no tiene onchange o algun callback, para mostrar
                  // in
                />

                <EmailFieldComp
                  name="projectName"
                  label="project Name"
                  type="text"
                />
                <RatingButtons name="rating" label="project Rating" />

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

export default ReusableForm;
