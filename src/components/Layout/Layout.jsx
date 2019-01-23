import React from 'react';
import classes from './Layout.scss';

const layout = (props) => (
    <>
        <div>Toolbar, SideDraw, Backdrop</div>
        <main className={classes.Layout}>
            {props.children}
        </main>
    </>
);


export default layout;