
const Header = () => {
  return (
    <>
        <div className="bg-indigo-500 w-full flex items-center justify-evenly">
            <div className="lg:w-1/3 flex items-center justify-center w-full">
                <img src="./form.svg" alt="Logo" className="py-8" width="80px" />
            </div>
            <div className="lg:w-2/3 hidden lg:flex items-center justify-center">
                <ul className="flex items-center">
                    <li className="text-white font-bold text-3xl px-12">About me</li>
                    <li className="text-white font-bold text-3xl px-12">My projects</li>
                    <li className="text-white font-bold text-3xl px-12">Contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header
