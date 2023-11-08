import styled, { css } from 'styled-components';

export const StyledSwitcher = styled.div.withConfig({
  shouldForwardProp: (prop: unknown) => prop !== 'isSelected',
})<{ isSelected?: boolean }>`
  position: relative;
  height: 26px;
  width: 44px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid;
    box-sizing: border-box;
    transition: transform 300ms ease-in-out;
  }

  &:before {
    left: 0;
    background-color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  &:after {
    right: 0;
    border-color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      &:before {
        transform: translateX(18px);
        background-color: transparent;
        border-color: ${({ theme }) => theme.colors.primaryTextColor};
      }

      &:after {
        transform: translateX(-18px);
        background-color: ${({ theme }) => theme.colors.primaryTextColor};
      }
    `}
`;
