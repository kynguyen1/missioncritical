export interface DBConfig {
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
  }
  
  export interface Config {
    db: DBConfig;
  }
  
  declare const config: Config;
  export { config };
  