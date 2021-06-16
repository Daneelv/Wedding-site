import React from 'react';
import banStyles from "../styles/page404.module.css";

const page404 = props => {
    return (
        <div className= {banStyles.four_zero_four}>
            <div className="row">
                <div className="col s12"> <i className={`material-icons center ${banStyles.rotateMe}`} >report_problem</i></div>
                <div className="col s12"><h1>404</h1></div>
                <div className="col s12">
                    <p>
                        Probeer asseblief om die webtuiste oop te maak deur die link wat gestuur was <br/> 
                        Indien dit nie werk nie, Kontak dan asseblief vir Daneel op <a href="tel:0726312089">072 631 2089 </a>  
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page404
