const socialMediaLinks = {
  github: 'NatOliveira-98',
  youtube: '',
  instagram: 'natoliveira_98',
  facebook: '',
  twitter: ''
};

function newSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://www.${social}.com/${socialMediaLinks[social]}`;
  }
}

newSocialMedia();

// GitHub data
function getGitHubProfileInfo() {
  // github link
  const url = `https://api.github.com/users/${socialMediaLinks.github}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector('#avatar').src = data.avatar_url;
      document.querySelector('h2').textContent = data.name;
      document.querySelector('.github').href = data.html_url;
      document.querySelector('p.github').textContent = data.login;
      document.querySelector('.about p').textContent = data.bio;
    });
}

getGitHubProfileInfo();
