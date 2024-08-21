import React, {useState} from 'react'; 
import {useNavigate} from 'react-router-dom';

import { Container, GithubLogo, SearchForm ,Menu,SearchIcon, MenuHambIcon, } from './styles';
import { ThemeName } from '../../styles/themes';


interface Props{
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({themeName, setThemeName}) => {
  const [search,setSearch] = useState(''); 
  const navigate = useNavigate(); 

    function handleSubmit(event: React.FormEvent){
      event.preventDefault(); 

      navigate('/' + search.trim()) ;  
    }
   
    function toggleTheme(){
      setThemeName(themeName === 'light' ? 'dark' :'light');
    }
  return (
    <Container>
      
      <MenuHambIcon/>
      
      <GithubLogo onClick={toggleTheme}/>

      <Menu>
        <SearchForm onSubmit={handleSubmit}>
          <span><SearchIcon/></span>
          <input placeholder=" Enter Username "
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          />
          <span className='Slash'>/</span>
         </SearchForm>
        
        <button className='btn-in'>Sign In</button>
        
          <button className='btn-up'>Sign Up</button>        
      </Menu>

      
    </Container>
  );
}

export default Header;


