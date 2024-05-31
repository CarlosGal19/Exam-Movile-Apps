import { useContext } from "react";
import Info from "./Info";
import { EditContext } from "../context/editProvider";
import Alert from './Alert';

const Form = () => {

  const { name, setName, grade, setGrade, major, setMajor, alert, setAlert, arrayData, setArrayData, index, setIndex} = useContext(EditContext);

  const handleSubmit = (e) => {
    console.log(index);
    e.preventDefault();
    if([name, grade, major].includes('')) {
      setAlert({
        type: 'alert',
        msg: 'All fields are required'
      });
      return;
    }
    if(index === ''){
      setArrayData([...arrayData, {name, grade, major}]);
      setName('');
      setGrade('');
      setMajor('');
      setAlert('');
      return;
    }
    const newArray = arrayData.map((data, i) => i === index ? {name, grade, major} : data);
    setArrayData(newArray);
    setAlert({
      type: 'Success',
      msg: 'Your info has been updated successfully!'
    });
    setIndex('');
  }

  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-16 gap-12 p-5 items-center">
        <Info/>
        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
          {
            alert && <Alert type={alert.type} msg={alert.msg} />
          }
          <form onSubmit={handleSubmit}>
            <div className="my-6">
              <label htmlFor="name" className="uppercase text-gray-600 block text-xl font-bold">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" placeholder="Register name" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
            </div>
            <div className="my-6">
              <label htmlFor="grade" className="uppercase text-gray-600 block text-xl font-bold">Grade</label>
              <input value={grade} onChange={e => setGrade(e.target.value)} type="text" id="grade" placeholder="Register grade" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
            </div>
            <div className="my-6">
              <label htmlFor="major" className="uppercase text-gray-600 block text-xl font-bold">Major</label>
              <input value={major} onChange={e => setMajor(e.target.value)} type="text" id="major" placeholder="Your major" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
            </div>
            <input type="submit" value="Add" className="bg-indigo-700 text-white font-bold rounded-xl w-full py-3 uppercase mt-5  hover:cursor-pointer hover:bg-indigo-900 md:w-auto px-16" />
          </form>
        </div>
      </main>
    </>
  )
}

export default Form
