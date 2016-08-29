export declare abstract class L10nParserService {
    abstract parse(value: string, ...args: any[]): string;
}
export declare class L10nFormatParserService extends L10nParserService {
    parse(value: string, ...args: string[]): string;
}
