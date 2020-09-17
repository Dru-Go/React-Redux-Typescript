import styled from 'styled-components';
import colors from '../../utils/colors';
export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 25em;
  overflow: hidden; 
  outline: 0;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
  overflow: hidden; 
`;
export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
  overflow: hidden; 
`;
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-around;
  padding: 0.3rem;
`;
export const HeaderText = styled.div`
  color: #fff;
  text-align: center;
  align-self: center;
  width: 85%;
  text-transform: uppercase;
  color: ${colors.neutral_400};
`;
export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
  outline: none;
`;
export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: hidden;
`;