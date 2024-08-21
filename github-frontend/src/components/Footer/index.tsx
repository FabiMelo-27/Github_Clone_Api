import React from 'react';
import { Container , Line, GithubLogo,ListLink} from './styles';


const Footer: React.FC = () => {
  return (
    <Container>
        <Line/>
        <ListLink>
         <li> <GithubLogo/></li>
          <li>© 2024 Github, Inc. </li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Security</li>
          <li>Status</li>
          <li>Docs</li>
          <li>Contact</li>
          <li>Manage Cookies</li>
          <li>Do not share my personal information</li>
        </ListLink>
    </Container>
)
}

export default Footer;