import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="flex flex-col items-center text-gray-600">
            <div className="flex w-full justify-between p-4">
                <div>imagem</div>
                <div>Próximo</div>
            </div>
            <h2 className="font-semibold">Bem-vindo</h2>
            <h1 className="text-3xl font-bold mb-2">Health Super App</h1>
            <p className="w-[350px] font-semibold mb-2">Estamos aqui para te ajudar a atingir suas metas de saúde e bem-estar de forma personalizada!</p>
            <p className="w-[350px] font-semibold mb-14">Acesse nosso formulário para receber insights para você aplicar ainda hoje na sua saúde física, na sua dieta e na sua saúde emocional!</p>
            <Link to="/formulario">
                <div className="flex bg-green-500 text-white items-center justify-center w-32 h-7 rounded-lg font-semibold">Explore</div>
            </Link>
        </div>
    );
}
