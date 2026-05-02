import { useState } from 'react';
import { Phone, CheckCircle, Shield, DollarSign, Clock, Users, Car, Sparkles, MessageCircle } from 'lucide-react';
import sendMail from './lib/Mailer'

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    pickup: '',
    destination: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log('Booking submitted:', formData);
    try {
      const response = await sendMail(
        formData.name,
        `Pickup: ${formData.pickup}, Destination: ${formData.destination}, Contact: ${formData.contact}`
      );
      alert(response.message);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to send booking enquiry');
    } finally {
      setLoading(false);
    }
  };

  const cars = [
    {
      image: 'https://avgmotors.co.in/wp-content/uploads/2024/05/Prime-Novel-Orange-1-1024x577.png',
      name: 'Maruti Swift',
      tag: 'City rides ke liye popular choice'
    },
    {
      image: 'https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/inn1.jpeg',
      name: 'Toyota Innova Crysta',
      tag: 'Family aur long-route travel ka favourite'
    },
    {
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-4.png?isig=0&q=80',
      name: 'Mahindra Scorpio',
      tag: 'Rough roads aur highway dono ke liye'
    },
    {
      image: 'https://c.ndtvimg.com/2020-12/i5fas99_toyota-fortuner-facelift_625x300_23_December_20.png',
      name: 'Toyota Fortuner',
      tag: 'Premium SUV with strong road presence'
    },
    {
      image: 'https://cdn.carhp.in/nexa/maruti_suzuki_dzire_pearl_arctic_white.jpg?format=webp&width=800&q=75',
      name: 'Maruti Dzire',
      tag: 'Daily commute aur outstation ke liye trusted'
    },
    {
      image: 'https://static.caronphone.com/public/brands/20/685/3200/3200_1759751953.webp',
      name: 'Mahindra Thar',
      tag: 'Adventure aur rural routes ke liye'
    },
    {
      image: 'https://htcms-prod-images.s3.ap-south-1.amazonaws.com/ht/auto/cms-images/marutisuzuki_ertiga/multi-images/colour_marutisuzuki-ertiga_pearl-metallic-arctic-white_600x400_1600x900.jpg',
      name: 'Maruti Ertiga',
      tag: 'Group aur family booking ke liye spacious'
    },
    {
      image: 'https://img.gaadicdn.com/images/car-images/large/Mahindra/Bolero/10754/1760013521659/STEALTH-BLACK_282828.jpg',
      name: 'Mahindra Bolero',
      tag: 'Gaon se city travel mein sabse common'
    },
    {
      image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/138895/safari-exterior-right-front-three-quarter-40.png?isig=0&q=80&q=80',
      name: 'Tata Safari',
      tag: 'Comfortable SUV for long drives'
    },
    {
      image: 'https://avgmotors.co.in/wp-content/uploads/2022/03/Wagon-R-Pearl-Bluish-Black-876x535.png',
      name: 'Maruti WagonR',
      tag: 'Affordable aur practical city car'
    },
    {
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1755765115423/front-left-side-47.jpg?imwidth=420&impolicy=resize',
      name: 'Hyundai Creta',
      tag: 'Modern SUV with premium comfort'
    },
    {
      image: 'https://www.livemint.com/lm-img/img/2023/06/28/600x338/xuv700_1678622384580_1687933259686.jpeg',
      name: 'Mahindra XUV700',
      tag: 'Premium family SUV for highway trips'
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <a
        href="https://wa.me/919431674083?text=Hi!%20I%20would%20like%20to%20book%20a%20ride"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-3xl"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-lg md:text-2xl tracking-tight" style={{ color: '#0a2463' }}>
            <span style={{ color: '#d4af37' }}>Maa Lakshmi</span> Tour and Travels
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#0a2463] transition-colors">Home</a>
            <a href="#fleet" className="text-gray-700 hover:text-[#0a2463] transition-colors">Fleet</a>
            <a href="#about" className="text-gray-700 hover:text-[#0a2463] transition-colors">About</a>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all hover:opacity-90" style={{ backgroundColor: '#0a2463', color: 'white' }}
              onClick={() => window.location.href = 'tel:+919431674083'}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1774014772899-637b8fcbaca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYSUyMGhpZ2h3YXklMjByb2FkJTIwdHJpcCUyMHNjZW5pYyUyMGpvdXJuZXl8ZW58MXx8fHwxNzc3NjI1Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080)'
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 36, 99, 0.85)' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl mb-6 leading-tight" style={{ color: 'white' }}>
                Reliable Long Distance Travel, <span style={{ color: '#d4af37' }}>Anytime</span>
              </h1>
              <p className="text-xl text-white/80 max-w-xl leading-relaxed">
                Safe, affordable and comfortable rides across cities
              </p>
            </div>

            <div className="order-1 lg:order-2 bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl mb-2" style={{ color: '#0a2463' }}>Book Your Ride</h2>
              <p className="text-sm text-gray-500 mb-6">All enquiries are sent directly to admin email</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] bg-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Contact Number</label>
                  <input
                    type="tel"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] bg-white"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Pickup Location</label>
                  <input
                    type="text"
                    value={formData.pickup}
                    onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] bg-white"
                    placeholder="e.g., Mumbai"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Destination</label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] bg-white"
                    placeholder="e.g., Pune"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-4 rounded-lg transition-all ${loading ? 'cursor-not-allowed opacity-50' : 'hover:opacity-90'}`}
                  style={{ backgroundColor: '#0a2463', color: 'white' }}
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Booking'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#0a2463' }}>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl mb-2" style={{ color: '#0a2463' }}>500+</div>
              <div className="text-gray-600">Rides Completed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#0a2463' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl mb-2" style={{ color: '#0a2463' }}>Safety First</div>
              <div className="text-gray-600">Your Safety is Our Priority</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#0a2463' }}>
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl mb-2" style={{ color: '#0a2463' }}>Best Price</div>
              <div className="text-gray-600">Fares Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ color: '#0a2463' }}>
            Available Cars
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Choose from our premium fleet of well-maintained vehicles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2" style={{ color: '#0a2463' }}>{car.name}</h3>
                  <p className="text-sm" style={{ color: '#d4af37' }}>{car.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center mb-16" style={{ color: '#0a2463' }}>
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-white shadow-md">
                <Users className="w-8 h-8" style={{ color: '#0a2463' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#0a2463' }}>Professional Drivers</h3>
              <p className="text-gray-600">Experienced and courteous drivers for your comfort</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-white shadow-md">
                <Clock className="w-8 h-8" style={{ color: '#0a2463' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#0a2463' }}>On-time Pickup</h3>
              <p className="text-gray-600">Punctual service, every single time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-white shadow-md">
                <Sparkles className="w-8 h-8" style={{ color: '#0a2463' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#0a2463' }}>Clean & Sanitized</h3>
              <p className="text-gray-600">Well-maintained and hygienic vehicles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-white shadow-md">
                <Car className="w-8 h-8" style={{ color: '#0a2463' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#0a2463' }}>24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock service at your convenience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 bg-gray-50 flex items-center justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.606164610499!2d85.1147814!3d25.5847664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59003a5bbd63%3A0xe7792101900d40a2!2sMaa%20Lakshmi%20Tour%20And%20Travels!5e0!3m2!1sen!2sin!4v1777649252096!5m2!1sen!2sin" width="1000" height="450" style={{ border: '0' }} loading="lazy"></iframe>
      </section>

      <section className="py-20" style={{ backgroundColor: '#0a2463' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Plan Your Journey Today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Experience hassle-free long-distance travel with our premium service
          </p>
          <a href="#home">
            <button className="px-10 py-4 rounded-lg text-lg transition-all hover:opacity-90" style={{ backgroundColor: '#d4af37', color: '#0a2463' }}>
              Book Your Ride
            </button>
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl mb-4" style={{ color: '#d4af37' }}>Maa Lakshmi Tour and Travels</div>
              <p className="text-gray-400">Your trusted partner for long-distance travel across India</p>
            </div>
            <div>
              <h3 className="text-lg mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Phone: +91 94316 74083</p>
              <p className="text-gray-400 mb-2">Email: maalakshmitourandtravels@gmail.com </p>
              <p className="text-gray-400">Location: India</p>
            </div>
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#fleet" className="block text-gray-400 hover:text-white transition-colors">Our Fleet</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Maa Lakshmi Tour and Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
