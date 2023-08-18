import {useContext} from "react";

import {favoriteContext} from "../../context/FavoriteProvider/FavoriteProvider";

const useFavorite = () => {
    const favorite = useContext(favoriteContext);

    return favorite;
}

export default useFavorite;