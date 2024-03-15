import styled from "styled-components";

export const MainMenuContainer = styled.nav`
    ul{
        list-style: none;
        padding: 0;
    }

    li{
        display: inline-block;
        margin-right: 10px
    }

    a{
        text-decoration: none;
        color: white;
    }

    a:hover{
        text-decoration: underline;
    }
`