import React, { Component, useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContexts'
// class ThemeToogle extends Component {
//     static contextType = ThemeContext;
//     render(){
//         const { toogleTheme } = this.context; 
      
//         return(
//             <button onClick={toogleTheme}>
//                 Toogle
//             </button>
//         )
//     }
// }
// export default ThemeToogle; 

const ThemeToogle = () => {
    const { toogleTheme } = useContext(ThemeContext)
    return(
        <button onClick={toogleTheme}>
            Toogle
        </button>
    )
}
export default ThemeToogle; 