import React, { useEffect, useState } from 'react';
import {  Col } from 'react-bootstrap'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import MeuModal from '../Modal/Modal';


import { Container, Flex, Avatar, Row, PeopleIcon, Column,CompanyIcon, LocationIcon, BlogIcon,EmailIcon, Bio, Button} from './style';


interface Props{
    username:string;
    name:string;
    avatarUrl: string;
    followers: number;
    following: number;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
    login?: string;   
    bio?: string;    
}

const ProfileData: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
    bio,
}) => {

    const [showModal, setShowModal] = useState(true);

    const handleClose = () => setShowModal(false);
  
    useEffect(() => {
      
      setShowModal(true);
    }, []);

  return (
    <Container>

      <MeuModal show={showModal} handleClose={handleClose} bio={bio} />
      
        <Flex>
            <Avatar src={avatarUrl} alt={username}/>

            <div>
                <h1>{name}</h1>
                <h2>{username}</h2>
            </div>
        </Flex>

        <Button className='desktop' >
            <button>Unfolllow</button>
        </Button>

        <Bio>
        {bio &&(              
            <p>{bio}</p>
 
            )}
        </Bio>

        <Row className='desktop'>
            <li>
                <PeopleIcon/>
                <b>{followers}</b>
                <span> followers</span>
                <span>·</span>
            </li>
            <li>
               <b>{following}</b>
               <span> following</span>
            </li>            
        </Row>
        

        <Column>       
            {company &&(
                <li> <CompanyIcon/><span>{company}</span> </li>
            )}
            {location &&(
                <li> <LocationIcon/> <span>{location}</span> </li>
            )}
            {email &&(
                <li> <EmailIcon/> <span>{email}</span> </li>
            )}
            {blog &&(
                <li> <BlogIcon/>  <span>{blog}</span>  </li>
            )}
        </Column>

        <Row className='mobile'>
            <li>
                <PeopleIcon/>
                <b>{followers}</b>
                <span> followers</span>
                <span>·</span>
            </li>
            <li>
               <b>{following}</b>
               <span> following</span>
            </li>            
        </Row>
        
        <Button className='mobile' >
            <button>Unfolllow</button>
        </Button>

        <span className='line'/>     
    </Container>
  );
}

export default ProfileData;
