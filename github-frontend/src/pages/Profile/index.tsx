
import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';

import { Container, Main, LeftSide, RightSide, Repos, RepoIcon, Tab, OverviewIcon, ProjeIcon, PackIcon, StarIcon } from './style';

import ProfileData from '../../components/ProfileData';
import FollowCard from '../../components/FollowCard';
import { APIUser, APIFollow } from '../../@types';

interface Data {
  user?: APIUser; 
  follow?: APIFollow[];
  error?: string; 
}

const Profile: React.FC = () => {
  const { username = 'FabiMelo-27' } = useParams();
  const [data, setData] = useState<Data>({});
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const token = '';
  

  useEffect(() => {
    const fetchFollowingDetails = async (following: APIFollow[]) => {
      try {
        const followDetails = await Promise.all(
          following.map(async (user) => {
            const response = await fetch(`https://api.github.com/users/${user.login}`, {
              headers: {
                'Authorization': `token ${token}`
              }
            });
            if (!response.ok) {
              throw new Error(`Failed to fetch user details for ${user.login}`);
            }
            return response.json();
          })
        );
        return followDetails;
      } catch (error) {
        console.error(error); 
        return []; 
      }
    };

    const fetchData = async () => {
      try {
        setLoading(true); 

        const [userResponse, followResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: {
              'Authorization': `token ${token}`
            }
          }),
          fetch(`https://api.github.com/users/${username}/following`, {
            headers: {
              'Authorization': `token ${token}`
            }
          }),
        ]);

        if (userResponse.status === 404) {
          setData({ error: 'User not found' });
          return;
        }

        const user = await userResponse.json();
        const following = await followResponse.json();
        const followingDetails = await fetchFollowingDetails(following);

        setData({
          user,
          follow: followingDetails,
        });
      } catch (error) {
        setData({ error: 'Failed to fetch data' });
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [username, token]);

  if (data.error) {
    return <h1>{data.error}</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!data.user || !data.follow) {
    return <h1>No data found</h1>;
  }


  const TabContent: React.FC = () => (
    <div className='content'>
      <div className='content_item'>
        <OverviewIcon />
        <span className='label'>Overview</span>
      </div>

      <div className='content_item'>
        <RepoIcon />
        <span className='label'>Repositories</span>
        <span className='number'>{data.user?.public_repos ?? 'N/A'}</span>
      </div>

      <div className='content_item'>
        <ProjeIcon />
        <span className='label'>Projects</span>      
      </div>

      <div className='content_item'>
        <PackIcon />
        <span className='label'>Packages</span>      
      </div>
      
      <div className='content_item'>
        <StarIcon />
        <span className='label'>Stars</span>
        <span className='number'>{data.user?.stargazers_count ?? 'N/A'}</span>
      </div>
    </div>
  );

  return (
    <Container>
      <Tab className='desktop'>
        <div className='wrapper'>
          <TabContent />
        </div>
        <span className='line'/>
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData 
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url} 
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
            bio={data.user.bio}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Following</h2>
            <div>
              {data.follow.map((item) => (
                <FollowCard
                  key={item.login}
                  username={item.login}
                  name={item.name || item.login}
                  avatar_url={item.avatar_url}
                  bio={item.bio}
                  company={item.company}
                  location={item.location}
                  html_url={item.html_url}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;