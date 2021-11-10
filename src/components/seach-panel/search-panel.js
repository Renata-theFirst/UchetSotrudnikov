import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => { //Эта функция работает локально
        const term = e.target.value; //аолучаем value, которое ввел пользователь в строку поиска
        this.setState({term}); // Установка локального состояния term
        this.props.onUpdateSearch(term); //Пробрасываем это состояние наверх в app.js// Эта часть приходит из компонента app.js
    }

    render() {
        return (
            <input type="text" 
                className="form-control search-input"
                placeholder="Поиск сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        )
    }
    
}

export default SearchPanel;