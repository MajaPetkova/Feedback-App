export const reducer = (state, action) => {
   
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  //   if(action.type ==="SEARCH"){
  //     const newDrinks= action.payload.searchTerm ;
  //     console.log(newDrinks)
  //     return {...state, searchTerm: newDrinks }
  //   }
  if (action.type === "FIND_BY_NAME") {
    const cocktails = action.payload.drinks.map((x) => {
      const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = x;
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
      };
    });
    return { ...state, cocktails: cocktails };
  }
  if (action.type === "FIND_BY_ID") {
    //  
    //   console.log(id)
    //   return {...state}
  }
};
