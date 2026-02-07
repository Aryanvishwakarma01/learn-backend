export const getUserPage = (req, res) => {
    res.send('welcome to user page');
};

export const getUserById = (req, res) => {
    const { id } = req.params;

    res.json({
        success: true,
        userId: id
    });
};

export const getAllUsers = (req, res) => {
    res.send('Get all users');
};

export const createUser = (req, res) => {
    res.send('Create user');
};

export const updateUser = (req, res) => {
    res.send('Update user');
};

export const deleteUser = (req, res) => {
    res.send('Delete user');
};
