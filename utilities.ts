export class Utilities {

    async delay(time: any) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
}