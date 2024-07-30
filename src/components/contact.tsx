import { ChangeEvent, FC, FormEvent, useState } from 'react';
// import emailjs from "emailjs-com";

const initialState = {
    name: '',
    email: '',
    message: '',
};

export interface ContactData {
  address: string;
  phone: string;
  email: string;
  facebook: string;
  twitter: string;
  youtube: string;
}

export interface ContactProps {
  data?: ContactData;
}

const initialData: ContactData = {
    address: '',
    phone: '',
    email: '',
    facebook: '',
    twitter: '',
    youtube: ''
};

export const Contact: FC<ContactProps> = (props) => {

    const { data = initialData } = props;

    const [{ name, email, message }, setState] = useState(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const clearState = () => setState({ ...initialState });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, email, message);

        {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }

        // emailjs
        //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
        //   .then(
        //     (result) => {
        //       console.log(result.text);
        //       clearState();
        //     },
        //     (error) => {
        //       console.log(error.text);
        //     }
        //   );
        clearState();
    };
    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="section-title">
                                <h2>Get In Touch</h2>
                                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                                </p>
                            </div>
                            <form name="sentMessage" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                placeholder="Name"
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows={4}
                                        placeholder="Message"
                                        required
                                        onChange={handleChange}
                                    ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 contact-info">
                        <div className="contact-item">
                            <h3>Contact Info</h3>
                            <p>
                                <span>
                                    <i className="fa fa-map-marker"></i> Address
                                </span>
                                {data.address}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-phone"></i> Phone
                                </span>{' '}
                                {data.phone}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-envelope-o"></i> Email
                                </span>{' '}
                                {data.email}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href={data.facebook}>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={data.twitter}>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={data.youtube}>
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{' '}
                        <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
