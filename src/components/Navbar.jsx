import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
background-color: black;
height: 60px;

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`
const Input = styled.input`
border: none;
flex:8;
`;

const Center = styled.div`
flex:1;
text-align: center;
`;

const Logo = styled.h1`
color: white;
font-weight:bold;
`
const image = styled.h1`
color: white;
font-weight:bold;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
color: orange;
font-size: 14px;
cursor:pointer;
margin-left: 25px;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            {/* search bar ya navbar 
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>
               <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
        </Left>*/}
{/* logo component  */}
        <Center>
        <Logo>BeeMa Pay</Logo>
        </Center>

{/* cart na reg na signin */}
        <Right>

         <MenuItem>Home</MenuItem>
         <MenuItem>Products</MenuItem>
         <MenuItem>About BeeMapay</MenuItem>
         <MenuItem>Contact Us</MenuItem>
        {/* <MenuItem>
         <Badge badgeContent={4} color="primary">
         <ShoppingCartOutlined/>
         </Badge>
         </MenuItem> */}
      </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar
