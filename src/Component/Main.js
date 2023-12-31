
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
                    <div className={classes.checks}>
                        <div className={classes.button}>
                            <input type="checkbox"></input>
                            <span className={classes.para}>Remember Me</span>
                        </div>
                        <div >
                            <span className={classes.para}>Forgot your password</span>
                        </div>


                    </div>
                    <div className={classes.paras}>

                    </div>
                    <p className={classes.title}> Not a Member Yet?</p>

                    <div className={classes.logout}>
                        <div className={classes.texts} >


                        </div>
                        <button className={classes.log} >Sign Up </button>
                    </div>

                </form>
            </Card>




        </Fragment>
    );
};

export default Main;
