import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';


const EmployeesList = ({data, onDelete, onToggleProp}) => {

    // //Использование индекса элемента в качестве уникального ключа
    // const elements = data.map((item, i) => {
    //     const {i, ...itemProps} = item; //Деструктуризация по остаточному принципу, чтобы вытащить id
    //     return(
    //         <EmployeesListItem key={i} {...itemProps} /> //Запись {..item} идентична записи name={item.name} salary={item.salary} 
    //     )
    // })


    const elements = data.map(item => {
        const {id, ...itemProps} = item; //Деструктуризация по остаточному принципу, чтобы вытащить id
        return(
            <EmployeesListItem 
                key={id} 
                {...itemProps} //Запись {..item} идентична записи name={item.name} salary={item.salary}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />  
        )
    })

    return(
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList;