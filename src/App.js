// import { FormInput } from "./FormForContent/FormInput";
// import Counter from "./components/Counter";
// import { UserForm } from "./components/UserForm";
// import { CounterProvider } from "./useContext/CounterProvider";
// import { UserProvider } from "./useContext/UserProvider";
// import { FormInput } from "./FormForContent/FormInput";

import Form from "./components/Form";
import { UserProvider } from "./useContext/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Form />
      </UserProvider>

      {/* <FormInput /> */}
      {/* <CounterProvider>
        <y>
          <Counter />
          <UserForm />
        </UserProvider>
      </CounterProvider> */}
    </div>
  );
}

export default App;
