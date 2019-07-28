var log4js = require('log4js');
log4js.configure({
    appenders: {
        ruleConsole: {type: 'console'},
        ruleFile: {
            type: 'dateFile',
            // 这个目录是相对于根目录的，即与app.js 是同一级的
            filename: 'logs/server-',
            pattern: 'yyyy-MM-dd.log',
            maxLogSize: 10 * 1000 * 1000,
            numBackups: 3,
            alwaysIncludePattern: true
        },
        celveFile: {
            type: 'dateFile',
            // 这个目录是相对于根目录的，即与app.js 是同一级的
            filename: 'logs/celve-',
            pattern: 'yyyy-MM-dd.log',
            maxLogSize: 10 * 1000 * 1000,
            numBackups: 3,
            alwaysIncludePattern: true
        }
    },
    categories: {
        normal: {appenders: ['ruleConsole', 'ruleFile'], level: 'debug'},
        celve: {appenders: ['celveFile'], level: 'debug'},
        default: {appenders: ['ruleConsole', 'ruleFile'], level: 'info'}

    }
});
var logger = log4js.getLogger('normal');
var celveLogger = log4js.getLogger('celve');
// var consoleLogger = log4js.getLogger('ruleConsole');

exports.logger = logger;
exports.celveLogger = celveLogger;

exports.use = function (app) {
    //页面请求日志,用auto的话,默认级别是WARN
    //这样会自动记录每次请求信息，放在其他use上面
    // logger.debug('log4js 启动')
    app.use(log4js.connectLogger(logger, {level: 'info', format: ':method :url'}));
}
