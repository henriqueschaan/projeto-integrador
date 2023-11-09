import React from 'react';
import menu from '../assets/menu.svg'

export function Form({
    setActiveScreen,
    setBmi,
    name, setName,
    age, setAge,
    weight, setWeight,
    height, setHeight,
    exercise, setExercise,
    stress, setStress
}) {

    function handleForm(event) {
        event.preventDefault();
        const bmi = weight / ((height / 100) ** 2);
        console.log('form submitted', `BMI: ${bmi}`);
        setBmi(bmi);
        setActiveScreen('result');
    }

    const parseInput = (value) => {
        return value.replace(/,/g, '.');
    };

    const handleWeightChange = (event) => {
        setWeight(parseInput(event.target.value));
    };

    return (
        <div className="flex flex-col items-center text-gray-600">
            <div className="flex w-full justify-between p-4 mt-6 mb-4">
                <button onClick={() => setActiveScreen('home')}>
                    <img src={menu} alt="" />
                </button>
                <div></div>
            </div>
            <h1 className="text-[28px] font-bold mb-2">Queremos te conhecer</h1>
            <p className="w-[350px] font-semibold mb-4 text-[16px] leading-[18px] pl-4 text-[#565656]">Preencha o formulário para receber informações personalizadas</p>
            <form onSubmit={handleForm} className="flex flex-col w-[300px]">
                <div>
                    <label htmlFor="name" className="text-[14px] leading-[30px] pl-3 text-[#9CA3AF]">Nome</label>
                    <span className="text-[#F5690B] ml-0.5">*</span>
                </div>
                <input
                    required
                    id="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-2 text-[14px]"
                />
                <div>
                    <label htmlFor="age" className="text-[14px] leading-[30px] pl-3 text-[#9CA3AF]">Idade</label>
                    <span className="text-[#F5690B] ml-0.5">*</span>
                </div>
                <input
                    required
                    id="age"
                    type="text"
                    placeholder="Digite sua idade"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-2 text-[14px]"
                />
                <div>
                    <label htmlFor="weight" className="text-[14px] leading-[30px] pl-3 text-[#9CA3AF]">Peso (kg)</label>
                    <span className="text-[#F5690B] ml-0.5">*</span>
                </div>
                <input
                    required
                    id="weight"
                    type="text"
                    placeholder="Digite seu peso"
                    value={weight}
                    onChange={handleWeightChange}
                    className="border border-gray-300 rounded-lg p-2 mb-2 text-[14px]"
                />
                <div>
                    <label htmlFor="height" className="text-[14px] leading-[30px] pl-3 text-[#9CA3AF]">Altura (cm)</label>
                    <span className="text-[#F5690B] ml-0.5">*</span>
                </div>
                <input
                    required
                    id="height"
                    type="text"
                    placeholder="Digite sua altura"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-2 text-[14px]"
                />
                <div>
                    <label htmlFor="exercise" className="text-[14px] leading-[30px] pl-3 text-[#9CA3AF]">Nível de atividade física</label>
                    <span className="text-[#F5690B] ml-0.5">*</span>
                </div>
                <select
                    required
                    id="exercise"
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-2 text-[14px]"
                >
                    <option value="1">1 (baixo)</option>
                    <option value="2">2 (médio)</option>
                    <option value="3">3 (alto)</option>
                </select>
                <div>
                    <label htmlFor="stress" className="text-[14px] leading-[30px] pl-3 text-[#9CA3AF]">Nível de estresse</label>
                    <span className="text-[#F5690B] ml-0.5">*</span>
                </div>
                <select
                    required
                    id="stress"
                    value={stress}
                    onChange={(e) => setStress(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-2 text-[14px]"
                >
                    <option value="1">1 (baixo)</option>
                    <option value="2">2 (médio)</option>
                    <option value="3">3 (alto)</option>
                </select>
                <button type="submit" className="flex bg-green-500 text-white items-center justify-center w-48 h-10 rounded-lg font-semibold mt-6 mb-10 mx-auto text-[14px]">Avançar</button>
            </form>
        </div>
    );
}
