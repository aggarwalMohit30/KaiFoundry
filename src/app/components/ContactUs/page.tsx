import ContactForm from "./ContactForm";
import MapLocation from "./MapLocation";
import ContactDetails from "./ContactDetails";
import SocialIcons from "./SocialIcons";

const ContactUs = () => {
    return (
        <section className="container sm:p-20 p-4 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10">
                Let's Get <span className="text-fuchsia-600">In Touch</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4 min-h-screen">
                {/* Box 1 */}
                <div className="md:row-span-1 flex-col">
                    <h3 className="text-xl font-semibold mb-6 sm:mb-10">Where To Find Us</h3>
                    <MapLocation />
                </div>
                {/* Box 3 (Placed in second column in desktop view, but second in mobile) */}
                <div className="md:col-start-2 row-span-2 flex-col">
                    <h3 className="text-xl font-semibold mb-6 sm:mb-10">Leave A Message</h3>
                    <ContactForm />
                </div>
                {/* Box 2 */}
                <div className="md:row-span-1 flex-col">
                    <ContactDetails />
                    <SocialIcons />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
