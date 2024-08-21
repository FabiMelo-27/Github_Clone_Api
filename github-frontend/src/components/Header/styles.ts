import styled , {css} from 'styled-components';
import {FaGithub} from 'react-icons/fa';
import {RiSearchLine, RiMenuFill} from 'react-icons/ri'

export const Container = styled.div`
    background: var(--header);
    padding: 11px  16px ;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr ;
    display:grid;
    

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr 10fr;
    }
`;


export const GithubLogo = styled(FaGithub)`
    fill: var(--logo);
    width:32px;
    height:32px;
    flex-shrink: 0;     
    cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (min-widht:768px){
    margin-left: 0;
  }
`;

export const SearchForm = styled.form`
    padding-left: 16px;
    width: 80%;
    border: 2px solid var(--ticker);    
    border-radius: 6px;
        
    input{
        outline: none;
        background: transparent;        
        border-radius: 6px;
        padding: 7px ;
        width:50%;        
        color: var(--logo);

        &:focus{           
            color: var(--logo);
           border: none;
        }
        transition: widdth .2s ease-out, color .2s ease-out;
    }

    span{
            width: 20px;
            height: 16px;
            color: var(--icon); 
            flex-shrink:0;
            padding: 3px;
            margin: 0 auto;
       }

    .Slash{       
        margin-left: 6rem;        
    }
    
    @media (max-width: 768px) {       
        width: 30%;

        input::placeholder{
            color:transparent;
        }

        .Slash{
            display:none;
        }
    } 
`;

export const Menu = styled.div`
    display: flex !important;
      
    button{
        color: var(--logo);
        width: 100%;
        margin: 0 16px;
        font-size: 14px;
        border-radius: 7px;
        border:2px solid var(--ticker) ;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }

    button:hover {
    color: var(--gray);    
    border: 1px solid var(--gray); 
       
    }

    .btn-in{
            width: 100%;
            font-size: 14px;
            padding: 5px;
            border: none;
            
        }

    .btn-in:hover{
        border: none;
    }

    .btn-up{
        display:none;
    }

    @media(min-width:768px){
        display: flex !important;
        color: var(-primary); 
       flex-wrap: 1fr  ;
        width: 100%;
        justify-content: space-between;
        padding: 10px;
        
        button{
            width: 25%;
        }

        .btn-in{
            width: 25%;
        }

        .btn-up{
        display:block;
        }
    }

    @media (max-width: 768px) {
        display: felx;
        flex-direction: row;
        width: 100%;
        margin-left: 16px;
        justify-content: flex-end;

        .btn-in{
            width: 20%;
            padding: 3px;
        }        
    }   
`;

const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--icon); 
    flex-shrink:0;
`;

export const SearchIcon=styled(RiSearchLine)`${iconCSS}`;

export const MenuHambIcon=styled(RiMenuFill)`
    fill: var(--primary);
    width: 20px;
    height: 20px;
    display:block ;

    @media (min-width:768px){
       display: none;
    }
`;