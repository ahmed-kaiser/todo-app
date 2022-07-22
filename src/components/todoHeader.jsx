
function TodoHeader() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "September", "Oct", "Nov", "Dec"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date()

    return (
        <div className="todoHeader">
          <p><span>{days[date.getDay()]}</span>,
            <small> {date.getDate()} {months[date.getMonth()]}</small></p>
        </div>
    )
}

export default TodoHeader;