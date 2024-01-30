import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  bottom: 0;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  position: absolute;
`;

export const SvgOnClick = styled.a`
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const AnimationTransition = styled.div`
  &:hover {
    transform: translateY(-0.5rem);
  };
  transition: all 0.3s ease-in-out;
`;

export const Settings = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
`;