import LayoutProgram from "./pages/LayoutProgram";
import { BrowserRouter as Router } from "react-router-dom";
// import Beranda from "./pages/Beranda";

function App() {
    return (
        <>
            <Router>
                <LayoutProgram />
                {/* <Switch>
                    <Route path="/" component={Beranda} />
                </Switch> */}
            </Router>
        </>
    );
}

export default App;
