import { Injectable} from "@angular/core";
import { LogService,LogLevel } from "./log.service";
@Injectable()
export class SpecialLogService extends LogService {
    
    constructor() {
        super()
        this.minimumLevel = LogLevel.DEBUG;
    }
    
    logMessage(level: LogLevel, message: string) {
        if (level >= this.minimumLevel) {
            console.log(`Special Message (${LogLevel[level]}): ${message}`);
        }
    }
} 