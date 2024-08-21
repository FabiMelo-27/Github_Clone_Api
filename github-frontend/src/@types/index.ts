
export interface APIUser{    
    login: string;
    name: string;
    followers: number;
    following: number;
    public_repos: number;
    avatar_url: string;
    blog?: string;
    company?: string;
    email?: string;
    location?: string;
    public_gists?: number;
    public_packages?:number;
    stargazers_count?: number;
    bio?: string;

}
export interface APIFollow{
    login: string;
    avatar_url: string;
    name?: string;
    bio?: string;
    company?: string;
    location?: string;
    html_url: string;
}