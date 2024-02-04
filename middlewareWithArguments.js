export const validateUserData = (type) => {
  return (request, response, next) => {
    const { email, password } = request.body;
    if (!email || !password) {
      return response
        .status(400)
        .json({ message: "Please provide all the fields" });
    }
    next();
  };
};
