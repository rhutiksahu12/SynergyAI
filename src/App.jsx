import AvailablePrompt from './Components/AvailablePrompt';
import ChatBox from './Components/ChatBox';
import Modes from './Components/Modes';
import RelatedDocs from './Components/RelatedDocs';
import Suggestions from './Components/Suggestions';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex relative h-screen p-7 bg-bgdark'>
      <div className='basis-1/4 w-full'>
        <h3 className='text-3xl font-mono text-brightheading font-semibold p-1 underline underline-offset-4'>
          Core Job
        </h3>
        <div className='mt-3'>
          <h4 className="text-xl font-mono text-textlight font-medium px-1">
            Current Step
          </h4>
          <h4 className='text-xl font-mono text-textlight font-medium px-1'>
            Next Step
          </h4>
        </div>
        <div className=' h-full'>
          <Modes />
          <RelatedDocs />
        </div>
      </div>
      <div className='basis-2/4 h-full w-full'>
        <ChatBox />
      </div>
      <div className='basis-1/4 w-full '>
        {/* <div className='h-full'>
          <Suggestions />
          <AvailablePrompt />
        </div> */}
      </div>

    </div>

  )
}

export default App;
