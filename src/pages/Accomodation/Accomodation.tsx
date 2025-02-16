import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import AnimatedTextCharacter from '../../components/AnimatedTextCharacter';

const Accommodation = () => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const campusLocation = { lat: 10.76344, lng: 78.81543 };

    useEffect(() => {
        // Cleanup previous map instance before re-creating
        if (mapInstanceRef.current) {
            mapInstanceRef.current.remove();
            mapInstanceRef.current = null;
        }

        if (mapRef.current) {
            mapInstanceRef.current = L.map(mapRef.current,
                {
                    scrollWheelZoom: false,
                }
            ).setView([campusLocation.lat, campusLocation.lng], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstanceRef.current);
            const customIcon = L.divIcon({
                className: 'custom-marker',
                html: `
                    <div class="relative flex items-center justify-center">
                        <div class="w-6 h-6 bg-orange-500 border-2 border-white rounded-full shadow-lg animate-pulse"></div>
                        <div class="absolute w-10 h-10 bg-orange-500 opacity-30 rounded-full animate-ping"></div>
                    </div>
                `,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

            L.marker([campusLocation.lat, campusLocation.lng], { icon: customIcon })
                .addTo(mapInstanceRef.current)
                .bindPopup('📍 NIT Trichy')
                .openPopup();


        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div className="rounded-md mt-20 overflow-hidden w-full flex-col flex items-center gap-20 justify-start">
            <div className="flex justify-center lg:-mb-24 sm:-mb-20 -mb-16 h-fit w-full items-center">
                <div className="about lg:text-8xl font-extrabold flex h-fit flex-col w-fit justify-center text-4xl md:text-7xl p-5 items-start">
                    <div className="w-fit font-Azora text-[#EC9E52]">
                        <AnimatedTextCharacter text={"Accommodation"} />
                    </div>
                </div>
                <div className='w-full' />
            </div>

            <div className="text-white md:text-xl font-sans gap-5 overflow-hidden px-5 sm:p-10 flex flex-col items-start justify-start h-full w-full">
                <div>
                    Alchemy '25 is happy to provide accommodation for all the participants and ensure a comfortable experience throughout the duration. Register to avail the accommodation.
                </div>
                <div className="text-[#D68C45]">
                    Accommodation Fee:
                    <span className="text-white ml-2">₹ 250</span>
                    <div className="text-white">
                        (Including Food Coupon)
                    </div>
                </div>

                <div className="text-[#D68C45]">
                    Caution Deposit:
                    <span className="text-white ml-2">₹ 150</span>
                </div>

                <div className="w-full mt-8">
                    <h2 className="text-[#D68C45] text-2xl mb-4">Campus Location</h2>
                    <div
                        ref={mapRef}
                        className="w-full h-[50vh] rounded-lg overflow-hidden shadow-lg"
                        style={{ minHeight: "30vh" }} // Ensuring height is set properly
                    ></div>
                </div>

                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${campusLocation.lat},${campusLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-[#D68C45] text-white px-6 py-2 rounded-lg hover:bg-[#D68C45]/80 transition-colors duration-300"
                >
                    Get Directions
                </a>
            </div>
        </div>
    );
};

export default Accommodation;
