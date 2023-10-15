const express = require('express');
const router = express.Router();
const WorksModel = require('../models/worksModel'); 


router.post('/', async (req, res) => {
  try {
    const work = new WorksModel(req.body);
    const savedWork = await work.save();
    res.status(201).json(savedWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const works = await WorksModel.find();
    res.status(200).json(works);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:workId', async (req, res) => {
  try {
    const work = await WorksModel.findById(req.params.workId);
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.status(200).json(work);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:workId', async (req, res) => {
  try {
    const updatedWork = await WorksModel.findByIdAndUpdate(req.params.workId, req.body, { new: true });
    if (!updatedWork) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.status(200).json(updatedWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:workId', async (req, res) => {
  try {
    const deletedWork = await WorksModel.findByIdAndRemove(req.params.workId);
    if (!deletedWork) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
