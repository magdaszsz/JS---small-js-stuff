const githubApi = "https://api.github.com/users/"

const output = document.querySelector('.output');
const form = document.querySelector('form');
const input = document.querySelector('input');

async function getUser(user) {
  const res = await fetch(`${githubApi}${user}`);
  const userData = await res.json();
  renderUserProfile(userData)
}


function renderUserProfile(user) {
  const {login, avatar_url, location, url} = user;
  const profileHTML = `
    <div class="profile-card">
      <img src="${avatar_url}" class="profile-image">
      <ul class="profile-info">
        <li>${login}</li>
        <li>${location}</li>
        <li><a href=${url}>${url}</li>
    </div>
  `
  

  output.innerHTML = profileHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(input.value.length > 0){

        getUser(input.value);
        input.value = "";
    }
})

