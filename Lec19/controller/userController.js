module.exports.postaddBlog = async (req, res) => {
    let { title, body, userId } = req.body;
    let userExists = await Users.findById(userId);
    if (userExists) {
        let newBlog = new Blogs({
            title: title,
            body: body,
            date: Date.now(),
            userId: userId
        });
        await newBlog.save();
        userExists.blogs.push(newBlog._id);
        await userExists.save();
        res.json({
            success: true,
            data: newBlog,
            message: "blog added successfully!!!"
        });
    }
};
module.exports.getReadBlog = async (req, res) => {
    let { id } = req.params;
    let blog = await Blogs.findOne({ _id: id });
    res.json({
        success: true,
        data: blog
    });
};

module.exports.getlogs = async (req, res) => {
    let { id } = req.params;
    let blog = await Blogs.findOne({ _id: id });
    res.json({
        success: true,
        data: blog
    });
};