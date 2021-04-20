//Calc Functions
function sec2time(timeInSeconds) {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(timeInSeconds).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60),
    milliseconds = time.slice(-3);
    if(hours == 00) {
    return pad(minutes, 2) + ':' + pad(seconds, 2);
    }  
    else {
    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
    }
  }
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
//modules
const
    os = require("os"),
    chalk = require("chalk"),
    figlet = require("figlet"),
    moment = require("moment"),
    package = require('./package.json');
let Version = package.version;
//code
let msg = {
    welcome: `${chalk.bgHex('#558802')("Welcome to ")}${chalk.bgHex('#9902AA')("nodfetch!")}${chalk.bgHex('#777701')(`V${Version}`)}`,
} 
console.log(msg.welcome)
let UsedRAM = os.totalmem()-os.freemem()
const infoMsg = () => {
    console.log(chalk.blueBright('OS:'),
    chalk.bgHex('#007700')(os.hostname()))

    console.log(chalk.greenBright('Architecture:'),
    chalk.bgHex('#000077')(os.arch()))

    console.log(chalk.blueBright('OS Type:'),
    chalk.bgHex('#007700')(os.type()))

    console.log(chalk.greenBright('Kernel version?:'),
    chalk.bgHex('#000077')(os.release()))

    console.log(chalk.blueBright('Uptime:'),
    chalk.bgHex('#007700')(sec2time(os.uptime())))

    console.log(chalk.greenBright('FREE RAM:'),
    chalk.bgHex(`#007700`)(formatBytes(os.freemem())),
    "/",
    chalk.bgHex('#000077')(formatBytes(os.totalmem())))

    console.log(chalk.blueBright('USED RAM:'),
    chalk.bgHex(`#770000`)(formatBytes(UsedRAM)),
    "/",
    chalk.bgHex('#000077')(formatBytes(os.totalmem())))
}

return infoMsg()