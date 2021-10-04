export class DomainUtills {
    baseUrl = new BaseUrl();
    GetDomain(): any {
        return this.baseUrl.ApiUrl +"api/";
    }

    GetClientDomain(isProduction: boolean = true): string {
        if (window.location.origin.includes('localhost')) {
            return this.baseUrl.ApiUrl;
        }
        else
            return this.baseUrl.ApplicationUrl;
    }
};
export class BaseUrl {
    private applicationUrl: string;
    private apiUrl: string;
    constructor() {
        this.applicationUrl = window.location.origin + "/";
        this.apiUrl = this.getApiUrl();
    }
    get ApplicationUrl() {
        return this.applicationUrl;
    }
    get ApiUrl() {
        return this.apiUrl;
    }
    getApiUrl() {
        let originalPath = window.location.origin;
        let domain: string = "";
        if (originalPath.includes("localhost")) {
            domain = "https://localhost:44336/";
        }
        // else if(originalPath.includes("clvstorage.s3-website.us-east-2")){
        //     domain="http://clvapi-dev2.us-east-1.elasticbeanstalk.com/";
        // }
        else if(originalPath.includes("clvstorage.s3-website.us-east-2")){
            domain="http://clvapi-dev.us-east-2.elasticbeanstalk.com/";

        }
        else{
            domain="http://192.168.100.13:84/";
        }
        return domain;
    }
}
