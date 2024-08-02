import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';



const BooksCard = ({ books }) => {
  console.log("Books in Card:", books); // Log to verify data

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {books.length > 0 ? (
        books.map((item) => (
          <div 
            key={item._id} 
            className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
          >
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
              {item.publishYear}
            </h2>
            <h4 className='my-2 text-gray-500'>{item._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
              <PiBookOpenTextLight className='text-red-300 text-2xl' />
              <h2 className='my-1'>{item.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
              <BiUserCircle className='text-red-300 text-2xl' />
              <h2 className='my-1'>{item.author}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
              {/* Action buttons or additional elements can be added here */}
            </div>
          </div>
        ))
      ) : (
        <div className='text-center py-4'>No books available</div>
      )}
    </div>
  );
};

export default BooksCard;
