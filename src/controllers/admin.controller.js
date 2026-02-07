export const getAdminHome = (req, res) => {
    res.send('Protected admin dashboard');
};

export const getAdminProfile = (req, res) => {
    const { id } = req.params;
    res.send(`Protected admin profile ${id}`);
};
