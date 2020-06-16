module.exports = function override(config, env) { 
    config.module.rules[0].parser.requireEnsure = true;
    return config };