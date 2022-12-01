const Pino = require('pino');

const createLogger = (optionsIn = undefined) => {
  const env = process.env.NODE_ENV || 'development';
  const name = process.env.APP_NAME || 'ACL-ORDER-DS';
  const options = optionsIn || {
    enabled: process.env.LOG_ENABLED || ['production', 'development'].includes(env),
    name,
    level: process.env.LOG_LEVEL || (env === 'production' ? 'info' : 'debug'),
    customLevels: { healthy: 0 },
    redact: [],
  };
  return Pino(options);
};

let logger;

/**
 * info
 * @param {Array.<String>} msg
 * @param {object} obj
 */
const info = (msg, obj = null) => {
  logger.info({ detailsMsg: obj, descripcion: msg.join(' ') });
};

/**
 * error
 * @param {Array.<String>} msg
 * @param {object} obj
 */
const error = (msg, obj) => {
  logger.error({ detailsMsg: obj, descripcion: msg.join(' ') });
};

// New Logger
const write = (optionsIn = undefined) => {
  logger = createLogger(optionsIn);
  return { info, error };
};

module.exports = {
  createLogger,
  write,
};
