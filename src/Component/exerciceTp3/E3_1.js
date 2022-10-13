const E3_1 = (props) => {
    let tasks = props.task;
    let title = props.title;
    return (<div><h4>Exercice 1</h4>
        <h5>{title}</h5>
        <ul>
            {tasks.map((task, key) => (<li key={key}>{task}</li>))}
        </ul>
    </div>)

};

export default E3_1;