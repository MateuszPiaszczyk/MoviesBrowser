import styled from "styled-components";

export const Wrapper = styled.div`
display: inline-flex;
  gap: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 40px 0 103px 0;
`;

export const Button = styled.button`
display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.lightHeather};
  color: ${({ theme }) => theme.colors.mine};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    filter: brightness(105%);
    transform: scale(1.01);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.mystic};
    color: ${({ theme }) => theme.colors.woodsmoke};
    cursor: default;
    &:hover {
      filter: none;
    }
  }
`;

export const ButtonText = styled.span`
  display: block;
`;

export const Text = styled.span`
  align-self: center;
  color: ${({ theme }) => theme.colors.waterloo};
`;

export const PageText = styled.span`
  align-self: center;
  font-weight: 600;
`;