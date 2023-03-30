import { SunIcon ,ExclamationTriangleIcon ,BoltIcon } from '@heroicons/react/24/outline'


function HomePage() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

        <div className='flex gap-5 text-center'>
            <div>
                <div className="flex flex-1 items-center justify-center mb-10">
                    <SunIcon className="h-8 w-8"/>
                    <h1>Examples</h1>
                </div>
                <div className='space-y-2'>
                    <p className='infoText'>"Explain quantum computing in simple terms"</p>
                    <p className='infoText'>"Got any creative ideas for a 10 year old’s birthday?"</p>
                    <p className='infoText'>"How do I make an HTTP request in Javascript?"</p>
                </div>

            </div>

            <div>
                <div className="flex flex-1 items-center justify-center mb-10">
                    <BoltIcon className="h-8 w-8"/>
                    <h1>Capabilities</h1>
                </div>
                <div className='space-y-2'>
                    <p className='infoText'>Remembers what user said earlier in the conversation</p>
                    <p className='infoText'>Allows user to provide follow-up corrections</p>
                    <p className='infoText'>Trained to decline inappropriate requests</p>
                </div>

            </div>


            <div>
                <div className="flex flex-1 items-center justify-center mb-10">
                    <ExclamationTriangleIcon className="h-8 w-8"/>
                    <h1>Limitations</h1>
                </div>
                <div className='space-y-2'>
                    <p className='infoText'>May occasionally generate incorrect information</p>
                    <p className='infoText'>May occasionally produce harmful instructions or biased content</p>
                    <p className='infoText'>Limited knowledge of world and events after 2021</p>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default HomePage;