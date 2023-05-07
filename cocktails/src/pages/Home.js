import { CocktailList } from "../components/CocktailList"
import { Search } from "../components/SearchForm"

export const Home = () =>{
    return (
    <main>
        <Search/>
        <CocktailList/>
    </main>
    )
}