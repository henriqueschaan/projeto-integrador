import React from 'react';
import { useState } from 'react';

export function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [exercise, setExercise] = useState('');
    const [stress, setStress] = useState('');

    function handleForm(event) {
        event.preventDefault();
        console.log('form submitted');
    }

    return (
        <div className="flex flex-col items-center text-gray-600">
            <div className="flex w-full justify-between p-4">
                <div>menu</div>
                <div></div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Queremos te conhecer</h1>
            <p className="w-[350px] font-semibold mb-2">Preencha o formulário para receber informações personalizadas</p>
            <form onSubmit={handleForm} className="flex flex-col">
                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-2"
                />
                <label htmlFor="age">Idade</label>
                <input
                    id="age"
                    type="text"
                    placeholder="Digite sua idade"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-2"
                />
                <label htmlFor="weight">Peso</label>
                <input
                    id="weight"
                    type="text"
                    placeholder="Digite seu peso"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-2"
                />
                <label htmlFor="height">Altura</label>
                <input
                    id="height"
                    type="text"
                    placeholder="Digite sua altura"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-2"
                />
                <label htmlFor="exercise">Nível de atividade física</label>
                <input
                    id="exercise"
                    type="text"
                    placeholder="Digite seu nível de atividade física"
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mb-2"
                />
                <label htmlFor="stress">Nível de estresse</label>
                <input type="text" />
                <button type="submit" className="flex bg-green-500 text-white items-center justify-center w-32 h-7 rounded-lg font-semibold">Avançar</button>
            </form>
        </div>
    );
}
