import react from 'react'
import "../styles.css" 

const Menu = (props) => {
    return <>
    <div className="nav-bar">
        {
            props.title.map((el,idx) =><div className="element">
                    <p>{el}</p>
                </div>)        
        }
    </div>
    </>
}

export default Menu