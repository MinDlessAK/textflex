import logo from './logo.svg';
import './App.css';

function App() {
  return (
 <div className="h-screen w-full flex">
  <div className='grow bg-slate-500 flex flex-col'>

     <div className='bg-pink-500 h-3/6 flex justify-end'>
        <div className='bg-yellow-500 w-2/6 h-full flex '>
        <div className='bg-green-500 h-4/6 w-full justify-start'></div>
        </div>
     </div>

     <div  className='h-1/6 bg-purple-800 flex'>
      <div className='w-4/6 h-full'></div>
      <div className=' w-1/6 bg-slate-800 h-full'>
        <div className='w-full h-2/6 bg-orange-600'></div>
      </div>
     </div>

     <div  className='h-2/6 bg-indigo-600 flex'>
      <div className='w-3/5 h-full'></div>
      <div className='w-1/5 h-full bg-yellow-600 flex flex-col'>
        <div className='h-2/3 w-full'></div>
        <div className='h-1/3 w-full bg-black'>
          <div className='w-1/3 h-full bg-green-500'></div>
        </div>
      </div>

     </div>
  </div>


  <div className='w-2/6 '>
    
    <div className='bg-orange-500 h-2/6 flex justify-end'>
      <div className='bg-red-500 w-2/6 h-full flex flex-col'>
        <div className='h-2/3 w-full'></div>
        <div className='h-1/3 w-full bg-black flex justify-end'>
          <div className='w-1/3 h-full bg-pink-400'></div>
        </div>
      </div>
    </div>

    <div className='bg-slate-500 h-2/6 flex justify-end'>
    <div className='bg-green-500 w-2/6 h-full flex flex-col'>
        <div className='h-2/3 w-full'></div>
        <div className='h-1/3 w-full bg-indigo-500 '></div>
      </div>
    </div>

    <div className='bg-orange-500 h-2/6 flex'>
     <div className='w-2/5 h-full flex flex-col '>
      <div className='h-2/5 w-full bg-purple-500 flex justify-end'>
        <div className='h-full w-1/4 bg-yellow-400 flex flex-col'>
          <div className='h-1/2 w-full'></div>
          <div className='h-1/2 w-full bg-red-500 flex flex-col justify-end'>
            <div className='h-2/3 w-1/3 bg-indigo-600'></div>
          </div>
        </div>
      </div>
      <div className='h-3/5 w-full bg-pink-500'></div>
     </div>
    </div>

  </div>

 </div>
  );
}

export default App;
