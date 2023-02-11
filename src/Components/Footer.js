const Footer = () =>{
    return (
        <div className="bg-gray-800 text-white">
            <div className="flex mr-10 ml-10 gap-10  ">
                <ul className="m-2 leading-loose  p-8 w-[50vw]	shadow-xl rounded-2xl">
                    <li>About</li>
                    <li>Movie App</li>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                    <li>FAQ</li>
                    <li>Feedback</li>
                    <li>Career</li>
                </ul>
                <ul className="m-2 leading-loose p-8 w-[50vw] shadow-xl rounded-2xl">
                    <li>Contact Us</li>
                    <li>Help Center</li>
                    <li>Only on Movie App</li>
                    <li>Media Center</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div className="flex justify-center p-5">
                All rights reserved &copy; 2023
            </div>
        </div>
    )
}

export default Footer;