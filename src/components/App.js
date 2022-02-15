import React from 'react';
import { Button } from "react-bootstrap";

const App = () => {
    return (
        <div className={'container'}>
            <h1>Заголовок</h1>
            <Button variant={'primary'}>Отправить</Button>
        </div>
    );
};

export default App;