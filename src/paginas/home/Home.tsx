import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from 'react-router-dom'

import './Home.css';

function Home() {
    const { nome } = useContext(AuthContext)
    return (
        <>
            <div className="bg-slate-50 flex justify-center h-[50rem]">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde, { nome }!
                        </h2>
                        <p className='text-xl'>
                            Encontre aqui os melhores produtos com descontos incríveis!
                        </p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded text-white font-medium border border-spacing-2
                                             bg-slate-800  py-2 px-4 hover:bg-white
                                              hover:text-black hover:transition-all hover:border-black'> <Link to='/categorias' className=''>Produtos</Link></button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home