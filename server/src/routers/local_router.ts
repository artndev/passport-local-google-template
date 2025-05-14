import express from 'express'
import passport from 'passport'
import config from '../config.json' with { type: 'json' }

const router = express.Router()

// IT DIDN'T HELP ME!
router.post('/login', (req, res, next) => {
  return passport.authenticate(
    'local-login',
    {
      failureRedirect: `${config.CLIENT_URL}/fallback`,
    },
    (
      err: Error | null | unknown,
      user: Express.User | false,
      _info: object
    ) => {
      if (err) return res.redirect(`${config.CLIENT_URL}/register`)
      if (!user) return res.redirect(`${config.CLIENT_URL}/fallback`)

      req.logIn(user, err2 => {
        if (err2) return res.redirect(`${config.CLIENT_URL}/fallback`)

        return res.redirect(`${config.CLIENT_URL}`)
      })
    }
  )(req, res, next)
})

router.post(
  '/register',
  passport.authenticate('local-register'),
  (req, res) => {
    res.status(200).json({
      message: 'You have successfully registered',
      answer: req.user,
    })
  }
)

export default router
