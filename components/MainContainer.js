import A from "./A";
import Head from "next/head";

const MainContainer = ( { children, keywords } ) =>
{
    return (
        <>
            <Head>
                <meta keywords={"main-keyword1, main-keyword2, " + keywords}></meta>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A text={"Main"} href={"/"}/>
                <A text={"Users"} href={"/users"}/>
            </div>
            <style jsx>
                {`
                    .navbar {
                        background-color: orange;
                        padding: 15px;                    
                    }                
                `}
            </style>
            <div>
                {children}
            </div>
        </>
    );
}
export default MainContainer;