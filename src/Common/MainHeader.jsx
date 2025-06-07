import { Link } from "react-router-dom";


const MainHeader = () => {
  return (
    <header className=" text-white py-1 flex items-center justify-between px-10 ">

      <div className="flex items-center ">
        <Link to="/">
        <div className="bg-white" >
          <img src="/uprev.png" alt="Logo" className="w-44 h-24 mr-10" /> {/* Adjust logo size */}
        </div>
        </Link>
    
      </div>

      <div className="bg-white  w-full  flex justify-center items-center" >
      <div className="text-start flex-1 ml-2
      ">
        <h1 className="text-2xl  text-orange-700 font-bold uppercase">
    Uttar Pradesh Renewable and EV Infrastructure Limited
        </h1>
        <p className="text-lg  text-orange-700 font-bold">
          Department of Additional Sources of Energy, Government of Uttar Pradesh
        </p>
      </div>
      <div className="flex items-center space-x-4">
        {/* Seals */}
        <img src="Up_logo_latest.png" alt="Seal 1" className="w-24 h-24" />
        <img src="http://upneda.org.in/MediaGallery/Logo/mahakumbh2025.png" alt="Seal 2" className="w-24 h-24" />
        {/* <img src="path_to_seal3.png" alt="Seal 3" className="w-12 h-12" /> */}
      </div>
      </div>
      
    </header>
  );
}

export default MainHeader;
