import {useState} from 'react';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const[errors, setErrors] = useState({});
  const[isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value 
    }));
    if(errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
    if(isSuccess) {
      setIsSuccess(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if(!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if(!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if(!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if(!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    if(Object.keys(newErrors).length === 0) {
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Contact Us</h2></div>

      {isSuccess && <p className="p-4 bg-green-50 text-green-700 rounded-md text-sm font-medium text-center">Your message has been sent successfully!</p>}
      <form onSubmit={handleSubmit} className=" space-y-6">
          <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full block border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full block border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full block border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div>
              <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                  Send Message
              </button>
          </div>
      </form>
      </div>
    </div>
  );
};