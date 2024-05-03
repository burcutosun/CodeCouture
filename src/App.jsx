import { DataProvider } from "./context/DataContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <PageContent />
        <Footer />
      </DataProvider>
    </>
  );
}

export default App;
