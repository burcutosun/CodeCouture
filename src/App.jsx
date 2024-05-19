import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import { DataProvider } from "./context/DataContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <PageContent />
        <Footer />
        <ToastContainer position="top-right" />
      </DataProvider>
    </>
  );
}

export default App;
