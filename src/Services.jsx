    const city = "Jakarta";
    const street = "Jl. Sudirman No. 1";

    export const getUsers = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then (users =>
            users.map((user) => ({
                name: user.name,
                email: user.email,
                city,
                street,
            }))
        )  
        .catch((error) => {
            console.error("Error fetching users:", error);
            throw error;
        });
    };