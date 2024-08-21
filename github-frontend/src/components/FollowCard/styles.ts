import styled , {css} from 'styled-components';
import { RiStarLine} from 'react-icons/ri';
import { GoLocation } from "react-icons/go";
import { FaBuilding } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid var(--border);
    border-radius: 6px;   
    margin-right: 0;
    background: var(--primary);

  `;  

export const TopSide = styled.div`
    width: 10%;
    margin-right:0;
    >header{
        display: flex;
        align-items: center;
        justify-content: row;

        >img{
            width: 75%;            
            border-radius: 50%;
        }

        >a{
            margin-left: 8px;
            font-size: 14px;
            font-weight: 600;
            color: var(--link);
            text-decoration: none;

            &:focus,
            &:hover{
                text-decoration: underline;
            }
        }

        @media (min-width:768px){
            img{
                width: 90%;
            }
        }
    }

    >p{
        margin: 8px 0 16px;
        font-size: 12px;
        color: var(--gray);
        letter-spacing: 0.1px;
    }
`;


export const Botside = styled.div`   
    width: 80%;  
    margin-left : 16px;
    
`;

export const Perfil = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 0;
    

    > ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    > ul > li {
        margin: 0;
        display: flex; 
        align-items: baseline;
    }

    
    .main-link {
        text-decoration: none; 
        color: var(--nameFol); 
        font-size: 16px;
        margin-right: 10px; 
        font-weight: 500;

        @media (min-width: 768px) {
            font-size: 20px;
        }
    }

    
    .main-link:hover {
        color: var(--link); 
    }

  
    .username-span {
        font-size: 0.9rem; 
        color: var(--gray); 
        text-align:end;
        display: inline;
    }

    
    .username-span a {
        text-decoration: none;
        color: inherit; 
    }

    .username-span a:hover {
        color: var(--link); 
    }

   
    > ul > li:last-of-type {
        margin-top: 2px;
        font-size: 0.9em; 
        color: var(--username); 
    }
`;


export const Dados=styled.div` 

ul {
  display: flex; 
  list-style: none; 
  padding: 0; 
  margin: 10px 0 0 0; 
}

li {
  display: flex; 
  align-items: center; 
  margin-right: 20px; 
  font-size: 12px;

  >span{
    margin-left: 5px;
  }
}


li:last-child {
  margin-right: 0;
}
`;

const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--icon);
    flex-shrink: 0;
`;

export const LocatIcon = styled(GoLocation)`
    ${iconCSS}
`;

export const StarIcon = styled(RiStarLine)`
    ${iconCSS}
`;

export const OrganIcon = styled(FaBuilding)`
    ${iconCSS}
`;

export const Button = styled.div`
    width: 20%;
    display: flex;
    align-items: flex-start;
    justify-content:center ;

    button{
    background-color:var(--btnBack);
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 12px;
    color: var(--btnFont);
    box-shadow: var()--btnShadow;
    }

    button:hover{
        background-color: var(--btnHover);
    }

`;

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
`;

