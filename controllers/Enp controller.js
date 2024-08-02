
app.get('/influencers/filter', async (req, res) => {
    try {
      const { categories, location } = req.query;
  
      if (!categories || !location) {
        return res.status(400).json({ message: 'Categories and location are required' });
      }
  
      const categoriesArray = categories.split(',');
      const influencers = await Influencer.find({
        categories: { $in: categoriesArray },
        location: location
      });
  
      res.status(200).json(influencers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  