import express from 'express';
import readBug from './readBug';
import createBug from './createBug';
import updateBug from './updateBug';
import deleteBug from './deleteBug';

const router = express.Router({mergeParams: true});

router.get('/', readBug);
router.post('/', createBug);
router.put('/:id', updateBug);
router.delete('/:id', deleteBug);

export default router;