import { Injectable, InjectionToken } from "@angular/core";

export const LOG_LEVEL = new InjectionToken("log_level");

export enum LogLevel {
    DEBUG, INFO, ERROR
}
@Injectable()
export class LogService {

    private first : boolean = true;
    private _minimumLevel : LogLevel = LogLevel.INFO;

    constructor() { this.minimumLevel = LogLevel.INFO}
    set minimumLevel(level : LogLevel) {
        console.log("LogService CTOR",level)
        this._minimumLevel = level;
    }
    get minimumLevel()  : LogLevel {
        if (this.first)
        {
            this.first = false;
        }
        return this._minimumLevel;
    }

    logInfoMessage(message: string) {
        this.logMessage(LogLevel.INFO, message);
    }
    logDebugMessage(message: string) {
        this.logMessage(LogLevel.DEBUG, message);
    }
    logErrorMessage(message: string) {
        this.logMessage(LogLevel.ERROR, message);
    }
    logMessage(level: LogLevel, message: string) {
        if (level >= this.minimumLevel) {
            console.log(`Message (${LogLevel[level]}): ${message}`);
        }
    }
}