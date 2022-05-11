import styled, { css } from 'styled-components';
import { tablet, laptop, desktop } from '../constant/device_width';
import { default_placeholder_color } from '../constant/color';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: ${laptop}) {
    padding: 0;
    width: 992px;
  }

  @media (min-width: ${desktop}) {
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  ${(props) =>
    props.image
      ? css`
          background-color: white;
          background-image: url(${(props) => props.image});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        `
      : css`
          background-color: ${default_placeholder_color};
        `}
`;

const AspectRatio = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: '';
    width: 100%;
    display: block;
    padding-top: ${(props) => (1 / props.ratio) * 100}%;
  }

  > .inner {
    position: absolute;
    inset: 0;
  }
`;

const ParagraphContainer = styled.div`
  overflow: hidden;
  font-weight: bold;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lines};
  -webkit-box-orient: vertical;
`;

const QuarterFull = styled.div`
  width: 100%;
  max-width: 992px;
`;

const ItemContainer = styled.div`
  width: 100%;

  @media (min-width: ${laptop}) {
    width: 650px;
  }
`;

const Center = styled.div`
  width: 100%;
  height: ${(props) => (props.full ? '100vh' : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HalfFull = styled.div`
  width: 100%;

  @media (min-width: ${tablet}) {
    width: 50%;
  }
`;

const Flexbox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: ${(props) => `-${props.n}px 0 0 -${props.n}px`};
  width: ${(props) => `calc(100% + ${props.n}px)`};

  > * {
    margin: ${(props) => `${props.n}px 0 0 ${props.n}px`};
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0rem;

  @media (min-width: ${laptop}) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem 0;
  }
`;

const NavbarViewContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column-reverse;

  @media (min-width: ${laptop}) {
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    display: flex;
  }
`;

const PropertyContainer = styled.div`
  width: 100%;

  @media (min-width: ${tablet}) {
    width: 75%;
  }
`;

const PricingContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${laptop}) {
    min-width: 992px;
    width: 80%;
  }

  @media (min-width: ${desktop}) {
    width: 90%;
  }
`;

export default Container;
export {
  ImageContainer,
  AspectRatio,
  ParagraphContainer,
  QuarterFull,
  ItemContainer,
  Center,
  HalfFull,
  Flexbox,
  NavbarContainer,
  NavbarViewContainer,
  PropertyContainer,
  PricingContainer,
};
