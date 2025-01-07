import Blog from '../models/blogModel';
// Fetch all blogs
export const getAllBlogs = async () => {
  return await Blog.find({});
};

// Fetch a single blog by ID
export const getBlogById = async (id) => {
  return await Blog.findById(id);
};

// Create a new blog
export const createBlog = async (blogData) => {
  const blog = new Blog(blogData);
  return await blog.save();
};

// Update a blog
export const updateBlog = async (id, updateData) => {
  return await Blog.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete a blog
export const deleteBlog = async (id) => {
  return await Blog.findByIdAndDelete(id);
};
