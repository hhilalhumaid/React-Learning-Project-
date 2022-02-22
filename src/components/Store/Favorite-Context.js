import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setuserFavorites] = useState([]);

  function addFavoritesHandler(favoritesMeetup) {
    setuserFavorites((preUserFavorites) => {
      return preUserFavorites.concat(favoritesMeetup);
    });
  }
  function removeFavoritesHandler(meetupId) {
    setuserFavorites((preUserFavorites) => {
      return preUserFavorites.filter((meetup) => meetup.id !== meetup.id);
    });
  }

  function itemIsFavoritesHandler(meetupId) {
    userFavorites.some((meetup) => meetup.id === meetupId);
  }
  context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
}
return (
  <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
);
