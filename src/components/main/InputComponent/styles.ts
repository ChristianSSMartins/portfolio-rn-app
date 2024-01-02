import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 80%;
  height: 45px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

  background-color: #dfe1e6;
`;
