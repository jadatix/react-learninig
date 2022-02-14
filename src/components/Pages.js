import react from 'react';
import "../styles.css";

const Pages = (props) => {
    
    const values = props.nums.length <= 12 ? props.nums.map(el => <div className="page-el">
        <p>{el}</p>
    </div>):<div/>

    return <div classname="page-div-">
        <div className="pages" style={{ width: `calc(40%/12*${props.nums.length})`}}>
            {values}
        </div>
    </div>
}

export default Pages;


