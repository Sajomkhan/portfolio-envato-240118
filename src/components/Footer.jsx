import { socialmedias } from "../data/data";

const Footer = () => {
  return (
    <div className="container flex flex-col md:flex-row-reverse gap-4 justify-between items-center my-8">
      <div className="flex gap-6">
        {socialmedias.map((socialmedia, index) => {
          const { icon, address } = socialmedia;
          return (
            <div key={index}>
              <a href={address} target="blank">
                <img
                  className="h-4 w-4 bg-gray-200 rounded-sm shadow-md hover:bg-teal-300 hover:scale-110 duration-300"
                  src={icon}
                  alt="Icon Image"
                />
              </a>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-gray-400">© 2024 copyright all right reserved by Ajom</p>
    </div>
  );
};

export default Footer;
