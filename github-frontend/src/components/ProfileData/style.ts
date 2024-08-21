import styled , {css} from 'styled-components';
import{RiBuilding4Line, RiMapPin2Line,RiMailLine, RiLinksLine} from 'react-icons/ri';
import { GoPeople } from "react-icons/go"

export const Container = styled.div`
 .line{
        display: flex;
        width: 100%;
        border-bottom: 1px solid var(--border);
        margin-top:20px ;
        background: var(--primary);
    }
`;

export const Flex= styled.div`
    display:flex;
    align-items:center;
    margin-top: 24px;

    >div{
        margin-left:24px;

        >h1{
            font-size: 24px;
            line-height: 1;
            color: var(--gray-dark);
            font-weight: 600;
        }
        >h2{
            font-size: 20px;
            color: var(--username);
            font-weight: 300;
        }
    }

    @media (min-width: 768px){
        flex-direction: column;
        align-items: flex-start;

        >div{
            margin-left: 0;
            margin-top: 16px;
        }
    }
`;

export const Avatar= styled.img`
    width: 18%;
    border-radius: 50%;

    @media (min-width: 768px){
        width: 100%;
        margin-top: 16px;
    }
`;

export const Row= styled.ul`
    display: flex;
    align-items: center;    
    flex-wrap: wrap;
    margin: 18px 0;
    width: 100%;
    
    >li{
        display: flex;
        align-items: center;
        justify-content: flex-start;

        >sapn{
            font-size: 14px;
            color: var(--gray);
        }
        >*{
            margin-right: 5px;
        }
    }
     
    &.desktop{
        display: none;

        @media (min-width:768px){
            display: flex;
        }
    }

    &.mobile{
        @media (min-width:768px){
            display: none;
        }
    }

`;

const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--icon); //cor
    flex-shrink:0;
`;

export const PeopleIcon= styled(GoPeople)`${iconCSS}`;

export const Column= styled.ul`
margin-top: 16px;
    li{
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    li + Li{
        margin-top: 8px;
    }

    span{
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;


export const CompanyIcon= styled(RiBuilding4Line)`${iconCSS}`;

export const LocationIcon= styled(RiMapPin2Line)`${iconCSS}`;

export const EmailIcon= styled(RiMailLine)`${iconCSS}`;

export const BlogIcon= styled(RiLinksLine)`${iconCSS}`;

export const Bio = styled.div`
    align-items: center;
    display: flex;

    p{
        margin:16px auto;
    }

    @media (min-widht:768px){
        display: none;
    }
`;

export const Button = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 16px;;

    button{
        width: 100%;
        color:var(--btnFont);
        background-color: var(--btnBack);
        border: 1px solid var(--btnBorder);
        box-shadow: var(--btnShadow);
        transition: 80ms;
        transition-property: color, background-color, box-shadow, border-color;
        border-radius: 6px;
        padding: 6px;
        font-size: 14px;
        font-weight: 500;
    }

    button:hover{
        background-color: var(--btnHover);
    }

    &.desktop{
        display: none;

        @media (min-width:768px){
            display: block;
        }
    }

    &.mobile{
        @media (min-width:768px){
            display: none;
        }
    }
`;