
import { Fragment } from 'react';
import Head from './Component/Head';
import Main from './Component/Main';
import Footer from './Footer';

const App = (props) => {
    return (
        <Fragment>
            <Head/>
            <div className="body">
            <Main/>

            </div>
            <Footer/>
         


        </Fragment>
    );
};

export default App;
