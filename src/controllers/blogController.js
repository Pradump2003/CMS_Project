// Example controllers/userController.js
const getAllBlogs = (req, res) => {
  res.json({ message: 'Get all users' });
};

const getBlogById = (req, res) => {
  res.json({ message: `Get user with ID ${req.params.id}` });
};

const createBlog = (req, res) => {
  res.json({ message: 'Create a new user', data: req.body });
};

const updateBlog = (req, res) => {
  res.json({ message: `Update user with ID ${req.params.id}`, data: req.body });
};

const deleteBlog = (req, res) => {
  res.json({ message: `Delete user with ID ${req.params.id}` });
};

export { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog };
