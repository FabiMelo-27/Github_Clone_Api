import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 25px 25px 32px 25px;
  background: var(--primary);
`;

export const Line = styled.div`
  max-width: 1280px;
  width: 100%;
  border-top: 1px solid var(--border);
  background: var(--primary);   
`;

export const GithubLogo = styled(FaGithub)`
    margin-top: -5px;
    fill: var(--border);
    width: 24px;
    height: 24px;
    flex-shrink: 0;

    &:hover{
      fill: var(--gray-light);
    }
`;

export const ListLink=styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; 
  list-style: none;
  padding: 0;
  margin-top: 3rem;
  text-align: center;

  li{
    cursor: pointer;
    font-size: 10px;
    color: var(--gray-light);
  }

  li:hover{
    text-decoration: underline;
    color: var(--link);
  }

`;

