import styled, { keyframes } from "styled-components";

const morph = keyframes`
    from {opacity: 0}
    to {opacity: 1}
`;

export const Container = styled.div`
    animation: ${morph} 80ms ease-in ;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const BackgroundListContainer = styled.div`
    cursor: pointer;
    &:hover {
        transform: translateY(-0.5rem);
    };
    transition: all 0.3s ease-in-out;
`;

export const Wrapper = styled.div`
    justify-content: center;
    gap: 6rem;
    display: flex;
    flex-wrap: wrap;
`;

export const SelectedImage = styled.img`
    width: 200px;
    height: 100px;
    cursor: pointer;
    &:hover {
        transform: translateY(-0.5rem);
    };
    transition: all 0.3s ease-in-out;
`;
