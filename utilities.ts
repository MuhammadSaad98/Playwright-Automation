export class Utilities {

    /////// Utilities are basically common functions which are used multiple times in our project on different locations


    async delay(time: any) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
}