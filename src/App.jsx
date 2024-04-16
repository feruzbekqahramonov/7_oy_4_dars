import sitelogo from './assets/siteLogo.svg'
import btns from './assets/btns.svg'
import phone1 from './assets/phone1.svg'
import phone2 from './assets/phone2.svg'
import phone3 from './assets/phone3.svg'
import phone4 from './assets/phone4.svg'
import phone5 from './assets/phone5.svg'
import './App.css'
function App() {

  return (
    <>
     <div className="container w-[1080px] mx-auto">
      <div className='mx-auto'>
        <img src={sitelogo} alt="" className='mx-auto ml-[460px] mb-[62px]'/>
      </div>
      <div className="container mx-auto w-[1080px]">
        <div className="bg-[#1A2038] p-[10px] rounded-lg gap-[270px] flex mb-[16px] ">
          <p className='cursor-pointer'>Brand</p>
          <div className='flex gap-[140px]'>
            <p className='cursor-pointer ml-[10px]'>Category</p>
            <p className='cursor-pointer'>Price</p>
            <p className='cursor-pointer'>Status</p>
            <p className='cursor-pointer mr-[141px]'>Action</p>
          </div>
        </div>
        <div className="container mx-auto w-[1080px]">
          <div className="bg-[#1F2A40] justify-between flex p-[10px] rounded-lg items-center mb-[16px]">
            <div className='flex items-center gap-4 w-[350px]'>
              <img src={phone1} alt="" />
              <div>
                <p>Apple</p>
                <p className='text-[#6C757D]'>mail@gmail.com</p>
              </div>
            </div>
            <p className='w-[174px]'>Technology</p>
            <p className='w-[174px]'>200.00$</p>
            <p className='bg-[#04D58D] rounded-xl h-[25px] p-[2px] cursor-pointer'>Available</p>
            <img src={btns} alt="" className='mr-[61px] w-[227px]'/>
          </div>
          <div className="bg-[#1F2A40] justify-between flex p-[10px] rounded-lg items-center mb-[16px]">
            <div className='flex items-center gap-4 w-[350px]'>
              <img src={phone3} alt="" />
              <div>
                <p>Realme</p>
                <p className='text-[#6C757D]'>mail@gmail.com</p>
              </div>
            </div>
            <p className='w-[174px]'>Technology</p>
            <p className='w-[174px]'>200.00$</p>
            <p className='bg-[#EB5757] rounded-xl h-[25px] p-[2px] cursor-pointer'>Available</p>
            <img src={btns} alt="" className='mr-[61px] w-[227px]'/>
          </div>
          <div className="bg-[#1F2A40] justify-between flex p-[10px] rounded-lg items-center mb-[16px]">
            <div className='flex items-center gap-4 w-[350px]'>
              <img src={phone2} alt="" />
              <div>
                <p>Samsung</p>
                <p className='text-[#6C757D]'>mail@gmail.com</p>
              </div>
            </div>
            <p className='w-[174px]'>Technology</p>
            <p className='w-[174px]'>200.00$</p>
            <p className='bg-[#F2C94C] rounded-xl h-[25px] p-[2px] cursor-pointer text-black'>Available</p>
            <img src={btns} alt="" className='mr-[61px] w-[227px]'/>
          </div>
          <div className="bg-[#1F2A40] justify-between flex p-[10px] rounded-lg items-center mb-[16px]">
            <div className='flex items-center gap-4 w-[350px]'>
              <img src={phone4} alt="" />
              <div>
                <p>Nokia</p>
                <p className='text-[#6C757D]'>mail@gmail.com</p>
              </div>
            </div>
            <p className='w-[174px]'>Technology</p>
            <p className='w-[174px]'>200.00$</p>
            <p className='bg-[#04D58D] rounded-xl h-[25px] p-[2px] cursor-pointer'>Available</p>
            <img src={btns} alt="" className='mr-[61px] w-[227px]'/>
          </div>
          <div className="bg-[#1F2A40] justify-between flex p-[10px] rounded-lg items-center mb-[16px]">
            <div className='flex items-center gap-4 w-[350px]'>
              <img src={phone5} alt="" />
              <div>
                <p>Blackberry</p>
                <p className='text-[#6C757D]'>mail@gmail.com</p>
              </div>
            </div>
            <p className='w-[174px]'>Technology</p>
            <p className='w-[174px]'>200.00$</p>
            <p className='bg-[#EB5757] rounded-xl h-[25px] p-[2px] cursor-pointer'>Available</p>
            <img src={btns} alt="" className='mr-[61px] w-[227px]'/>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
