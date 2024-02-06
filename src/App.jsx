import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import List from "./components/List";
function App() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="listWrapper">
        <List />
      </div>
      <Footer />
    </>
  );
}

export default App;
