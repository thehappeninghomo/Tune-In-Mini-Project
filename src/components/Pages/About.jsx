import React from 'react';
import './css/About.scss';
import Container from "../fragment/Container";
import Developer from "../fragment/Developer";
import Attribution from "../fragment/Attribution";

const About = () => {
    return (
        // <Container>
        //     <div className={"About"}>
        //         {/*<div className="Dark-mode">
        //             <h5>Dark mode to be available soon</h5>
        //             <IconButton>
        //                 <Brightness3/>
        //             </IconButton>
        //         </div>*/}
        //         {/* <Developer/> */}

        //         <Attribution/>
        //     </div>
        // </Container>
        <div>

        <section className="Aboutus">
<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 heading" style={{textAlign:"center"}}>About Us</h1>
<p style={{padding:"40px"}}>“Tune In” is an online music streaming website for getting access to the songs that you will love. A user can play their favourite music online for free . One can enjoy songs anytime they want.</p>
<p style={{padding:"40px"}}>We have many websites but those are always demanding for logging in and signing up.  For this, They flashes so many unwanted pop-ups coming in present websites which are misleading the users from the requirement of songs. Therefore we have created a one-stop music website for all music lovers where you can listen to song without any hassle and without worrying about having to receive pop-ups. It's completely upto your will if you want to sign in or not.</p>
        </section>
        <section className="text-gray-700 body-font team">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 heading">Our Team</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Each and every our group member is important for our project, we are working on it to make it usable.</p>
            </div>
            <div className="flex flex-wrap -m-2">
               <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                   <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                       <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIqz7LykuyQ35iYXuhEyKvboKGLky_6gepw&usqp=CAU" height="100px" width="100px"/>
                       <div className="flex-grow">
                           <h2 className="text-gray-900 title-font font-medium heading">Mr. Vinay Agrawal</h2>
                           <p>Project Mentor</p>
                       </div>
                   </div>
               </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://cdn1.vectorstock.com/i/1000x1000/50/65/avatar-female-vector-5945065.jpg" height="100px"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium heading">Sonali Kushwaha</h2>
                            <p>Group Member</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" height="100px"  />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium heading">Jaish Chimnani</h2>
                            <p>Group Member</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://image.shutterstock.com/image-vector/face-happy-girl-avatar-laughing-260nw-1459862774.jpg" height="100px"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium heading">Shruti Pathak</h2>
                            <p>Group Member</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg" height="100px">
                     </img>   <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium heading">Shweta Sundrani</h2>
                            <p>Group Member</p>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
    </section>
        </div>
    );
}

export default About;
