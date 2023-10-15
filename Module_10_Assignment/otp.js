const express = require('express');
const router = express.Router();
const OTPModel = require('../models/otpModel');


router.post('/', async (req, res) => {
  try {
    const otp = new OTPModel(req.body);
    const savedOTP = await otp.save();
    res.status(201).json(savedOTP);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const otps = await OTPModel.find();
    res.status(200).json(otps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:otpId', async (req, res) => {
  try {
    const otp = await OTPModel.findById(req.params.otpId);
    if (!otp) {
      return res.status(404).json({ message: 'OTP not found' });
    }
    res.status(200).json(otp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:otpId', async (req, res) => {
  try {
    const updatedOTP = await OTPModel.findByIdAndUpdate(req.params.otpId, req.body, { new: true });
    if (!updatedOTP) {
      return res.status(404).json({ message: 'OTP not found' });
    }
    res.status(200).json(updatedOTP);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:otpId', async (req, res) => {
  try {
    const deletedOTP = await OTPModel.findByIdAndRemove(req.params.otpId);
    if (!deletedOTP) {
      return res.status(404).json({ message: 'OTP not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
