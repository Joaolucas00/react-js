import { Fragment } from "react"

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]
    
    return ( // Fragment Pode ser usado apenas com <></> sem necessitar usar import
    <Fragment> 
        <h1>List Group</h1>
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
            {items.map((item) => (<li className="list-group-item" key={item}>{item}</li>))}
        </ul>
    </Fragment>
    )
}

export default ListGroup