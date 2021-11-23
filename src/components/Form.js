import React, { useState } from 'react';
import propTypes from 'prop-types';

const Form = ({onAdd}) => {

    const [inputDate, setInputDate] = useState({value: ''});
    const [inputDistance, setInputDistance] = useState({value: ''});

    const btnClick = (e) => {
        e.preventDefault();
        if(inputDate.value !== '' && inputDistance.value !== ''){
            onAdd(inputDate.value,inputDistance.value);
            setInputDistance({value: ''});
            setInputDate({value: ''})
        } else {
            const error = document.querySelector('.trenings__form-button').classList;
            if(!error.contains('error')){
                error.add('error');
                setTimeout(() => error.remove('error'), 4000)
            }
        }
    }

    const dateInputChange = (e) => {
        setInputDate(prevInput => ({...prevInput, value: e.target.value}))
    }

    const distanceInputChange = (e) => {
        setInputDistance(prevInput => ({...prevInput, value: e.target.value}))
    }

    return (
        <form className="trenings__form">

            <label htmlFor="date">
                Дата (ДД.ММ.ГГ)
                <input type="date" className="trenings__form-input date" onChange={dateInputChange} value={inputDate.value}/>
            </label>
            
            <label htmlFor="distance">
                Пройдено км
                <input type="text" className="trenings__form-input" onChange={distanceInputChange} value={inputDistance.value}/>
            </label>
            
            <button type="submit" className="trenings__form-button" onClick={btnClick}>OK</button>

        </form>
    );
}

Form.propTypes = {
    onAdd: propTypes.func
};


export default Form;
