export const validateContact = (formData) => {
  const errors = {};

 
  if (!formData.name.trim()) {
    errors.name = "Name is required.";
  } else if (formData.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

 
  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

 
  if (!formData.subject.trim()) {
    errors.subject = "Subject is required.";
  } else if (formData.subject.trim().length < 5) {
    errors.subject = "Subject must be at least 5 characters.";
  }


  if (!formData.message.trim()) {
    errors.message = "Message is required.";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
};