const getUsername = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector(".form") as HTMLFormElement;
const main_Container = document.querySelector(".main_container") as HTMLElement; // Fixed typo in class name

interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  location: string;
  url: string;
}

// Reusable fetch function
async function myCustomeFetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Network response was not ok - status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

// Function to display the user card UI
const showResultUI = (singleUser: UserData) => {
  main_Container.insertAdjacentHTML(
    "beforeend",
    `<div class='card'>
      <img src="${singleUser.avatar_url}" alt="${singleUser.login}" />
      <hr />
      <div class="card-footer">
        <img src="${singleUser.avatar_url}" alt="${singleUser.login}" />
        <a href="${singleUser.url}" target="_blank">GitHub</a>
      </div>
    </div>`
  );
};

// Function to fetch user data and display results
function fetchUserData(url: string) {
  myCustomeFetcher<UserData[]>(url, {})
    .then((userInfo) => {
      for (const singleUser of userInfo) {
        showResultUI(singleUser);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
}

// Default function call
fetchUserData("https://api.github.com/users");
