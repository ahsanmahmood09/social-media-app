import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const Followers = () => {
    const { id } = useParams();
    const { user } = useSelector(state => state.user);
    const diffUser = useSelector(state => state.app.user);


    return (
        <div>
            <span className='flex justify-end text-xl text-gray-500 '>{diffUser ? diffUser.followers.length : user.followers.length} followers</span>
            {diffUser ? diffUser.followers.map(id => <Link key={id} className=' flex gap-2 items-center cursor-pointer p-2 bg-white shadow-lg ' to={`/profile/${id}`}>
                <img className='h-10 w-10 object-contain rounded-full cursor-pointer' src='https://static.intercomassets.com/avatars/4439477/square_128/Glasses_Blue-1614106445.png' alt="" />
                <span>{id === user._id ? `You` :id}</span>
            </Link>) : user.followers.map(id => <Link key={id}className=' flex gap-2 items-center cursor-pointer p-2 bg-white shadow-lg ' to={`/profile/${id}`}>
                <img className='h-10 w-10 object-contain rounded-full cursor-pointer' src='https://static.intercomassets.com/avatars/4439477/square_128/Glasses_Blue-1614106445.png' alt="" />
                <span>{id}</span>
            </Link>)}

        </div>
    )
}

export default Followers