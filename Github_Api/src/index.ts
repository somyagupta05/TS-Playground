const getUsername=document.querySelector("#user") as HTMLInputElement;
const formSubmit=document.querySelector(".form") as HTMLFormElement;
const main_Container=document.querySelector(".main_conatiner") as HTMLElement;

interface UserData{
  id:number;
  login:string;
  avatar_url:string;
  location:string;
  url:string
}


// reusable fun
function myCustomeFetcher(url:string,options?:RequestInit):Promise<T> {}
function fetchUserData(url:string){
  myCustomeFetcher<UserData[]>(url,{});
}
// default fun call
fetchUserData("https://api.github.com/users")