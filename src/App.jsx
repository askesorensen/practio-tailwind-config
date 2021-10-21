function App() {
  return (
    <main className='h-screen bg-sky-light p-xxlarge'>
      {/* Section: Spacing Scale */}
      <section className='bg-white rounded-xlarge p-xlarge'>
        <h1 className='text-2xl font-bold'>Spacing scale</h1>

        <div className='flex flex-col mt-large'>
          <div className='flex items-center border-b gap-medium border-sky'>
            <span className='w-huge'>xxsmall</span>
            <div className='bg-blue h-medium w-xxsmall'></div>
          </div>

          <div className='flex items-center border-b gap-medium border-sky'>
            <span className='w-huge'>xsmall</span>
            <div className='bg-blue h-medium w-xsmall'></div>
          </div>
          <div className='flex items-center border-b gap-medium border-sky'>
            <span className='w-huge'>small</span>
            <div className='bg-blue h-medium w-small'></div>
          </div>
          <div className='flex items-center border-b gap-medium border-sky'>
            <span className='w-huge'>medium</span>
            <div className='bg-blue h-medium w-medium'></div>
          </div>
          <div className='flex items-center border-b gap-medium border-sky'>
            <span className='w-huge'>large</span>
            <div className='bg-blue h-medium w-large'></div>
          </div>
          <div className='flex items-center border-b gap-medium border-sky'>
            <span className='w-huge'>xlarge</span>
            <div className='bg-blue h-medium w-xlarge'></div>
          </div>
          <div className='flex items-center border-b gap-medium border-sky'>
            <span className='w-huge'>xxlarge</span>
            <div className='bg-blue h-medium w-xxlarge'></div>
          </div>
          <div className='flex items-center border-b gap-medium border-sky'>
            <span className='w-huge'>xxxlarge</span>
            <div className='bg-blue h-medium w-xxxlarge'></div>
          </div>
          <div className='flex items-center border-b gap-medium border-sky'>
            <span className='w-huge'>huge</span>
            <div className='bg-blue h-medium w-huge'></div>
          </div>
          <div className='flex items-center border-b gap-medium border-sky'>
            <span className='w-huge'>xhuge</span>
            <div className='bg-blue h-medium w-xhuge'></div>
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
}

export default App;
