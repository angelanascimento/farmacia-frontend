import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className='w-full bg-slate-900 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className='text-2xl'>DrogaFarma</Link>

                    <div className='flex gap-6 p-2 text-lg font-medium text-white'>
                        <Link to='/' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroTema' className='hover:underline'>Cadastrar Categorias</Link>
                        <Link to='/' className='hover:underline'>Perfil</Link>
                        <Link to='/' className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar