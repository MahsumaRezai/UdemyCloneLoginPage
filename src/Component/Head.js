
import { Fragment } from 'react';
import classes from './Head.module.css'
import head from './image/head.PNG'

const Head = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>
                <div className={classes.headimage} >
                    <img alt="head" src={head}  />

            </div>

            </div>



        </Fragment >
    );
};

export default Head;
