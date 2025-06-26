//

let input = document.querySelector(".input");
let button = document.querySelector(".button");
let card = document.querySelector(".data-show");
function getuser(username){




    return fetch(`https://api.github.com/users/${username}`)
    .then(raw => {
        if(!raw.ok) throw new Error( "user not found");
        return raw.json();
    })

}
function getRepo(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then(raw => {
        if(!raw.ok) throw new Error("Repos not found");
        return raw.json();
    })
}

function decorateProfileData(details){
    console.log(details);
    let data = ` <div class="img">
                <img src="${details.avatar_url}" alt="">
            </div>
            <div class="data">
                <div class="head">
                <h2>${details.name}</h2>
                <p>@${details.login}</p>
                <p>${details.bio}</p>
                </div>
                
                <div class="num-details">
                    <p>Public Repo : ${details.piblic_repos}</p>
                    <p>Followers : ${details.followers}</p>
                    <p>following : ${details.following}</p>
                </div>

                <div class="location">
                    <p>location :${details.location}</p>
                    <p>Company :${details.company}</p>
                    <p>Blog :${details.blog}</p>
                </div>
            </div>`

            card.innerHTML = data;
}


button.addEventListener("click",()=>{
    let username = input.value.trim();
    if(username.length > 0){
       getuser(username).then(data =>{
            decorateProfileData(data);
})

    }else{
        alert("enter username");
    }
})

























// getRepo("mern-ish").then(data =>{
//     console.log(data);
// })