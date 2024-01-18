import { useRef, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact/contact.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    from_name: "",
    from_email: "",
    message: "",
  })

  const handleInputChange =(e) => {
    const { name, value } = e.target;
    setInputValues({...inputValues, [name]: value})
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true)

    emailjs
      .sendForm(
        "service_xwv4gp7",
        "template_5ply797",
        form.current,
        "IyCRsM1LVFLJYIHIy"
      )
      .then(
        (result) => {
          console.log(result.text)
          setInputValues({
            from_name: "",
            from_email: "",
            message: "",
          })
          toast("Message sent successfully")
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(()=>{setLoading(false)})
  };

  return (
    <section id="Contact" className="w-full section_color lg:px-16">
      <h1 className="text-3xl font-bold text-center lg:mb-12">Contact Me</h1>
      <div className="flex flex-col items-center lg:flex-row gap-4">
        {/* -------------Image Div----------------- */}
        <div className="h-full object-cover">
          <img className="" src={contact} alt="Image" />
        </div>

        {/* ------------Message Form---------------- */}
        <div className="max-w-[500px] flex flex-col gap-7 text-sm lg:text-base px-2">
          <h1 className="text-lg primary_text font-bold">Get in touch</h1>
          <p>
            My inbox is always open. Whether you have a any message or question
            just say hello or write message. I will try my best to get back
            to you!
          </p>
          {/* -------------------Input Form------------------------- */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <input 
            type="text" 
            name="from_name"
            value={inputValues.from_name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="outline-none section_color shadow-md rounded-lg py-3 px-4"
            required
            />
            <input 
            type="email" 
            name="from_email"
            value={inputValues.from_email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="outline-none section_color shadow-md rounded-lg py-3 px-4"
            required
            />
            <textarea
            rows={6}
            name="message"
            value={inputValues.message}
            onChange={handleInputChange}
            placeholder="Write message"
            className="outline-none section_color shadow-md rounded-lg py-3 px-4"
            required
            />
            {/* -------------------Submit Button-------------------- */}
            <button
              disabled={loading}
              className="btn_gradient w-fit disabled:cursor-not-allowed mt-3"
            >
              {loading ? (
                <span className=" flex items-center gap-2">
                 Wait <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Send Message 👋"
              )}
            </button>
            <ToastContainer/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import { useRef, useState } from "react";
// import { BiLoaderAlt } from "react-icons/bi";
// import emailjs from "@emailjs/browser";
// import contact from "../assets/contact/contact.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

// const Contact = () => {
//   const [loading, setLoading] = useState(false);

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     setLoading(true)

//     emailjs
//       .sendForm(
//         "service_xwv4gp7",
//         "template_5ply797",
//         form.current,
//         "IyCRsM1LVFLJYIHIy"
//       )
//       .then(
//         (result) => {
//           console.log(result.text)
//           toast("Message sent successfully")
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       )
//       .then(()=>{setLoading(false)})
//   };

//   return (
//     <section id="Contact" className="w-full section_color lg:px-16">
//       <h1 className="text-3xl font-bold text-center lg:mb-12">Contact Me</h1>
//       <div className="flex flex-col items-center lg:flex-row gap-4">
//         {/* -------------Image Div----------------- */}
//         <div className="h-full object-cover">
//           <img className="" src={contact} alt="Image" />
//         </div>

//         {/* ------------Message Form---------------- */}
//         <div className="max-w-[500px] flex flex-col gap-7 text-sm lg:text-base px-2">
//           <h1 className="text-lg primary_text font-bold">Get in touch</h1>
//           <p>
//             My inbox is always open. Whether you have a any message or question
//             just say hello or write message. I will try my best to get back
//             to you!
//           </p>
//           {/* -------------------Input Form------------------------- */}
//           <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
//             <input 
//             type="text" 
//             name="from_name" 
//             placeholder="Your Name"
//             className="outline-none section_color shadow-md rounded-lg py-3 px-4"
//             required
//             />
//             <input 
//             type="email" 
//             name="from_email"
//             placeholder="Your Email"
//             className="outline-none section_color shadow-md rounded-lg py-3 px-4"
//             required
//             />
//             <textarea
//             rows={6}
//             name="message"
//             placeholder="Write message"
//             className="outline-none section_color shadow-md rounded-lg py-3 px-4"
//             required
//             />
//             {/* -------------------Submit Button-------------------- */}
//             <button
//               disabled={loading}
//               className="btn_gradient w-fit disabled:cursor-not-allowed mt-3"
//             >
//               {loading ? (
//                 <span className=" flex items-center gap-2">
//                  Wait <BiLoaderAlt className="animate-spin" />
//                 </span>
//               ) : (
//                 "Send Message 👋"
//               )}
//             </button>
//             <ToastContainer/>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;