import React, {useContext} from 'react';
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import {GithubContext} from "../context/Github/GithubContext";

const Home = () => {
    const {loading, users} = useContext(GithubContext)
    return (
        <React.Fragment>
            <Search/>
            <div className="row">
                {loading ? <p className='text-center'>Загрузка</p> :
                    users.map((user) => (
                        <div key={user.id} className="col-sm-4 mb-4">
                            <Card user={user}/>
                        </div>
                    ))
                }

            </div>
        </React.Fragment>
    );
};

export default Home;
