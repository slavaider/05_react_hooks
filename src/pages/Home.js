import React from 'react';
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";

const Home = () => {
    const cards = new Array(9).fill('').map((_,i)=>i)
    return (
        <React.Fragment>
            <Search/>
            <div className="row">
                {cards.map((item)=>{
                    return (
                        <div key={item} className="col-sm-4 mb-4">
                            <Card/>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
};

export default Home;
