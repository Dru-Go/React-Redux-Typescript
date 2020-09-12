import React, { FC } from 'react';
import Home from './home'

const App: FC = (props: any) => {
    return (
        <Home {...props} />
    );
};

export default App;