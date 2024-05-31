import useEdit from '../hooks/useEdit'

const Info = () => {

  const { setName, setMajor, setGrade, setEdit, setAlert, arrayData, setArrayData, setIndex } = useEdit();

  const handleRemove = (index) => {
    const newArray = arrayData.filter((data, i) => i !== index);
    setArrayData(newArray);
    setAlert({
      type: 'Success',
      msg: 'Your info has been removed successfully!'
    });
    setEdit(true);
  }

  const handleEdit = (index) => {
    setName(arrayData[index].name);
    setMajor(arrayData[index].major);
    setGrade(arrayData[index].grade);
    setIndex(index);
    setEdit(true);
  }

return (
  <>
    <main className="container mx-auto md:grid md:grid-cols-2 mt-16 gap-12 p-5 items-center">
      <div className='mt-20 md:mt-5 md:shadow-lg px-5 py-10 rounded-xl bg-white'>
        {arrayData.map((data, index) => (
          <div key={index}>
            <div className="my-6">
              <h1 className="text-4xl font-bold">Name:</h1>
              <span className='uppercase text-xl'>{data.name}</span>
            </div>
            <div className="my-6">
              <h1 className="text-4xl font-bold">Major:</h1>
              <span className='uppercase text-xl'>{data.major}</span>
            </div>
            <div className="my-6">
              <h1 className="text-4xl font-bold">Grade:</h1>
              <span className='uppercase text-xl'>{data.grade}</span>
            </div>
            <div className='md:flex justify-evenly items-center'>
              <button
                className="bg-indigo-700 text-white font-bold rounded-xl w-full py-3 uppercase mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto px-16"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white font-bold rounded-xl w-full py-3 uppercase mt-5 hover:cursor-pointer hover:bg-red-900 md:w-auto px-16"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  </>
)

}

export default Info
