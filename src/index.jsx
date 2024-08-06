import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Navbar(){
    return(
        <div className="bg-container h-[750px] md:h-[800px] lg:h-[900px] rounded-b-lg">
          <div className="flex flex-row justify-between py-5 px-5">
             <h1 className="head text-4xl hover:text-[#FFFB00]">Travel Goals</h1>
             <div className="flex gap-5">
                <a className="font-[Poppins] text-lg hover:bg-[#FFFB00] hover:px-3 hover:py-2 hover:cursor-pointer" href="https://travelpage12.netlify.app/places">Destinations</a>
                <a className="font-[Poppins] text-lg hover:bg-[#FFFB00] hover:px-3 hover:py-2 hover:cursor-pointer" href="./index.jsx">About</a>
             </div>
          </div>
          <div class="flex flex-col justify-center items-center my-52 md:my-48 lg:my-72">
            <div class="bg-[#414B4A] text-white text-center rounded-xl px-5 py-4 md:px-20 md:py-10 space-y-4">
              <h1 class="font-[Poppins] text-5xl">Joe's Travel Page</h1>
              <p class="font-[Poppins] text-lg">Let's explore the world together</p>
              <div>
                 <a href="https://travelpage12.netlify.app/places">
                    <button class="bg-[#FFFB00] text-black rounded-md px-4 py-3 text-lg">Discover places</button>
                 </a>
              </div>
            </div>
          </div>
        </div>
    );
}

function Cardsection(){
    return(
        <div className="bg-[#CCF4F1] bg-cover h-[950px] md:h-[750px] lg:h-[500px]">
            <div className="2xl:container mx-auto">
                <div className="h-[90%] mx-auto">
                    <div className="flex flex-col justify-center items-center gap-5">
                       <h1 className="font-[Poppins] text-[#3b4140] text-[40px] text-center py-5 md:py-10 lg:py-14">Highlights</h1>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          <a href="https://travelpage12.netlify.app/places">

                            <div className="text-center space-y-5 hover:cursor-pointer">
                              <img src="https://ik.imagekit.io/c3q3h7pex/Travel_Page/barcelona.jpg?updatedAt=1722951753395" alt="card-1-img" className="w-[280px] h-[187.094px] rounded-lg shadow-black shadow-md"/>
                              <h1 className="font-[Poppins] text-[24px] text-[#7c7b7b]">BARCELONA <span className="font-[Poppins] text-[24px] text-[#007475]">SPAIN</span></h1>
                            </div>
                          
                          </a>
                          <a href="https://travelpage12.netlify.app/places">
                            <div className="text-center space-y-5">
                              <img src="https://ik.imagekit.io/c3q3h7pex/Travel_Page/miami.jpg?updatedAt=1722951816006" alt="card-2-img" className="w-[305px] h-[187.094px] rounded-lg shadow-black shadow-md"/>
                              <h1 className="font-[Poppins] text-[24px] text-[#7c7b7b]">MIAMI <span className="font-[Poppins] text-[24px] text-[#007475]">USA</span></h1>
                            </div>
                          </a>
                          <a href="https://travelpage12.netlify.app/places">
                            <div className="text-center space-y-5">
                              <img src="https://ik.imagekit.io/c3q3h7pex/Travel_Page/munich.jpg?updatedAt=1722951852628" alt="card-3-img" className="w-[280px] h-[187.094px] rounded-lg shadow-black shadow-md"/>
                              <h1 className="font-[Poppins] text-[24px] text-[#7c7b7b]">MUNICH <span className="font-[Poppins] text-[24px] text-[#007475]">GERMANY</span></h1>
                            </div>
                          </a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Followsection(){
    return(
        <div>
            <div class="flex flex-col justify-center items-center gap-4">
            <h1 class="text-[24px] font-semibold pt-4">Follow Us</h1>
            <div class="flex justify-center items-center gap-3">
              <div class="bg-teal-400 rounded-full h-16 w-16 flex flex-col justify-center items-center hover:cursor-pointer">
                <svg viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em" >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
                </svg>
              </div>

              <div class="bg-teal-400 rounded-full h-16 w-16 flex flex-col justify-center items-center hover:cursor-pointer">
                <svg viewBox="0 0 920 1000" fill="currentColor" height="2em" width="2em" >
                  <path d="M920 214c-24 36-55.333 68.667-94 98v24c0 86.667-20 170-60 250S664 733.667 580 789s-180.667 83-290 83c-106.667 0-203.333-28-290-84 9.333 1.333 24.667 2 46 2 88 0 166-26.667 234-80-41.333-1.333-78-14-110-38s-54-55.333-66-94c6.667 2.667 18 4 34 4 17.333 0 34-2 50-6-44-9.333-80-31.333-108-66s-42-74.667-42-120v-2c24 13.333 52 21.333 84 24-56-38.667-84-91.333-84-158 0-32 8.667-63.333 26-94 102.667 125.333 232.667 190.667 390 196-4-12-6-26-6-42 0-52 18.333-96.333 55-133s81.667-55 135-55c54.667 0 100 19.333 136 58 40-8 80-22.667 120-44-13.333 44-40.667 78.667-82 104 37.333-5.333 73.333-15.333 108-30" />
                </svg>
              </div>

              <div class="bg-teal-400 rounded-full h-16 w-16 flex flex-col justify-center items-center hover:cursor-pointer">
                <svg fill="currentColor" viewBox="0 0 16 16" height="1.9em" width="1.9em">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
              </div>

            </div>
          </div>
        </div>
    );
}

function Footersection(){
    return(
        <div className="bg-[#0D2436] mt-10 py-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <img src="https://ik.imagekit.io/c3q3h7pex/Travel_Page/360_F_330458470_P0HcIvufmbiaxp9SL4DZmkoncWCmhbsx-removebg-preview.png?updatedAt=1722955281729" alt="Logo-img" className="w-[250px]" />
              <p class="text-[16px] text-gray-400">Travelgoals@tourism.com</p>
              <p class="text-[16px] text-gray-400">123 Ayur Vigyan Nagar, New Delhi, India.</p>
            </div>
        </div>
    );
}

function Callcomponents(){
    return(
        <div>
          <Navbar/>
          <Cardsection/>
          <Followsection/>
          <Footersection/>
        </div>
    );

}


root.render(<Callcomponents/>);
