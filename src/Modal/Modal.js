import React from 'react';
import Posts from "../Posts";
import {Image} from "../App";
import styled from 'styled-components';

const ModalStyled = styled.div `
    position: absolute;
    background: #fff;
    top: 25;
    left: 10%;
    right: 10%;
    padding: 15;
    border: 2px solid #444;
`

export function Modal({ match, history }) {
    let image = Posts[parseInt(match.params.id, 10)-1];
  
    if (!image) return null;
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
       <ModalStyled>
          <h1>{image.title}</h1>
          <Image inModal index={image.id} />
          <button type="button" onClick={back}>
            Close
          </button>
          </ModalStyled>
      </div>
    );
  }
  