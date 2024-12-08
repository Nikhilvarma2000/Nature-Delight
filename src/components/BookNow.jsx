// import React, { useState } from 'react';

// const BookNow = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     startDate: '',
//     endDate: '',
//     message: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Validate form data before submission
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.phone) newErrors.phone = 'Phone Number is required';
//     if (!formData.startDate) newErrors.startDate = 'Start Date is required';
//     if (!formData.endDate) newErrors.endDate = 'End Date is required';
//     if (!formData.message) newErrors.message = 'Message is required';
//     return newErrors;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       setIsSubmitted(true);  // Set submission state to true
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   // Render thank you message after form submission
//   if (isSubmitted) {
//     return (
//       <div className="w-full min-h-screen bg-yellow-100 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-yellow-500">Thank You for Your Booking!</h2>
//           <p className="mt-4 text-lg text-gray-700">We will get in touch with you shortly.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Form Section */}
//       <div className="w-full min-h-screen bg-yellow-100 flex items-center justify-center py-10 pt-32"> {/* Adjusted pt-32 for spacing */}
//         <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg w-full"> {/* Increased width */}
//           <h2 className="text-4xl font-bold text-center mb-6 text-gray-700">Book Your Fruit Box </h2> {/* Heading inside form */}
          
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-2 border rounded-md"
//               required
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">Phone Number</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-2 border rounded-md"
//               required
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="startDate" className="block text-lg font-semibold text-gray-700">Start Date</label>
//             <input
//               type="date"
//               id="startDate"
//               name="startDate"
//               value={formData.startDate}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-2 border rounded-md"
//               required
//             />
//             {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="endDate" className="block text-lg font-semibold text-gray-700">End Date</label>
//             <input
//               type="date"
//               id="endDate"
//               name="endDate"
//               value={formData.endDate}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-2 border rounded-md"
//               required
//             />
//             {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               className="w-full px-4 py-2 mt-2 border rounded-md"
//               required
//             />
//             {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition duration-300"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookNow;
