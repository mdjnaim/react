import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'

function Home() {
    return <h3>Home</h3>;
}
function About() {
    return <h3>About</h3>;
}

function User() {
    const { id } = useParams();
    return <h3>User ID: {id}</h3>;
}

function RoutExample() {
    const { id } = useParams();
    return (
        <h2>User ID: {id}</h2>
    );
}


function Rout() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users/1">User 1</Link>
                <Link to="/users/2">User 2</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/:id" element={<User />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;