import express from 'express'
import passport from 'passport'
import config from '../config.json' with { type: 'json' }

const router = express.Router()

// IT DIDN'T HELP ME!
router.post(
  '/login',
  passport.authenticate('local-login', {
    failureRedirect: `${config.CLIENT_URL}/fallback`,
    successReturnToOrRedirect: `${config.CLIENT_URL}`,
  })
)

router.post(
  '/register',
  passport.authenticate('local-register', {
    failureRedirect: `${config.CLIENT_URL}/fallback`,
    successReturnToOrRedirect: `${config.CLIENT_URL}`,
  })
)

export default router
