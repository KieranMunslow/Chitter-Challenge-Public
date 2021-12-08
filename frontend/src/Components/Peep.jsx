const Peep = ({ peep }) => {

    const { name, username, email, password } = peep;

    return (
        <h6>{name} <span>@{username}</span></h6>
    );
};

export default Peep;