import { useState } from 'react';
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";
import { Result } from "./pages/Result";

function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [exercise, setExercise] = useState('1');
  const [stress, setStress] = useState('1');
  const [bmi, setBmi] = useState(null);


  return (
    <div className="min-w-[392px] w-full min-h-screen bg-gray-400 py-3">
      <div className="w-[370px] mx-auto h-[819.375px] bg-[#F8F8F8] rounded-xl">
        {activeScreen === 'home' && <Home setActiveScreen={setActiveScreen} />}
        {activeScreen === 'form' && (
          <Form
            setActiveScreen={setActiveScreen}
            setBmi={setBmi}
            name={name}
            setName={setName}
            age={age}
            setAge={setAge}
            weight={weight}
            setWeight={setWeight}
            height={height}
            setHeight={setHeight}
            exercise={exercise}
            setExercise={setExercise}
            stress={stress}
            setStress={setStress}
          />
        )}
        {activeScreen === 'result' && <Result setActiveScreen={setActiveScreen} bmi={bmi} name={name} />}
      </div>
    </div>
  );
}

export default App;
