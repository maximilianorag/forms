import React from 'react'
import styled from 'styled-components'
import {useField} from 'formik'

const Container = styled.div`
display: flex;
flex-direction: column;
width: 600px;
margin-top: 50px;

`
const Label = styled.label`
font-size: 24px;
`
const InputField = styled.input``

const ErrorMsg = styled.div`
font-size: 26px;
color:red;
`

 const EmailFieldComp = ({label,...props}) =>{

    const [field,meta] = useField(props);

    return (
        <Container>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <InputField {...field} {...props} /> 
            {meta.touched && meta.error && (<ErrorMsg>{meta.error} </ErrorMsg>)}
        </Container>
    );
}

/*emailfield aca no es oslo responsable de mostrar un inputField sino que el label, y el error mensaje. 
es completamente reusable y manteinable. haciendo directamente stylign aca se mantiene en toda la App
separamos las props de label y las pasamoos a useField
 en inputfield pasamos todas las props y field para establecer las opciones de onBlur, onSet, etc

 luego usamos el object meta para establecer si fue tocado y si tiene algun error el input para renderizar el mensaje
*/
export default EmailFieldComp