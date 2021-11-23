import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';

const TreningsList = ({data, onRemove}) => {

    const checkItems = (itemDate, itemDistance) => {
        if (itemDate !== '' & itemDistance !== '') return true
    }

    const sortData = (data) => {
        return data.sort((a, b) => (+moment(b.date, 'DD.MM.YYYY')) - (+moment(a.date, 'DD.MM.YYYY')))
    }

    return (
        <>
            <div className="trenings__titles">
                <span>Дата (ГГ.ММ.ДД)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <div className="trenings__wrapper">
                {sortData(data).map(item => { return(
                    checkItems(item.date,item.distance) &&
                        <div className="trenings__items" key={item.id}>
                            <span>{item.date}</span>
                            <span>{item.distance}</span>
                            <span className="trenings__items-close" onClick={() => onRemove(item.id)}>X</span>
                        </div>)}
                )}
            </div>
        </>
    );
}

TreningsList.propTypes = {
    onRemove: propTypes.func,
    data: propTypes.array
};


export default TreningsList;
