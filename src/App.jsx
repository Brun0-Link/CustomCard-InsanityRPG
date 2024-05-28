import Arco from '@/assets/images/rpg-arco-e-flecha.png'

export function App() {

  return (
    <div className='flex w-screen h-screen bg-zinc-300 items-center justify-center'>

      <div id='card' className='flex flex-col items-center h-[606px] w-[478px] p-3 pt-2 gap-3 border-[12px] text-justify bg-zinc-400 bg-card-bcg bg-no-repeat border-zinc-800 rounded-2xl'>
        <div id='title' className='text-center text-2xl'>Arco Simples</div>
        <div className='flex w-full'>
          <div id='weapon-status' className='flex flex-1 flex-col justify-center gap-2'>
            <div id='hands' className='bg-semi-transparent border-zinc-950 border-2 p-1 mr-4'>Duas mãos</div>
            <div id='weight' className='bg-semi-transparent border-zinc-950 border-2 p-1 mr-4'>Leve</div>
            <div id='attack-type' className='bg-semi-transparent border-zinc-950 border-2 p-1 mr-4'>Ataque a distância </div>
            <div id='range' className='bg-semi-transparent border-zinc-950 border-2 p-1 mr-4'>80m de alcance</div>
          </div >
          <img src={Arco} className='w-56 h-52 bg-semi-transparent border-4 border-zinc-800' />
        </div>

        <div id='description' className='flex flex-col bg-slate-700 h-[266px] w-[428px] rounded-sm p-6 mt-3 text-slate-400'>
          <div id="effect" className='mb-2'>
            <strong className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero deserunt, ipsam doloribus nemo suscipit architecto maiores deleniti facilis repellat corporis expedita corrupti recusandae fugit numquam reprehenderit ad perspiciatis mollitia.</strong>
          </div>
          <div id="stats" className='flex flex-col items-center text-sm'>
            <div>
              Atk de 1d20+Destreza+2.
            </div>
            <div>
              Dano perfurante de 1d6.
            </div>
            <div>
              Faixa de crítico de 18-20 (x3)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}