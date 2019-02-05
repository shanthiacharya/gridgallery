import React from 'react';
import styled from 'styled-components';
import { ProfileImage } from './ProfileImage';

const UserGridStyled = styled.div `
    display:grid;
    margin-top:80px;
    margin-bottom:20px;
    justify-content:center;
    grid-template-areas: "photo name"
                         "photo label"
                         "photo description"

`
const Photo = styled.div `
    grid-area:photo;

`
const Name = styled.div `
    grid-area:name;
    font-size:35px;
`
const Label = styled.div `
    grid-area:label;

`
const Description = styled.div `
    grid-area:description;
    max-width:400px;
`


export default function(){
    return (
    < UserGridStyled>
    <Photo><ProfileImage/> </Photo>
    <Name>Name</Name>
    <Label><strong> 400 </strong>Followers</Label>
    <Description>Roof party skateboard hexagon, schlitz disrupt irony pitchfork. Actually craft beer brunch, food truck pour-over man bun flexitarian. Gluten-free fashion axe lo-fi echo park man braid intelligentsia master cleanse helvetica biodiesel ethical meditation asymmetrical irony cred. Tote bag put a bird on it beard cray freegan selfies iPhone stumptown 8-bit ugh aesthetic street art lumbersexual 3 wolf moon palo santo.</Description>
    </ UserGridStyled>
    )
}