import React from "react"
import styled from "styled-components"

import { DISPLAY_DATE, ALIGNMENT, DEFAULT_ALIGN } from "../utils";

import "./reset.css";
import bg from '../static/sass.jpg';
import svg from '../static/saas-logo.svg';

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Background = styled(Layer)`
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:before, &:after {
    content: ' ';
    display: table;
  }
`;

const Effect1 = styled(Layer)`
  background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%);
`;
const Effect2 = styled(Layer)`
  backdrop-filter: blur(3px);
  background-color: rgba(67, 70, 222, 0.65);
`;

const Content = styled(Layer)`
  display: flex;
  flex-direction: ${props => props.invert ? "column-reverse" : "column"};
  justify-content: ${props => ALIGNMENT(props.alignment.y)};
  align-items: ${props => ALIGNMENT(props.alignment.x)};
  padding: 40px;
`;

const Epigraph = styled.h3`
  font-family: 'Roboto', Arial;
  letter-spacing: 3px;
  color: #f6d365;
  text-transform: uppercase;
  margin: 0;
  font-weight: 600;
  padding: 0 0 5px;
  font-size: 1.8rem;
`
const H1 = styled.h1`
  font-family: 'Roboto', Arial;
  color: #fff;
  margin: 10px 0;
  margin-top: 15px;
  font-size: 4rem;
  line-height: 4rem;
`;
const HR = styled.hr`
  width: 100%;
  border-bottom: 1px solid #ccc;
`;
const Info = styled.p`
  font-family: 'Roboto', Arial;
  color: #fff;
  text-transform: uppercase;
  font-size: .9rem;
  padding: 15px 0;
  margin: 0;
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`
const Logo = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  filter: brightness(0) invert(1);
`

// Make sure to default export a React component
export default function Hello({variables}) {
  const {
    title,
    tag,
    date,
    align,
    img = bg,
    logo = svg,
    invert = 0,
    inverted = invert, // alias
    blur = 0,
    blurred = blur, // alias
  } = variables;

  const dt = DISPLAY_DATE(date);

  return (
    <>
      <Background src={img} />
      {Number(blurred) ? <Effect2 /> : <Effect1 /> }
      <Layer>
        <Content invert={Boolean(Number(inverted))} alignment={{ ...DEFAULT_ALIGN, ...align}} >
          {logo && (
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
          )}
          {tag && <Epigraph>{tag}</Epigraph>}
          {title && <H1>{title}</H1>}
          {dt && <HR />}
          {dt && <Info>{dt}</Info>}
        </Content>
      </Layer>
    </>
  )
}
