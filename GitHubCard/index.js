/***********************************************************
  Step 1
------------------------------------------------------------
  Using axios, send a GET request to the following URL (replacing the palceholder with your Github name): <https://api.github.com/users/<your name>>.
***********************************************************/

const api = "https://api.github.com/users/"
const me = {
  "github" : {
    "login" : "jason-glassbrook",
  },
};

me["github"]["data"] = axios
  .get (`${api}${me["github"]["login"]}`)
  .then (function (re) {
    return (re.data);
  })
  .catch (function (re) {
    console.log ("--- uh-oh! ---")
  })
  .finally (function (re) {
    console.log ("--- we're done here. ---")
  });

/***********************************************************
  Step 2
------------------------------------------------------------
  Inspect and study the data coming back, this is YOUR github info! You will need to understand the structure of this data in order to use it to build your component function

  Skip to Step 3.
***********************************************************/

/***********************************************************
  Step 4
------------------------------------------------------------
  Pass the data received from Github into your function, create a new component and add it to the DOM as a child of .cards
***********************************************************/

const container = document.querySelector ("div.cards");



/***********************************************************
  Step 5
------------------------------------------------------------
  Now that you have your own card getting added to the DOM, either follow this link in your browser <https://api.github.com/users/<Your github name>/followers>, manually find some other users' github handles, or use the list found at the bottom of the page. Get at least 5 different Github usernames and add them as individual strings to the friendsArray below.

  Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
***********************************************************/

const followersArray = [];

/***********************************************************
  Step 3
------------------------------------------------------------
  Create a function that accepts a single object as its only argument, using DOM methods and properties, create a component that will return the following DOM element:

  <div class="card">
    <img class="card-image" src={image url of user} />
    <div class="card-info">
      <h3 class="name">{users name}</h3>
      <p class="username">{users user name}</p>
      <p>Location: {users location}</p>
      <p>Profile:
        <a href={address to users github page}>{address to users github page}</a>
      </p>
      <p>Followers: {users followers count}</p>
      <p>Following: {users following count}</p>
      <p>Bio: {users bio}</p>
    </div>
  </div>
***********************************************************/

function GitHubUserCard (data) {
  /// create elements ///
  const
    card            = newElem ("div"),
    cardImage       = newElem ("img"),
    cardInfo        = newElem ("div"),
    userRealName    = newElem ("h3"),
    userFakeName    = newElem ("p"),
    userLocation    = newElem ("p"),
    userProfile     = newElem ("p"),
    userProfileLink = newElem ("a"),
    userFollowers   = newElem ("p"),
    userFollowing   = newElem ("p"),
    userBio         = newElem ("p");

  /// build structure ///
  card.append (
    cardImage,
    cardInfo,
  );
  cardInfo.append (
    userRealName,
    userFakeName,
    userLocation,
    userProfile,
    userFollowers,
    userFollowing,
    userBio,
  );
  userProfile.append (
    userProfileLink,
  );

  /// class it up ///
  card          .upClass ("user card");
  cardImage     .upClass ("card-image");
  cardInfo      .upClass ("card-info");
  userRealName  .upClass ("name");
  userFakeName  .upClass ("username");
  userLocation  .upClass ("location");
  userProfile   .upClass ("profile");
  userFollowers .upClass ("followers-count");
  userFollowing .upClass ("following-count");
  userBio       .upClass ("bio");

  /// add static text ///
  userLocation  .insertAdjacentText ("afterbegin" , "Location: ");
  userProfile   .insertAdjacentText ("afterbegin" , "Profile: ");
  userFollowers .insertAdjacentText ("afterbegin" , "Followers: ");
  userFollowing .insertAdjacentText ("afterbegin" , "Following: ");
  userBio       .insertAdjacentText ("afterbegin" , "Bio: ");
  
  /// add dynamic info ///
  cardImage       .src = data.avatar_url;
  userRealName    .insertAdjacentText ("beforeend" , data.name);
  userFakeName    .insertAdjacentText ("beforeend" , data.login);
  userLocation    .insertAdjacentText ("beforeend" , data.location);
  userProfileLink .href = data.html_url;
  userProfileLink .insertAdjacentText ("beforeend" , data.html_url);
  userFollowers   .insertAdjacentText ("beforeend" , data.followers);
  userFollowing   .insertAdjacentText ("beforeend" , data.following);
  userBio         .insertAdjacentText ("beforeend" , data.bio);

  /// give it back ///
  return (card);
}

/*----------------------------------------------------------
  List of LS Instructors Github username's:
  - tetondan
  - dustinmyers
  - justsml
  - luishrd
  - bigknell
----------------------------------------------------------*/
