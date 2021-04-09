import React from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";
const Users = ( {users} ) =>
{
/*
const Users = () =>
{

    const [users, setUsers] = React.useState([
        { id:1,name: 'Bu' },
        { id:2,name: 'Bo' }
    ]);

    React.useEffect(async () => {
        const response = await fetch( 'https://jsonplaceholder.typicode.com/users' );
        const data = await response.json();
        setUsers( data );
    }, []);
    */

    return <MainContainer keywords="users">
                <h1>Users</h1>
                <ul>
                    {users.map(user=>
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                <a>{user.name}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            </MainContainer>;
}
export default Users;
// const extension = '';
const extension = '.json';
export async function getStaticProps( context )
{
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const url = `http://localhost:3000/data/users.json`;
    const response = await fetch( url );
    const users = await response.json();

    return {
        props: { users }
    }
}