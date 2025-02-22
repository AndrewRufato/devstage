import gold from '../../assets/Medal-gold.svg'
import silver from '../../assets/Medal-silver.svg'
import cooper from '../../assets/Medal-cooper.svg'
import Image from 'next/image'

export function Ranking (){
    return(
        <div className='w-full max-w-[440px] space-y-5'>
                <h2 className='text-gray-200 text-xl fony-heading font-semibold leading-none'>Ranking de indicações</h2>

                <div className='space-y-4'>
                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center'>
                        <span className='text-sm text-gray-300 leadin-none'> 
                            <span className='font-semibold'>1º</span> |
                            Andrew Rufato</span>
                        <span className='font-heading text-2xl font-semibold  text-gray-200 leading-none'>1030</span>

                        <Image src={gold} alt='' className='absolute top-0 right-8'/>
                    </div>
                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center'>
                        <span className='text-sm text-gray-300 leadin-none'>
                            <span className='font-semibold'>2º</span> |
                            Livia Alves</span>
                        <span className='font-heading text-2xl font-semibold  text-gray-200 leading-none'>873</span>

                        <Image src={silver} alt='' className='absolute top-0 right-8'/>
                    </div>
                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center'>
                        <span className='text-sm text-gray-300 leadin-none'>
                            <span className='font-semibold'>3º</span> |
                            Marina Daniel</span>
                        <span className='font-heading text-2xl font-semibold  text-gray-200 leading-none'>625</span>

                        <Image src={cooper} alt='' className='absolute top-0 right-8'/>
                    </div>
                </div>
            </div>
    )
}