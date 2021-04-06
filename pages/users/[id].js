import {useRouter} from "next/router"
import styles from "../../styles/user.module.scss"
import MainContainer from "../../components/MainContainer";
export default function User( { user } )
{
    const router = useRouter();
    console.log( router );
    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>User with id {router.query.id}</h1>
                <div>User name {user.name}</div>
            </div>
        </MainContainer>
    );
}

export async function getServerSideProps( {params} )
{
    // console.log( params );
    const response = await fetch( `https://jsonplaceholder.typicode.com/users/${params.id}` );
    const user = await response.json();

    return {
        props: { user }
    }
}