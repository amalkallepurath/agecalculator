import React,{useState} from 'react'

export default function App() {
const [dob,setDob] = useState('');
const [age,setAge] = useState(0);
const [nextBirthday,setNextBirthday] = useState(0);
const [years,setYears] = useState(0);
const [months,setMonths] = useState(0);
const [days,setDays] = useState(0);

const handleSubmit = (e) => {
  e.preventDefault();
  const birthDate=new Date(String(dob))

  const today = new Date();
  setDays(today.getDate())
  const agecal=(today.getFullYear()-birthDate.getFullYear()); 
  setMonths(today.getMonth()) ;
  setYears(agecal-1)
  if(birthDate.getMonth()<today.getMonth()){
   setAge(agecal)
   
   const nextbir=new Date (String(birthDate.getDate()+"-"+Number((birthDate.getMonth())+1)+"-"+(Number(today.getFullYear())+1)))
   
   
   const nextbirdaydif=nextbir-today;
   const nextbirthdays=Math.floor((nextbirdaydif/1000/60/60/24)+1);
   setNextBirthday(nextbirthdays)
  }
  else{
   setAge(agecal-1)
   const nextbir=new Date (String(birthDate.getDate()+"-"+Number((birthDate.getMonth())+1)+"-"+today.getFullYear()))
   
   
   const nextbirdaydif=nextbir-today;
   const nextbirthdays=Math.floor((nextbirdaydif/1000/60/60/24)+1);
   setNextBirthday(nextbirthdays)
   
  }
}
  return (
    <div className='md:bg-indigo-500 bg-white h-[100vh] flex justify-center md:items-center'>
      <div className="bg-white  rounded-xl p-5 h-[450px] w-[400px]  flex justify-center ">
        <div className="flex flex-col">
        <h1 className='text-indigo-600 font-semibold text-2xl mt-5 text-center'>Age Calculator</h1>
        <label className='text-gray-500 mt-10 text-sm'>Enter your date of birth</label>
        <input type="date" onChange={(e)=>{setDob(e.target.value)}} className=" mt-2 w-[300px] p-1 text-indigo-500 rounded-md border border-indigo-200 focus:outline-none"/>
      <input type="submit" value="Calculate" onClick={handleSubmit} className='bg-indigo-500 text-white mt-6 p-2 rounded-md cursor-pointer hover:bg-indigo-600'/>
    
      <div className="grid grid-cols-3 gap-4 mt-6 ">
      <div className="bg-indigo-100 p-2 rounded-md text-center">
        <h1 className='text-indigo-600 font-semibold text-lg'>Years</h1>
        <p className='text-gray-500 text-sm'>{years}</p>
      </div>
      <div className="bg-indigo-100 p-2 rounded-md text-center">
        <h1 className='text-indigo-600 font-semibold text-lg'>Months</h1>
        <p className='text-gray-500 text-sm'>{months}</p>
      </div>
      <div className="bg-indigo-100 p-2 rounded-md text-center">
        <h1 className='text-indigo-600 font-semibold text-lg'>Days</h1>
        <p className='text-gray-500 text-sm'>{days}</p>
      </div>  

     </div>
     <div className="grid grid-cols-2 gap-5">
      <div className="bg-indigo-100 p-2 rounded-md text-center mt-4">
        <h1 className='text-indigo-600 font-semibold text-lg'>Your Age</h1>
        <p className='text-gray-500 text-sm'>{age}</p>
      </div>
      <div className="bg-indigo-100 p-2 rounded-md text-center mt-4">
        <h1 className='text-indigo-600 font-semibold text-lg'>Next Birthday</h1>
        <p className='text-gray-500 text-sm'>{nextBirthday} days </p>
      </div>
     </div>
   
      </div>
      </div>
    </div>
  )
}
