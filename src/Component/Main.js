
import { Fragment } from 'react';
import Card from './Card';
import classes from './Main.module.css'

const Main = (props) => {
    return (
        <Fragment>
            <Card>
                <form className={classes.main}>
                    <h2 className={classes.text}>Login</h2>
                    <div className={classes.inputs}>
                        <input className={classes.valueinput} placeholder="Username" />
                        <input className={classes.valueinput} placeholder="Password" />

                    </div>
                    <div className={classes.login}>
                        <button className={classes.log} >login </button>
                    </div>

                </form>
            </Card>




        </Fragment>
    );
};

export default Main;
