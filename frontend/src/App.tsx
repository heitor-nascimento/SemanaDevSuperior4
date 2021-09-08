import DataTable from "assets/components/DataTable";
import Footer from "assets/components/Footer";
import NavBar from "assets/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
