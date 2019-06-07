import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        /*
        * Este helper não pode ser utilizado diretamente na propriedade icon porque o método getImageSource
        * é um método assíncrono porque o seu retorno é uma Promise, por isso a necessidade de utilizar promise first
        * para resolver a promise e retornar para o resultado do getImageSource
        */
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30),
        Icon.getImageSource("ios-menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [{
                            icon: sources[2],
                            title: "Menu",
                            id: "sideDrawerToggle"
                        }]						 
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: [{
                        leftButtons: {
                            icon: sources[2],
                            title: "Menu",
                            id: "sideDrawerToggle"
                        }
						 
                    }]
                }
            ],
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                }
            }
        });
    });
}

export default startTabs;