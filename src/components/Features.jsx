import iconChat from "./../assets/img/iconChat.webp";
import iconMoney from "./../assets/img/iconMoney.webp";
import iconSecurity from "./../assets/img/iconSecurity.webp";
import PropTypes from "prop-types";

const Feature = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Feature
        icon={iconChat}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <Feature
        icon={iconMoney}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <Feature
        icon={iconSecurity}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
};

export default Features;
