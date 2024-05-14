import PropTypes from "prop-types";

const Account = ({ title, accountNumber, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {title} ({accountNumber})
        </h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};
Account.propTypes = {
  title: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Transactions = () => {
  return (
    <div>
      <Account
        title="Argent Bank Checking"
        accountNumber="x8349"
        amount="2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings"
        accountNumber="x6712"
        amount="10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card"
        accountNumber="x8349"
        amount="184.30"
        description="Current Balance"
      />
    </div>
  );
};

export default Transactions;
