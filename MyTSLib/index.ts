let edge = require("edge");
let path = require("path");
declare class Promise<T> {
    constructor(callback: (resolve: any, reject: any) => void);
}

export default class MyLIb {

    private identityImport: (payload: any, callback: any) => any;    

    constructor() {

        this.identityImport = edge.func({
            assemblyFile: this.getAssemblyPath("MyCSharpLib.dll"),
            typeName: "MyCSharpLib.Dummy",
            methodName: "Identity"
        });
    }

    private getAssemblyPath(name: string): string {
        return path.resolve(__dirname, name);
    }
    
    public IdentityAsync(info: any): Promise<boolean> {

        return new Promise<boolean>((resolve: any, reject: any) => {
            this.identityImport(info,
                (error: any, result: any) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result.Result);
                    }
                }
            );
        });
    }
  
    public Identity(info: any): boolean {

        return this.identityImport(info, true).Result;
    }   
}