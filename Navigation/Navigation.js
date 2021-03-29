
import { createStackNavigator , createAppContainer } from 'react-navigation-stack'
import Screen1 from '../Components/screen/Screen1'

const SearchStackNavigator = createStackNavigator({
    Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Screen1,
        navigationOptions: {
            title: 'Rechercher'
        }
    }
})


export default createAppContainer(SearchStackNavigator)
