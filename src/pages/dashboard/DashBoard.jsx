import { useState } from 'react'
import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@components/ui/button'
const DashBoard = () => {
    const [count, setCount] = useState(0)

    return (
        <section className=' w-full h-screen flex justify-center items-center'>
            <div>
                <div className=' flex items-center justify-center gap-x-5'>
                    <a href='https://vitejs.dev' target='_blank'>
                        <img src={viteLogo} className='h-24' alt='Vite logo' />
                    </a>
                    <a href='https://react.dev' target='_blank'>
                        <img src={reactLogo} className='h-24 ' alt='React logo' />
                    </a>
                </div>
                <h1 className=' text-center py-8 text-5xl font-bold'>Vite + React</h1>
                <div className=' flex flex-col items-center gap-y-5'>
                    <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className=' pt-16'>Click on the Vite and React logos to learn more</p>
            </div>
        </section>
    )
}

export default DashBoard
