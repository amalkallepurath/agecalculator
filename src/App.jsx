import React,{useState} from 'react'

export default function App() {
const [dob,setDob] = useState(null);
const [age,setAge] = useState(0);
const [nextBirthday,setNextBirthday] = useState(0);
const [years,setYears] = useState(0);
const [months,setMonths] = useState(0);
const [days,setDays] = useState(0);
const[doberror,setdoberror]=useState(false)
const handleSubmit = (e) => {
  e.preventDefault();

  if (!dob) {
    setdoberror(true);
    return;
  }

  setdoberror(false);

  // Convert YYYY-MM-DD safely
  const [year, month, day] = dob.split("-").map(Number);

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  // Calculate age
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // Adjust days
  if (ageDays < 0) {
    ageMonths--;

    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );

    ageDays += previousMonth.getDate();
  }

  // Adjust months
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  setYears(ageYears);
  setMonths(ageMonths);
  setDays(ageDays);
  setAge(ageYears);

  // Calculate next birthday
  let nextBirthdayDate = new Date(
    today.getFullYear(),
    month - 1,
    day
  );

  // Birthday has already happened
  if (nextBirthdayDate <= today) {
    nextBirthdayDate = new Date(
      today.getFullYear() + 1,
      month - 1,
      day
    );
  }

  // Remove time portion to avoid timezone/DST problems
  const todayDateOnly = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const nextBirthdayDateOnly = new Date(
    nextBirthdayDate.getFullYear(),
    nextBirthdayDate.getMonth(),
    nextBirthdayDate.getDate()
  );

  const difference =
    nextBirthdayDateOnly - todayDateOnly;

  const nextBirthdays = Math.round(
    difference / (1000 * 60 * 60 * 24)
  );

  setNextBirthday(nextBirthdays);
};

  return (
    <div className='md:bg-indigo-500 bg-white h-[100vh] flex justify-center md:items-center'>
      <div className="bg-white  rounded-xl p-5 h-[450px] w-[400px]  flex justify-center ">
        <div className="flex flex-col">
        <h1 className='text-indigo-600 font-semibold text-2xl mt-5 text-center'>Age Calculator</h1>
        <label className='text-gray-500 mt-10 text-sm'>Enter your date of birth</label>
        <input type="date" onChange={(e)=>{setDob(e.target.value)}} className=" mt-2 w-[300px] p-1 text-indigo-500 rounded-md border border-indigo-200 focus:outline-none"/>
       {doberror? <p className='text-xs text-red-500'>Please Enter DOB</p> : ""}
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
