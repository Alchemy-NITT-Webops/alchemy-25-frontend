const Accomodation = () => {
    // Example coordinates - replace with actual campus coordinates
    const campusLocation = { lat: 20.1458, lng: 85.6741 }; // Replace with actual coordinates

    return (
        <div className=" rounded-md overflow-hidden w-full flex-col flex items-center gap-20 justify-start">
            <div className="flex justify-center lg:-mb-24 sm:-mb-20 -mb-16 h-fit w-full items-center">
                <div className="about lg:text-8xl font-extrabold flex h-fit flex-col w-fit justify-center text-4xl md:text-7xl p-5 items-start">
                    <div className="w-fit font-Azora text-[#EC9E52]">
                        A
                    </div>
                    <div className="w-fit ml-5 -mt-7 md:ml-8 md:-mt-14 lg:ml-12 lg:-mt-14  font-Azora text-[#EC9E52]">
                        CCOMMODATION
                    </div>
                </div>
                <div className="accomodationcontent w-full bg-black h-[2px] ml-4 sm:ml-10 mr-5 rounded-sm shadow-sm" />
            </div>

            <div className="text-black font-sans gap-5 text-2xl overflow-hidden p-5 sm:p-10 flex flex-col items-start justify-start h-full w-full">
                <div>
                    Alchemy'24 is happy to provide accommodation for all the participants and ensure a comfortable experience throughout the duration. Register to avail the accommodation.
                </div>
                <div className="text-[#03652E]">
                    Accommodation Fee:
                    <span className="text-black">₹ 375</span>
                    <div className="text-black">
                        (Including Food Coupon)
                    </div>
                </div>

                <div className="text-[#03652E]">
                    Caution Deposit:
                    <span className="text-black">₹ 100</span>
                </div>

                {/* Google Maps Integration */}
                <div className="w-full mt-8">
                    <h2 className="text-[#03652E] text-2xl mb-4">Campus Location</h2>
                    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Google Maps"
                            className="w-full h-full border-0"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBYcWv5aBel9Ks8SjWQcKSQReZqn_9xfco&q=${campusLocation.lat},${campusLocation.lng}&zoom=15`}
                            allowFullScreen
                        />
                    </div>
                    <div className="mt-4 text-base text-gray-600">
                        * You can zoom in/out and drag the map to explore the surroundings
                    </div>
                </div>

                {/* Optional: Add directions button */}
                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${campusLocation.lat},${campusLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-[#03652E] text-white px-6 py-2 rounded-lg hover:bg-[#024423] transition-colors"
                >
                    Get Directions
                </a>
            </div>
        </div>
    );
};

export default Accomodation;