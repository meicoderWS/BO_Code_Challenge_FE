import './App.css';
import MapView from './components/MapView/MapView';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <div className="container">
            <Sidebar />
            <MapView />
        </div>
    );
}

export default App;
