import styled from 'styled-components';


export const BtnSearch = styled.button`
  border: none;
  width: 100px;
  height: 44px;
  border-radius: 4px;
  background-color: lightpink;
  margin: 0 16px 0 0;
  box-shadow: 5px 5px 5px red;
  font-size: 16px;
  font-weight: 100;
  color: brown;
`;

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  background-image: radial-gradient(circle at 50% -20.71%, #a4d8ec 0, #a7d7ef 6.25%, #abd6f1 12.5%, #b0d5f3 18.75%, #b5d3f4 25%, #bbd2f4 31.25%, #c1d0f4 37.5%, #c7cff3 43.75%, #cdcdf2 50%, #d3cbf0 56.25%, #d9caed 62.5%, #dec8ea 68.75%, #e3c7e7 75%, #e8c6e3 81.25%, #ecc5df 87.5%, #efc4da 93.75%, #f2c4d6 100%);
  ;
`;

export const InputArea = styled.input`
  height: 44px;
  width: 200px;
  padding: 0 8px;
  background-color: lavender;
  border: none;
  border-radius: 4px;
  box-shadow: 5px 5px 5px teal;
  font-size: 16px;
`;