import { Injectable, InjectionToken } from "@angular/core";

export const LOG_LEVEL = new InjectionToken("log_level");

export enum LogLevel {
    DEBUG, INFO, ERROR
}
@Injectable()
export class LogService {

    private objectId:number = Math.random();

    getObjectId(): number {return this.objectId;}

    private _minimumLevel : LogLevel = LogLevel.INFO;
    set minimumLevel(level : LogLevel) {
        this._minimumLevel = level;
    }
    get minimumLevel()  : LogLevel {
        return this._minimumLevel;
    }

    constructor() { 
        this.minimumLevel = LogLevel.INFO
        this.objectId = Math.random();
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