import React from 'react';
import img from '../assets/img.svg'
import image2 from '../assets/image2.svg'

export function Home({setActiveScreen}) {
    function handleClick() {
        console.log('clicked');
        setActiveScreen('form');
    }

    return (
        <div className="flex flex-col items-center text-gray-600 bg-[url('./assets/image1.svg')] bg-bottom bg-no-repeat rounded-xl">
            <div className="flex w-full justify-between p-4 mb-4">
                <img src={img} alt="" />
                <button onClick={handleClick} className="text-sm font-semibold">Próximo</button>
            </div>
            <h2 className="font-semibold">Bem-vindo</h2>
            <h1 className="text-3xl font-bold mb-2">Health Super App</h1>
            <p className="w-[340px] font-semibold mb-2 text-[15px] leading-[18px]">Estamos aqui para te ajudar a atingir suas metas de saúde e bem-estar de forma personalizada!</p>
            <p className="w-[340px] font-semibold mb-[72px] text-[15px] leading-[18px]">Acesse nosso formulário para receber insights para você aplicar ainda hoje na sua saúde física, na sua dieta e na sua saúde emocional!</p>
            <button onClick={handleClick} className="flex bg-green-500 text-white items-center justify-center w-32 h-7 rounded-lg font-semibold mb-[67px]">Explore</button>
            <img src={image2} className="rounded-xl"/>
        </div>
    );
}
