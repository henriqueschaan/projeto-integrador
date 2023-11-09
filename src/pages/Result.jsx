import React, { useState } from 'react';
import menu from '../assets/menu.svg'

const getAdviceByBmi = (bmi, name) => {
    const baseAdvice = {
        message: "",
        exercise: "cardio",
        food: "• Reduza a ingestão de carboidratos.",
        videoId: "DvNzFkgsnTE"
    };

    if (bmi < 18.5) {
        return {
            ...baseAdvice,
            message: "Está na hora de concentrar-se em fortalecer e nutrir seu corpo para encontrar o equilíbrio.",
            exercise: "força",
            food: "• Aumente a ingestão de proteínas.",
            videoId: "vZy8DIXg4DY"
        };
    } else if (bmi <= 24.99) {
        return {
            ...baseAdvice,
            message: "Você está num equilíbrio saudável. Mantenha-se focado para continuar no caminho certo!",
            exercise: "força",
            food: "• Aumente o consumo de proteínas."
        };
    } else if (bmi <= 29.99) {
        return {
            ...baseAdvice,
            message: "Pequenos ajustes na sua rotina podem te trazer mais energia e bem-estar. Vamos juntos nessa jornada!",
            videoId: "NzLbwwdqZ7Y"
        };
    } else if (bmi <= 34.99) {
        return {
            ...baseAdvice,
            message: "Seu corpo pode estar pedindo mais cuidado e atenção. Comece pequeno, e lembre-se: cada passo conta.",
            videoId: "6z3-ZfuZbQ4"
        };
    } else if (bmi <= 39.99) {
        return {
            ...baseAdvice,
            message: "É o momento de repensar suas escolhas e dedicar-se à sua saúde. Estamos aqui para apoiá-lo nesse processo.",
            videoId: "CfOk1A7aEDc"
        };
    } else {
        return {
            ...baseAdvice,
            message: "Sua jornada requer determinação e suporte. Lembre-se, saúde é uma maratona, não uma corrida.",
            videoId: "fGmWfpZs5CQ"
        };
    }
};

export function Result({ setActiveScreen, bmi, name }) {
    const [isLoading, setIsLoading] = useState(true);
    const advice = getAdviceByBmi(bmi, name);

    return (
        <>
            <div className={`${!isLoading && "hidden"} ${isLoading && "h-full flex flex-col flex-grow items-center justify-center text-2xl font-semibold"}`}>Carregando...</div>
            <div className={`${isLoading && "hidden"} ${!isLoading && "flex flex-col h-full p-4 items-center bg-[url('./assets/image3.svg')] bg-bottom bg-no-repeat rounded-xl"}`}>
                <button onClick={() => setActiveScreen('home')} className="mb-8 mt-8 self-start">
                    <img src={menu} alt="Menu" />
                </button>
                <div className="h-[100px] self-start mb-4 px-4">
                    <h1 className="text-3xl font-bold">Resultados</h1>
                    <h2 className="font-semibold text-[12px]">{name}, confira nossas sugestões para o seu perfil</h2>
                </div>
                <p className="text-[17px] font-semibold mb-12 px-4">{advice.message}</p>
                <div className="mb-12 px-2 text-[14px]">
                    <p>• Priorize exercícios de {advice.exercise}.</p>
                    <p>• Reduza ultraprocessados e industrializados.</p>
                    <p>{advice.food}</p>
                    <p>• Procure não se alimentar muito tarde.</p>
                </div>
                <div className="mb-3 text-[14px] font-semibold">Confira mais dicas no vídeo abaixo:</div>
                <div className="mb-12">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${advice.videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setIsLoading(false)}
                        className="rounded-3xl w-full h-40"
                    ></iframe>
                </div>
                <button onClick={() => setActiveScreen('form')} className="border w-44 h-8 mb-6 bg-[#F8F8F8] rounded-xl text-[#565656] text-[14px] font-semibold">Reiniciar avaliação</button>
            </div>
        </>
    );
}
