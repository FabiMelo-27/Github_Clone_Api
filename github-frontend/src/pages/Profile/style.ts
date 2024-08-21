import styled , {css} from 'styled-components';
import {RiBookmarkLine} from 'react-icons/ri';
import { GoBook,GoPackage, GoStar, GoProject} from "react-icons/go";

export const Container = styled.div`
    --horizontalPadding: 16px;
    --verticalPadding: 24px;
    background: var(--primary);
    padding: var(--horizontalPadding) var(--verticalPadding);
    
`;

export const Main = styled.div`
    display:flex;
    flex-direction: column;
    margin:0 auto;
    max-width: 1280px;

    @media (min-width:768px){
        flex-direction: row;
    }
`; 

export const LeftSide = styled.div`
    padding: 0 var(--horizontalPadding);

    @media (min-width: 768px){
        width: 25%;
    }
`;

export const RightSide = styled.div`
    padding: 0 var(--horizontalPadding);

    @media (min-width: 768px){
        width: 75%;
    }
`;

export const Repos = styled.div`
    margin-top: var(--verticalPadding);

    > h2{
        font-size: 16px;
        font-weight: normal;
    }
    >div {
        margin-top: 8px;

        display: grid;
        grid-gap: 16px;

        grid-template-columns:1f ;

    @media (min-width: 768px){           
        grid-auto-rows: minmax(min-content,max-content);
    }
    }
`;

export const CalendarHeading = styled.span`
    font-size: 16px;
    margin: 36px 0 9px;
    display: inline-flex;

`;

export const Tab = styled.div`
    .content{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        max-width: 100%;
        padding: 14px 16px; 
    }
        
    .content_item{
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-items: flex-start;
        margin-right: 16px;
    }
    .label{
        font-size:14px ;
    padding: 0 7px;
    font-weight: 600;
    }
    .number{
        font-size: 12px;
        background: var(--ticker);
        padding: 2px 6px;
        border-radius: 24px;
    }
    
    .line{
        display: flex;
        width: 200vw;
        border-bottom: 1px solid var(--border);
        margin-left: -50vw;
    }
    
    &.desktop{
       
    @media (min-width:768px){
        display:unset;

    .content_item{
        display: flex;
        margin: 0 16px;
        align-items: center;
        justify-content: flex-start;
    }

    .wrapper{
        display: flex;
        margin: 0 auto;
        width: 100%;
    }
    }
    }
`;

const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--icon); 
    flex-shrink:0;
    margin-right: 4px;
`;
export const RepoIcon = styled(RiBookmarkLine)`${iconCSS}`;

export const OverviewIcon = styled(GoBook)`${iconCSS}`;

export const ProjeIcon = styled(GoProject)`${iconCSS}`;

export const PackIcon = styled(GoPackage)`${iconCSS}`;

export const StarIcon = styled(GoStar)`${iconCSS}`;
