import Contacts from "./components/Contacts";
import Header from "./components/Header";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <div className="mx-auto flex h-screen max-w-md flex-col gap-4 bg-gray-600 px-3.5 py-2">
        <Header />
        <Contacts />
      </div>
    </ModalProvider>
  );
}

export default App;
