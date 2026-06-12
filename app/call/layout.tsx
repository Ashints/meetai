interface Props{
    children: React.ReactNode;
}

const Layout = ({children}:Props)=>{
    return(
        <div className="h-screen bg-white">
            {children}
        </div>
    );
};

export default Layout;