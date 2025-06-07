import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh'; // Material UI icon for Refresh
import SpeakerIcon from '@mui/icons-material/Speaker'; // Material UI icon for Speaker
import MapIcon from '@mui/icons-material/Map'; // Material UI icon for Map
import SearchIcon from '@mui/icons-material/Search'; // Material UI icon for Search
import TextFieldsIcon from '@mui/icons-material/TextFields'; // Material UI icon for Text Fields

const TopHeader = () => {
  return (
    <header  className="bg-gradient-to-r from-green-600 via-green-400 to-green-100 text-white py-1 flex justify-between items-center px-10">
      <div className="flex items-center">
        <span className="font-semibold text-lg">उत्तर प्रदेश सरकार</span>
        <span className="ml-2 text-sm">| Government of Uttar Pradesh</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white bg-orange-500 p-1 rounded-full flex items-center justify-center">
          <RefreshIcon className="" /> {/* Material UI icon for Skip/Refresh */}
          <span className="ml-2 text-sm">Skip</span>
        </button>
        <button className="text-white bg-orange-500 p-1 rounded-full flex items-center justify-center">
          <SpeakerIcon  className="" /> {/* Material UI icon for Speaker */}
        </button>
        <button className="text-white bg-orange-500 p-1 rounded-full flex items-center justify-center">
          <MapIcon className="" /> {/* Material UI icon for Map */}
        </button>
        <button className="text-white bg-orange-500 p-1 rounded-full flex items-center justify-center">
          <SearchIcon className="" /> {/* Material UI icon for Search */}
        </button>
        <button className="text-white bg-orange-500 p-1 rounded-full flex items-center justify-center">
          <TextFieldsIcon siz  className="" /> {/* Material UI icon for Text */}
        </button>
      </div>
    </header>
  );
}

export default TopHeader;
