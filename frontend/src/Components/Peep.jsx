const Peep = ({ peep }) => {

    const { name, username, email, password } = peep;

    return (
        <h1>{name}</h1>
    );
};

export default Peep;