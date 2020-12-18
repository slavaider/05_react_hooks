import React, {useContext, useState} from 'react';
import {AlertContext} from "../../context/Alert/AlertContext";
import {GithubContext} from "../../context/Github/GithubContext";

const Search = () => {
    const [value, setValue] = useState('')
    const {show,hide} = useContext(AlertContext)
    const Github = useContext(GithubContext)
    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }
        Github.clearUsers()
        if (value.trim()) {
            hide()
            Github.search(value.trim())
        } else {
            show('Введите данные пользователя')
        }
    }

    return (
        <div className='form-group'>
            <input
                type="text"
                className='form-control'
                placeholder='Введите ник пользователя...'
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    );
};

export default Search;
