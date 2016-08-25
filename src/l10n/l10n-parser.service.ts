import { Observable } from 'rxjs/Observable';
import { Inject, Injectable, OpaqueToken } from '@angular/core';

export abstract class L10nParserService {
  abstract parse(value:string, ...args:any[]): string;
}

@Injectable()
export class L10nFormatParserService extends L10nParserService {
  parse(value:string, ...args:string[]): string {
    return value.replace(/{(\d+)}/g, (match, idx) => { 
      return typeof args[idx]==='string'? args[idx] : match;
    });
  }
}



