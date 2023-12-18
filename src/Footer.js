
import { Fragment } from 'react';
import img from './Component/image/head.PNG';
import classes from './Footer.module.css';


const Footer = (props) => {
    return (
        <Fragment>
            <div className={classes.Footer}>
                <div className={classes.Footerimage} >
                    <img alt="head" src={img} />


                </div>

            </div>



        </Fragment >
    );
};

export default Footer;
