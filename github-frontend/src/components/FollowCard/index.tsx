import React from 'react';
import { Link } from 'react-router-dom';
import { Container, TopSide, Avatar, Botside, Button, LocatIcon, Perfil, Dados, OrganIcon } from './styles';

interface Props {
  username: string;
  name: string;
  bio?: string;
  company?: string;
  location?: string;
  html_url: string;
  avatar_url: string;
}

const FollowCard: React.FC<Props> = ({
  username,
  name,
  bio,
  company,
  location,
  html_url,
  avatar_url
}) => {
  return (
    <Container>
      <TopSide>
        <header>
          <img src={avatar_url} alt={name} />
        </header>
      </TopSide>

      <Botside>
        <Perfil>
           <ul >
           <Link to={html_url} className="main-link">
          {name}
        </Link>
        <span className="username-span">
          <Link to={`/${username}`}>{username}</Link>
          </span>
            
            <li>
              <span>{bio}</span> {/* Bio */}
            </li>
           </ul>
        </Perfil>

        <Dados >
          <ul >
            {company && (
              <li>
                <OrganIcon /> 
                <span> {company}</span> {/* Companhia */}
              </li>
            )}
            {location && (
              <li>
                <LocatIcon />
                <span>{location}</span> {/* Local */}
              </li>
            )}
          </ul>
        </Dados>
      </Botside>

      <Button>
        <button>Follow</button>
      </Button>
      <span className='line'></span>
    </Container>

  );
}

export default FollowCard;


