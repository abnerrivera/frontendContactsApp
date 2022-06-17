import { TextField } from "@mui/material";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: #040509;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

const TextFieldSearch = styled(TextField)({
  '& input': {
    color: 'white',
  },

})


export { NavContainer, TextFieldSearch }