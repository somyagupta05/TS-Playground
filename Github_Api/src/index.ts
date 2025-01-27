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
async function myCustomeFetcher(url:string,options?:RequestInit):Promise<T> {
  const response=await fetch(url,options);
  if(!response.ok){
    throw new Error(
      `Netwotk response was not ok -status: ${response.status}`
    )
  }
  const data=response.json()
  return data;
}
function fetchUserData(url:string){
  myCustomeFetcher<UserData[]>(url,{});
}
// default fun call
fetchUserData("https://api.github.com/users")