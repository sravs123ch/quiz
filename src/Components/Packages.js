import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assests/Images/287839.jpg";
import image2 from "../assests/Images/img1.jpg";
import image3 from "../assests/Images/img2.jpg";
import image4 from "../assests/Images/img3.jpg";
import image5 from "../assests/Images/img4.jpg";
import image6 from "../assests/Images/img5.jpg";
import image7 from "../assests/Images/img6.jpg";
import image8 from "../assests/Images/img7.jpg";
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const navigate = useNavigate();

  const travelPackages = [
    {
      title: "Beach Vacation",
      description: "Enjoy a relaxing week at the beach!",
      price: "$499",
      image: image1,
    },
    {
      title: "Mountain Adventure",
      description: "Experience the thrill of mountain climbing!",
      price: "$799",
      image: image2,
    },
    {
      title: "City Tour",
      description: "Explore the vibrant life of the city!",
      price: "$299",
      image: image3,
    },
  ];

  const carouselImages = [image1, image2, image3, image4];

  const hotelImages = [image5, image6, image7, image8];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const hotelSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center overflow-hidden">
      <div className="w-full mb-6">
        <Slider {...settings}>
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Carousel ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Carousel Section */}
      <h1 className="text-4xl font-bold text-white mb-6">
        Available Travel Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {travelPackages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <div className="h-40 bg-gray-300 rounded mb-4 flex items-center justify-center">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h2 className="text-xl font-bold">{pkg.title}</h2>
            <p className="text-gray-700 mt-2">{pkg.description}</p>
            <p className="text-lg font-semibold mt-4">{pkg.price}</p>
            <button className="bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition duration-200 w-full">
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* New Carousel for Hotels Recommended by Our Travel Experts */}
      <div className="mt-10 w-full max-w-6xl">
        <div className="w-full">
          <Slider {...hotelSettings}>
            {hotelImages.map((img, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={img}
                  alt={`Hotel ${index + 1}`}
                  className="w-56 h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="mt-10 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          Hotels Recommended by Our Travel Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Andaman</h3>
            <p className="text-gray-700">20 top-selling hotels</p>
            <p className="text-lg font-semibold mt-2">From ₹2,000 Per Night</p>
            <button className="bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition duration-200 w-full">
              View Hotels
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Kerala</h3>
            <p className="text-gray-700">18 top-selling hotels</p>
            <p className="text-lg font-semibold mt-2">From ₹1,800 Per Night</p>
            <button className="bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition duration-200 w-full">
              View Hotels
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Himachal</h3>
            <p className="text-gray-700">19 top-selling hotels</p>
            <p className="text-lg font-semibold mt-2">From ₹1,000 Per Night</p>
            <button className="bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition duration-200 w-full">
              View Hotels
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section with Descriptions */}
      <div className="mt-10 w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          Your TravelOne Credit Card also gives you:
        </h2>
        <ul className="list-none pl-0">
          <li className="flex items-center mb-2">
            <span className="text-green-600 text-2xl mr-2">✔️</span>
            <span className="font-bold text-lg">
              15% off at Yatra
              <br />{" "}
              <span className="font-normal text-base">
                Save on international and domestic flights and hotels when you
                book through the Yatra app or website. T&Cs apply (PDF).
              </span>
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-600 text-2xl mr-2">✔️</span>
            <span className="font-bold text-lg">
              15% off at EaseMyTrip
              <br />{" "}
              <span className="font-normal text-base">
                Save on international and domestic flights and hotels when you
                book through the EaseMyTrip app or website. T&Cs apply (PDF).
              </span>
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-600 text-2xl mr-2">✔️</span>
            <span className="font-bold text-lg">
              15% off at Paytm
              <br />{" "}
              <span className="font-normal text-base">
                Save on international and domestic flights when you book through
                the Paytm app or website. T&Cs apply (PDF).
              </span>
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-600 text-2xl mr-2">✔️</span>
            <span className="font-bold text-lg">
              15% off at ClearTrip
              <br />{" "}
              <span className="font-normal text-base">
                Save on international and domestic flights when you book through
                the ClearTrip app or website. T&Cs apply (PDF).
              </span>
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-600 text-2xl mr-2">✔️</span>
            <span className="font-bold text-lg">
              11% off at StayVista
              <br />
              <span className="font-normal text-base">
                Stay for less when you make a hotel booking through the
                StayVista website (max 2 bookings per card per year; max saving
                per booking INR3,000). T&Cs apply (PDF).
              </span>
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-600 text-2xl mr-2">✔️</span>
            <span className="font-bold text-lg">
              10% off at Zomato
              <br />
              <span className="font-normal text-base">
                Enjoy up to 10% off on events and dining through the Zomato app.
                Plus, get 2 for 1 movie tickets (max 2 times per month; max
                single ticket value INR200). T&Cs apply (PDF).
              </span>
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-600 text-2xl mr-2">✔️</span>
            <span className="font-bold text-lg">
              Up to 20% off on duty-free
              <br />{" "}
              <span className="font-normal text-base">
                Save 20% on duty-free shopping via the AdaniOne app or website
                (minimum order value INR8,000; once per card per year; max
                savings INR3,000). T&Cs apply (PDF).
              </span>
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-600 text-2xl mr-2">✔️</span>
            <span className="font-bold text-lg">
              Access to the top golf courses in India
              <br />{" "}
              <span className="font-normal text-base">
                Enjoy 4 complimentary rounds of golf and 12 complimentary
                lessons per calendar year (max 1 per calendar month). Plus, get
                50% off your green fees for additional rounds. T&Cs apply.
              </span>
            </span>
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Who can apply?</h3>
        <p className="text-gray-700 mb-4">To apply, you must:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Be at least 18 years old</li>
          <li>Have a valid ID proof</li>
          <li>Meet the income criteria</li>
        </ul>

        {/* Rewards Dashboard Link */}
        <div className="mt-10 w-full flex justify-center">
          <button
            onClick={() => navigate("/rewards")}
            className="bg-green-600 text-white py-2 rounded mt-4 hover:bg-green-700 transition duration-200 w-full max-w-sm"
          >
            Go to Rewards Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
