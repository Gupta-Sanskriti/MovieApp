import {FaUserCircle} from 'react-icons/fa';


const Profile = ()=>{
    return(
        <div className=" p-5 pl-10 pr-10 text-gray-800 mt-20">
            <h1 className="text-3xl pb-5 flex justify-center">Profile</h1>
            <div className="grid  place-content-center shadow rounded-2xl bg-slate-100 p-5 lg:w-72 lg:m-auto">
                <FaUserCircle className='flex justify-center w-auto text-9xl m-5 mb-2 '/>
                <h1 className='text-2xl flex justify-center'>Sanskriti</h1>
                <div className="grid place-content-center m-2">
                    <p className='p-2 shadow rounded-lg'>+91-9876543210</p>
                </div>

            </div>
            <div className='mb-10'>
                <h1 className=" text-center text-2xl m-5 mb-0">Seems like you are not a Premium member!</h1>
                <p className='text-center'>Subscribe to the MovieApp to enjoy uninterupted services.</p>
            </div>
        </div>
    )
}
export default Profile;