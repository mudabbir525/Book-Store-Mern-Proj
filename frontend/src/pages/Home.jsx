import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        // Simulate API data
        setTimeout(() => {
            setBooks([
                { _id: '1', title: 'It Ends with Us', author: 'Colleen Hoover', publishYear: 2016 },
                { _id: '2', title: 'Gone Girl', author: 'Gillian Flynn', publishYear: 2012 },
                { _id: '3', title: 'The Goldfinch', author: 'Donna Tartt', publishYear: 2013 },
                { _id: '4', title: 'The Underground Railroad', author: 'Colson Whitehead', publishYear: 2016 },
                { _id: '5', title: 'Where the Crawdads Sing', author: 'Delia Owens', publishYear: 2018 },
                { _id: '6', title: 'Normal People', author: 'Sally Rooney', publishYear: 2018 },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Books List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : showType === 'table' ? (
                <BooksTable books={books} />
            ) : (
                <BooksCard books={books} />
            )}
        </div>
    );
};

export default Home;
