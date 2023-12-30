import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.MAIN};
`;

export const ContentContainer = styled.View`
  height: 40%;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  /* background-color: pink; */
`;

export const FormContainer = styled.View`
  width: 100%;
  height: 40%;

  justify-content: space-between;
  align-items: center;

  /* background-color: red; */
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
