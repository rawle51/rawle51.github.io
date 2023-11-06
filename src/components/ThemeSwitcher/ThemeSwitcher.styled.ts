import styled, { css } from 'styled-components';

export const StyledSwitcher = styled.div.withConfig({
  shouldForwardProp: (prop: unknown) => prop !== 'isSelected',
})<{ isSelected?: boolean }>`
  position: relative;
  height: 32px;
  width: 72px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 10px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  &:after {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryTextColor};
    transition: transform 300ms ease-in-out;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      &:after {
        transform: translateX(40px);
      }
    `}
`;
