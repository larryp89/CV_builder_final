import "../styles/PersonalDetails.css";
import FormInput from "./FormInput";

function PersonalDetails({ defaultForm, handleDynamicChange }) {
  return (
    <div className="personal-details">
      <h2 className="personal-details__title">Personal Details</h2>

      <FormInput
        text="First Name"
        type="text"
        placeholder={defaultForm.firstName}
        name="firstName"
        handleChange={handleDynamicChange}
      />
      <FormInput
        text="Last Name"
        type="text"
        placeholder={defaultForm.lastName}
        name="lastName"
        handleChange={handleDynamicChange}
      />
      <FormInput
        text="Current Job Title"
        type="text"
        placeholder={defaultForm.currentJob}
        name="currentJob"
        handleChange={handleDynamicChange}
      />
      <FormInput
        text="Personal Summary"
        Tag="textarea"
        name="personalSummary"
        handleChange={handleDynamicChange}
      />
    </div>
  );
}

export default PersonalDetails;
