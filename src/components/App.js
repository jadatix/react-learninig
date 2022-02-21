import react from "react";
import Menu from "./Menu";
import Title from "./Title"
import Pages from "./Pages"
import Main from "./Main"

const App = () => {
     
    return <>
        <Title name="Набір ГТМЛ і ЦСС елементів"/>
        <Menu title={["Головна", "Уроки", "Пензлі", "Фоточки", "Про проєкт", "GIMP"]} />
        <Main/>
        <Pages nums={["Сюди", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Туди"  ]}/>
    </>    
    
    
}
export default App;