import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <footer className='bg-slate-900 text-white flex flex-col items-center'>
                <div className='grid grid-cols-2 items-center w-5/6 h-[7rem]'>
                   <div>
                        <h2 className='text-4xl text-center font-bold'>DrogaFarma</h2>
                   </div>
                   <div className=' flex flex-col  justify-between'>
                        <p className='text-lg text-center'>Acesse nossas redes sociais</p>
                        <div className='flex gap-2 justify-center pt-2'>
                            <a href="https://www.linkedin.com/" target='_blank'><LinkedinLogo size={40} className='stroke-2 text-[#2aa9bf] hover:scale-110 transition-all' /></a>
                            <a href="https://www.instagram.com/" target='_blank'><InstagramLogo size={40} className='stroke-2 text-[#2aa9bf] hover:scale-110 transition-all' /></a>
                            <a href="https://www.facebook.com/" target='_blank'><FacebookLogo size={40} className='stroke-2 text-[#2aa9bf] hover:scale-110 transition-all' /></a>
                        </div>
                   </div>
                </div>
                <hr className='w-full border-slate-500' />
                <div className='mt-4 text-white text-center h-[2rem]'>
                    <p className='text-sm'>
                        DrogaFarma {data} | © Todos os direitos reservados
                    </p>
                </div>
            </footer>
            
        </>
    )
}

export default Footer