const Peep = ({ peep }) => {

    const { name, username, date, message } = peep;

    return (
        <>
            <h6>{name} <span>@{username}</span> <span>- {date}</span></h6>
            <p>{message}</p>
        </>
    );
};

export default Peep;