import express from 'express'
import { deleteEmail, generateEmails, getMyEmails, updateEmail } from '../controller/mail.controller.js';
import { authmiddleware } from '../middleware/auth.middleware.js';
import { sendEmail } from '../Services/email.service.js';

const router = express.Router();

router.post('/generate', authmiddleware, generateEmails);
router.get('/', authmiddleware,getMyEmails);
router.get('/:id', authmiddleware,updateEmail);
router.get('/:id', authmiddleware, deleteEmail);
router.post('/send', authmiddleware,sendEmail);

export default router;