import githubStrategies from './github_strategies.js'
import googleStrategies from './google_strategies.js'
import localStrategies from './local_strategies.js'

export default [...localStrategies, ...googleStrategies, ...githubStrategies]
