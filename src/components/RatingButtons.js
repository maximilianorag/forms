import React from 'react'
import {useField} from 'formik'
import styled from 'styled-components'

const ContentContainer = styled.div`
display: flex;

width: 600px;
margin-top: 50px;
`
const ErrorMsg = styled.div`
font-size: 26px;
color:red;
`
const Container = styled.div`
display: flex;
flex-direction: column;
flex: 1;
height: 100%;
align-items: center;

`

const Label = styled.label`
font-size: 24px;
`

const Button = styled.button`
width:40px
`

const RatingButtons = ({label, ...props}) => {
const [field,meta,helpers] = useField(props.name);
const {value} = meta;
const {setValue} = helpers;

return(
<Container>
<Label htmlFor={props.id || props.name}>{label}</Label>
<ContentContainer name={props.name}>
<Button onClick={()=> setValue(1)} isSelected={value===1} > 1</Button>
<Button onClick={()=> setValue(2)} isSelected={value===2} > 2</Button>
<Button onClick={()=> setValue(3)} isSelected={value===3} > 3</Button>
<Button onClick={()=> setValue(4)} isSelected={value===4} > 4</Button>
<Button onClick={()=> setValue(5)} isSelected={value===5} > 5</Button>
</ContentContainer>

</Container>

)


}

export default RatingButtons