import FotoRS from "../assets/images/bg rs fix.jpg";
const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Validasi input
    if (!name) {
      alert('Name cannot be empty');
      return;
    }

    if (!email) {
      alert('Email cannot be empty');
      return;
    }

    if (!message) {
      alert('Your Complient cannot be empty');
      return;
    }

    // Kirim data ke server jika input valid
    alert('Data sent successfully!');
    event.target.reset();
  }

  return (
    <div className="h-screen w-full flex items-center justify-center" style={{
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundImage: `url('${FotoRS}')`,
    }}>
      <div className="max-w-md mx-auto p-6 bg-transparant rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black-700 font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="px-4 py-2 border border-black-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 border border-black-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-black-700 font-bold mb-2">
              Your Complaint
            </label>
            <textarea
              id="message"
              className="px-4 py-2 border border-black-400 rounded-md w-full h-32 focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Write Your Complaint"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
